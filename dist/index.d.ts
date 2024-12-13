import React$1, { CSSProperties } from 'react';

type InlineBlocks<R = any> = Array<string | ((props: any) => R)>;
type TagFunction<R = any> = (strings: TemplateStringsArray, ...values: InlineBlocks) => R;
/**
 * Callable<Parameters, ReturnType>
 * - Used for defining signatature of function: parameters and return type.
 * - Use tuple types for variadic signatures
 *   example: `type funcParams = [arg: string, ...options?: any[]];`
 *             Callable<funcParams, OtherType>
 * - Usage:
 *    type CallableFunction = Callable<null, string>;
 *    const myFunc : CallableFunction = () : string => {
 *      return 'string';
 *    }
 */
type Callable<P = any, V = any> = P extends never | null | undefined ? () => V : P extends any[] ? (...args: P) => V : P extends any ? ((arg: P) => V) | ((arg?: P) => V) : unknown;

/**
 * TYPES
 */
type ContainerElement = HTMLElement | HTMLHeadElement;
type CacheContainer = (() => Promise<ContainerElement>) | ContainerElement;
type CSSValue = Record<keyof Styles, string | number>;
type InlineStyleFunction = <T>(props: T) => string | void;
type Styles = Record<keyof CSSProperties, string | number>;
type Theme = Record<any, any>;
/**
 * INTERFACES
 */
interface ParsedCSSResult {
    keyValue: Array<string>;
    mediaQueries: Array<string>;
    psuedoClasses: Array<string>;
}
interface StyledProps extends Partial<React.PropsWithChildren> {
    componentCssPrefix?: string;
    style: Styles;
}
interface GlobalStyleSheetProps {
    globalCssPrefix?: string;
    stylesheet: string;
}
interface ThemeProviderProps extends Partial<React.PropsWithChildren> {
    theme: Theme;
}
interface ThemeCacheProviderProps$1 extends Partial<React.PropsWithChildren> {
    container: CacheContainer;
}

/**
 * Name: ThemeCacheProviderProps
 * @interface ThemeCacheProviderProps
 */
interface ThemeCacheProviderProps extends React$1.PropsWithChildren {
    componentCssPrefix?: string;
    globalCssPrefix?: string;
    logger?: Callable<any[], void>;
}
/**
 * ThemeCacheProvider: main entrypoint for context provider
 * @param container either an HTMLElement or Promise returning one
 * @returns ThemeCache Provider Component
 */
declare const ThemeCacheProvider: (cacheContainer: CacheContainer) => (props: ThemeCacheProviderProps) => JSX.Element;
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
 * mediaQueryRegex - matches `@ { ... }`
 */
declare const mediaQueryRegex: RegExp;
/**
 * psuedoClassRegex - matches `& { ... }`
 */
declare const psuedoClassRegex: RegExp;
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

export { CSSValue, CacheContainer, ContainerElement, GlobalStyleSheet, GlobalStyleSheetProps, InlineStyleFunction, ParsedCSSResult, StyledProps, Styles, Theme, ThemeCacheProvider, ThemeCacheProviderProps$1 as ThemeCacheProviderProps, ThemeProvider, ThemeProviderProps, createCSSObject, createCSSString, createStyleElement, css, _default as default, mediaQueryRegex, psuedoClassRegex, removeWhitespace };
