import React$1, { CSSProperties } from 'react';

/**
 * TYPES
 */
declare type ContainerElement = HTMLElement | HTMLHeadElement;
declare type CacheContainer = (() => Promise<ContainerElement>) | ContainerElement;
declare type CSSValue = Record<keyof Styles, string | number>;
declare type InlineBlocks = Array<string | ((props: any) => any)>;
declare type InlineStyleFunction = <T>(props: T) => string | void;
declare type Styles = Record<keyof CSSProperties, string | number>;
declare type TaggedFunctionStrings = Readonly<string[]> | TemplateStringsArray;
declare type TagFunction = (strings: TemplateStringsArray, ...values: InlineBlocks) => any;
declare type Theme = Record<any, any>;
/**
 * INTERFACES
 */
interface ParsedCSSResult {
    keyValue: Array<string>;
    mediaQueries: Array<string>;
    psuedoClasses: Array<string>;
}
interface StyledProps extends Partial<React.PropsWithChildren> {
    style: Styles;
}
interface GlobalStyleSheetProps {
    stylesheet: string;
}
interface ThemeProviderProps extends Partial<React.PropsWithChildren> {
    theme: Theme;
}
interface ThemeCacheProviderProps extends Partial<React.PropsWithChildren> {
    container: CacheContainer;
}

/**
 * ThemeCacheProvider: main entrypoint for context provider
 * @param container either an HTMLElement or Promise returning one
 * @returns ThemeCache Provider Component
 */
declare const ThemeCacheProvider: (cacheContainer: CacheContainer) => (props: React$1.PropsWithChildren) => JSX.Element;
/**
 * ThemeProvider: main entrypoint for context provider
 * @param theme
 * @returns Theme Provider Component
 */
declare const ThemeProvider: (theme: Theme) => (props: React$1.PropsWithChildren) => JSX.Element;
/**
 * css styles helper function
 * CSS rule validation is up to implementor
 * Usage:
 *   const styles = css(props)`
 *      body {
 *       color: ${props.theme.bodycolor};
 *      }
 *   `;
 * @param props optional props to pass for inline functions
 * @returns TagFunction that return the theme object parsed CSS stylesheet
 */
declare const css: (props?: Record<any, any>) => TagFunction;
/**
 * GlobalStyleSheet singleton
 * @param props styles: Template literal string
 * @returns JSX.Element of <style/> for use in App layout
 */
declare const GlobalStyleSheet: (props: GlobalStyleSheetProps) => JSX.Element;
/**
 * Block renderable HTMLElements  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/
 */
declare const _default: {
    a: TagFunction;
    address: TagFunction;
    area: TagFunction;
    article: TagFunction;
    aside: TagFunction;
    audio: TagFunction;
    b: TagFunction;
    base: TagFunction;
    bdi: TagFunction;
    bdo: TagFunction;
    blockquote: TagFunction;
    br: TagFunction;
    button: TagFunction;
    canvas: TagFunction;
    cite: TagFunction;
    code: TagFunction;
    col: TagFunction;
    colgroup: TagFunction;
    data: TagFunction;
    datalist: TagFunction;
    dd: TagFunction;
    del: TagFunction;
    details: TagFunction;
    dfn: TagFunction;
    dialog: TagFunction;
    div: TagFunction;
    dl: TagFunction;
    dt: TagFunction;
    em: TagFunction;
    embed: TagFunction;
    fieldset: TagFunction;
    figcaption: TagFunction;
    figure: TagFunction;
    footer: TagFunction;
    form: TagFunction;
    h1: TagFunction;
    h2: TagFunction;
    h3: TagFunction;
    h4: TagFunction;
    h5: TagFunction;
    h6: TagFunction;
    header: TagFunction;
    hgroup: TagFunction;
    hr: TagFunction;
    i: TagFunction;
    iframe: TagFunction;
    img: TagFunction;
    input: TagFunction;
    ins: TagFunction;
    kbd: TagFunction;
    keygen: TagFunction;
    label: TagFunction;
    legend: TagFunction;
    li: TagFunction;
    link: TagFunction;
    main: TagFunction;
    map: TagFunction;
    mark: TagFunction;
    menu: TagFunction;
    menuitem: TagFunction;
    meter: TagFunction;
    nav: TagFunction;
    nobr: TagFunction;
    noframes: TagFunction;
    noscript: TagFunction;
    object: TagFunction;
    ol: TagFunction;
    optgroup: TagFunction;
    option: TagFunction;
    output: TagFunction;
    p: TagFunction;
    picture: TagFunction;
    plaintext: TagFunction;
    pre: TagFunction;
    progress: TagFunction;
    q: TagFunction;
    rp: TagFunction;
    rt: TagFunction;
    rtc: TagFunction;
    ruby: TagFunction;
    s: TagFunction;
    samp: TagFunction;
    section: TagFunction;
    select: TagFunction;
    shadow: TagFunction;
    small: TagFunction;
    span: TagFunction;
    strong: TagFunction;
    sub: TagFunction;
    summary: TagFunction;
    sup: TagFunction;
    table: TagFunction;
    tbody: TagFunction;
    td: TagFunction;
    textarea: TagFunction;
    tfoot: TagFunction;
    th: TagFunction;
    thead: TagFunction;
    time: TagFunction;
    tr: TagFunction;
    track: TagFunction;
    tt: TagFunction;
    u: TagFunction;
    ul: TagFunction;
    varEl: TagFunction;
    video: TagFunction;
    wbr: TagFunction;
};

/**
 * Random String generator
 * @param length Number: length of the final string
 * @param prefix String prefix
 * @param stripNumeric boolean to remove numbers
 * @returns string
 */
declare const randomString: (length?: number, prefix?: string, stripNumeric?: boolean) => string;
/**
 * mediaQueryRegex - matches `@ { ... }`
 */
declare const mediaQueryRegex: RegExp;
/**
 * psuedoClassRegex - matches `& { ... }`
 */
declare const psuedoClassRegex: RegExp;
/**
 * interpolate: Tagged string function parser
 * @param strings Tagged Function Strings
 * @param values Tagged Function Values
 * @param props Component props
 * @returns CSS stylesheet string
 */
declare const interpolate: (strings: TaggedFunctionStrings, values: InlineBlocks, props?: Record<any, any>) => string;
/**
 * Normalizes whitespsace in a string
 * @param str string
 * @returns string
 */
declare const removeWhitespace: (str: string) => string;
/**
 * createCSSObject: Takes string from tagged function and creates object by type
 * @param str input string
 * @returns ParsedCSSResult Record
 */
declare const createCSSObject: (str: string) => ParsedCSSResult;
/**
 * Naive CSS string concatenator
 * @param obj ParsedCSSResult Object from createCSSObject
 * @param className string
 * @returns string
 */
declare const createCSSString: (obj: ParsedCSSResult, className: string) => string;
/**
 * HTMLStyleElement constructor
 * @param id string for style element
 * @param styles rendered stylesheet for component
 * @returns HTMLStyleElement
 */
declare const createStyleElement: (id: string, styles: string) => HTMLStyleElement;

export { CSSValue, CacheContainer, ContainerElement, GlobalStyleSheet, GlobalStyleSheetProps, InlineBlocks, InlineStyleFunction, ParsedCSSResult, StyledProps, Styles, TagFunction, TaggedFunctionStrings, Theme, ThemeCacheProvider, ThemeCacheProviderProps, ThemeProvider, ThemeProviderProps, createCSSObject, createCSSString, createStyleElement, css, _default as default, interpolate, mediaQueryRegex, psuedoClassRegex, randomString, removeWhitespace };
