import { CSSProperties } from 'react';

/**
 * TYPES
 */
declare type CacheContainer = Element | typeof HTMLElement | HTMLHeadElement;
declare type ComponentChildren = JSX.Element | JSX.Element[] | string;
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
interface BaseProps {
    children?: ComponentChildren;
}
interface GenericComponentProps {
    children: ComponentChildren;
}
interface ParsedCSSResult {
    keyValue: Array<string>;
    mediaQueries: Array<string>;
    psuedoClasses: Array<string>;
}
interface StyledProps {
    style: Styles;
    children: ComponentChildren;
}

/**
 * ThemeCacheProvider: main entrypoint for context provider
 * @param container
 * @returns ThemeCache Provider Component
 */
declare const ThemeCacheProvider: (container: CacheContainer) => (props: BaseProps) => JSX.Element;
/**
 * ThemeProvider: main entrypoint for context provider
 * @param theme
 * @returns Theme Provider Component
 */
declare const ThemeProvider: (theme: Theme) => (props: BaseProps) => JSX.Element;
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
declare const interpolate: (strings: TaggedFunctionStrings, values: InlineBlocks, props?: any) => string;
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

export { BaseProps, CSSValue, CacheContainer, ComponentChildren, GenericComponentProps, InlineBlocks, InlineStyleFunction, ParsedCSSResult, StyledProps, Styles, TagFunction, TaggedFunctionStrings, Theme, ThemeCacheProvider, ThemeProvider, createCSSObject, createCSSString, createStyleElement, _default as default, interpolate, mediaQueryRegex, psuedoClassRegex, randomString, removeWhitespace };
