import type { InlineBlocks, ParsedCSSResult, TaggedFunctionStrings } from './types';

/**
 * Random String generator
 * @param length Number: length of the final string
 * @param prefix String prefix
 * @param stripNumeric boolean to remove numbers
 * @returns string
 */
export const randomString = (length = 20, prefix = '', stripNumeric = true): string => {
  let str = Math.random()
    .toString(36)
    .slice(2, 2 + length);
  str = stripNumeric ? str.replace(/[0-9]/g, '') : str;
  if (str.length !== length) {
    return randomString(length - str.length, prefix.concat(str), stripNumeric);
  }
  return prefix.concat(str);
};

/**
 * mediaQueryRegex - matches `@ { ... }`
 */
export const mediaQueryRegex = /(@media)(.*?)(\}\s+\})/gm;

/**
 * psuedoClassRegex - matches `& { ... }`
 */
export const psuedoClassRegex = /(&)(.*?)(\})/gm;

/**
 * interpolate: Tagged string function parser
 * @param strings Tagged Function Strings
 * @param values Tagged Function Values
 * @param props Component props
 * @returns CSS stylesheet string
 */
export const interpolate = (
  strings: TaggedFunctionStrings,
  values: InlineBlocks,
  props: Record<any, any> = {},
): string => {
  return strings.reduce((prev: string, curr: string, idx: number) => {
    const value = values[idx];
    let evaluated = '';
    if (typeof value === 'function') {
      evaluated = value(props) ?? '';
    } else if (typeof value === 'string') {
      evaluated = value;
    }
    return prev.concat(curr, evaluated);
  }, '');
};

/**
 * Normalizes whitespsace in a string
 * @param str string
 * @returns string
 */
export const removeWhitespace = (str: string): string => {
  return (
    str
      // reduce contiguous spaces to maximum of one
      .replace(/\s{1,}/gm, ' ')
      // remove line breaks
      .replace(/\n/gm, '')
      .trim()
  );
};

/**
 * Convience function for createCSSObject
 * @param str inout sting
 * @param re regix
 * @returns [string, RegExpMatchArray] tuple
 */
const parseCSSRegex = (str: string, re: RegExp): [string, RegExpMatchArray | []] => {
  let parsedString: string = str;
  const result = parsedString.match(re) || [];
  if (result && result.length > 0) {
    result.forEach((match) => {
      const start = parsedString.indexOf(match);
      parsedString = parsedString.slice(0, start).concat(parsedString.slice(start + match.length));
    });
  }
  return [parsedString, result];
};

/**
 * createCSSObject: Takes string from tagged function and creates object by type
 * @param str input string
 * @returns ParsedCSSResult Record
 */
export const createCSSObject = (str: string): ParsedCSSResult => {
  try {
    // Media Queries
    const [parsedMediaString, mediaQueries] = parseCSSRegex(str, mediaQueryRegex);
    // Psuedo Classes
    const [parsedPsuedoString, psuedoClasses] = parseCSSRegex(parsedMediaString, psuedoClassRegex);
    // Key/Value
    const keyValue = parsedPsuedoString
      .split(';')
      .map((itm) => itm.trim())
      .filter((itm) => itm.length > 0);
    return { mediaQueries, psuedoClasses, keyValue };
  } catch (err) {
    console.warn(`Resultant CSS is invalid: ${err}`);
    return { mediaQueries: [], psuedoClasses: [], keyValue: [] };
  }
};

/**
 * Naive CSS string concatenator
 * @param obj ParsedCSSResult Object from createCSSObject
 * @param className string
 * @returns string
 */
export const createCSSString = (obj: ParsedCSSResult, className: string): string => {
  // order: keyval > psuedo > media
  const { keyValue, psuedoClasses, mediaQueries } = obj;
  let str = '';
  str =
    keyValue && keyValue.length > 0
      ? `.${className} { ${keyValue.join(';\n').concat(';')} }\n`
      : '';
  str += psuedoClasses && psuedoClasses.length > 0 ? `${psuedoClasses.join('\n')}\n` : '';
  str += mediaQueries && mediaQueries.length > 0 ? `${mediaQueries.join('\n')}\n` : '';
  return str.replace(/&/gm, '.' + className);
};

/**
 * HTMLStyleElement constructor
 * @param id string for style element
 * @param styles rendered stylesheet for component
 * @returns HTMLStyleElement
 */
export const createStyleElement = (id: string, styles: string): HTMLStyleElement => {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = styles;
  styleEl.id = id;
  return styleEl;
};
