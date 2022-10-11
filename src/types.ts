import { CSSProperties } from 'react';

/**
 * TYPES
 */
export type ContainerElement = HTMLElement | HTMLHeadElement;
export type CacheContainer = (() => Promise<ContainerElement>) | ContainerElement;
export type CSSValue = Record<keyof Styles, string | number>;
export type InlineBlocks = Array<string | ((props: any) => any)>;
export type InlineStyleFunction = <T>(props: T) => string | void;
export type Styles = Record<keyof CSSProperties, string | number>;
export type TaggedFunctionStrings = Readonly<string[]> | TemplateStringsArray;
export type TagFunction = (strings: TemplateStringsArray, ...values: InlineBlocks) => any;
export type Theme = Record<any, any>;

/**
 * INTERFACES
 */
export interface ParsedCSSResult {
  keyValue: Array<string>;
  mediaQueries: Array<string>;
  psuedoClasses: Array<string>;
}
export interface StyledProps extends Partial<React.PropsWithChildren> {
  style: Styles;
}
export interface GlobalStyleSheetProps {
  stylesheet: string;
}
export interface ThemeProviderProps extends Partial<React.PropsWithChildren> {
  theme: Theme;
}
export interface ThemeCacheProviderProps extends Partial<React.PropsWithChildren> {
  container: CacheContainer;
}
