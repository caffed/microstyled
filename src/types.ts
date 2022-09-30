import { CSSProperties } from 'react'

/**
 * TYPES
 */
export type CacheContainer = Element | typeof HTMLElement | HTMLHeadElement
export type ComponentChildren = JSX.Element | JSX.Element[] | string
export type CSSValue = Record<keyof Styles, string | number>
export type InlineBlocks = Array<string | ((props: any) => any)>
export type InlineStyleFunction = <T>(props: T) => string | void
export type Styles = Record<keyof CSSProperties, string | number>
export type TaggedFunctionStrings = Readonly<string[]> | TemplateStringsArray
export type TagFunction = (strings: TemplateStringsArray, ...values: InlineBlocks) => any
export type Theme = Record<any, any>

/**
 * INTERFACES
 */
export interface BaseProps {
  children?: ComponentChildren
}
export interface GenericComponentProps {
  children: ComponentChildren
}
export interface ParsedCSSResult {
  keyValue: Array<string>
  mediaQueries: Array<string>
  psuedoClasses: Array<string>
}
export interface StyledProps {
  style: Styles
  children: ComponentChildren
}
