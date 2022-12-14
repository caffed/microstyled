[@caffedpkg/microstyled](README.md) / Exports

# @caffedpkg/microstyled

## Table of contents

### Interfaces

- [GlobalStyleSheetProps](interfaces/GlobalStyleSheetProps.md)
- [ParsedCSSResult](interfaces/ParsedCSSResult.md)
- [StyledProps](interfaces/StyledProps.md)
- [ThemeCacheProviderProps](interfaces/ThemeCacheProviderProps.md)
- [ThemeProviderProps](interfaces/ThemeProviderProps.md)

### Type Aliases

- [CSSValue](modules.md#cssvalue)
- [CacheContainer](modules.md#cachecontainer)
- [ContainerElement](modules.md#containerelement)
- [InlineBlocks](modules.md#inlineblocks)
- [InlineStyleFunction](modules.md#inlinestylefunction)
- [Styles](modules.md#styles)
- [TagFunction](modules.md#tagfunction)
- [TaggedFunctionStrings](modules.md#taggedfunctionstrings)
- [Theme](modules.md#theme)

### Variables

- [default](modules.md#default)
- [mediaQueryRegex](modules.md#mediaqueryregex)
- [psuedoClassRegex](modules.md#psuedoclassregex)

### Functions

- [GlobalStyleSheet](modules.md#globalstylesheet)
- [ThemeCacheProvider](modules.md#themecacheprovider)
- [ThemeProvider](modules.md#themeprovider)
- [createCSSObject](modules.md#createcssobject)
- [createCSSString](modules.md#createcssstring)
- [createStyleElement](modules.md#createstyleelement)
- [css](modules.md#css)
- [interpolate](modules.md#interpolate)
- [randomString](modules.md#randomstring)
- [removeWhitespace](modules.md#removewhitespace)

## Type Aliases

### CSSValue

Ƭ **CSSValue**: `Record`<keyof [`Styles`](modules.md#styles), `string` \| `number`\>

#### Defined in

[src/types.ts:8](https://github.com/caffed/microstyled/blob/bba0823/src/types.ts#L8)

___

### CacheContainer

Ƭ **CacheContainer**: () => `Promise`<[`ContainerElement`](modules.md#containerelement)\> \| [`ContainerElement`](modules.md#containerelement)

#### Defined in

[src/types.ts:7](https://github.com/caffed/microstyled/blob/bba0823/src/types.ts#L7)

___

### ContainerElement

Ƭ **ContainerElement**: `HTMLElement` \| `HTMLHeadElement`

TYPES

#### Defined in

[src/types.ts:6](https://github.com/caffed/microstyled/blob/bba0823/src/types.ts#L6)

___

### InlineBlocks

Ƭ **InlineBlocks**: (`string` \| (`props`: `any`) => `any`)[]

#### Defined in

[src/types.ts:9](https://github.com/caffed/microstyled/blob/bba0823/src/types.ts#L9)

___

### InlineStyleFunction

Ƭ **InlineStyleFunction**: <T\>(`props`: `T`) => `string` \| `void`

#### Type declaration

▸ <`T`\>(`props`): `string` \| `void`

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `T` |

##### Returns

`string` \| `void`

#### Defined in

[src/types.ts:10](https://github.com/caffed/microstyled/blob/bba0823/src/types.ts#L10)

___

### Styles

Ƭ **Styles**: `Record`<keyof `CSSProperties`, `string` \| `number`\>

#### Defined in

[src/types.ts:11](https://github.com/caffed/microstyled/blob/bba0823/src/types.ts#L11)

___

### TagFunction

Ƭ **TagFunction**: (`strings`: `TemplateStringsArray`, ...`values`: [`InlineBlocks`](modules.md#inlineblocks)) => `any`

#### Type declaration

▸ (`strings`, ...`values`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | `TemplateStringsArray` |
| `...values` | [`InlineBlocks`](modules.md#inlineblocks) |

##### Returns

`any`

#### Defined in

[src/types.ts:13](https://github.com/caffed/microstyled/blob/bba0823/src/types.ts#L13)

___

### TaggedFunctionStrings

Ƭ **TaggedFunctionStrings**: `Readonly`<`string`[]\> \| `TemplateStringsArray`

#### Defined in

[src/types.ts:12](https://github.com/caffed/microstyled/blob/bba0823/src/types.ts#L12)

___

### Theme

Ƭ **Theme**: `Record`<`any`, `any`\>

#### Defined in

[src/types.ts:14](https://github.com/caffed/microstyled/blob/bba0823/src/types.ts#L14)

## Variables

### default

• **default**: `Object`

Block renderable HTMLElements  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/

#### Type declaration

| Name | Type |
| :------ | :------ |
| `a` | [`TagFunction`](modules.md#tagfunction) |
| `address` | [`TagFunction`](modules.md#tagfunction) |
| `area` | [`TagFunction`](modules.md#tagfunction) |
| `article` | [`TagFunction`](modules.md#tagfunction) |
| `aside` | [`TagFunction`](modules.md#tagfunction) |
| `audio` | [`TagFunction`](modules.md#tagfunction) |
| `b` | [`TagFunction`](modules.md#tagfunction) |
| `base` | [`TagFunction`](modules.md#tagfunction) |
| `bdi` | [`TagFunction`](modules.md#tagfunction) |
| `bdo` | [`TagFunction`](modules.md#tagfunction) |
| `blockquote` | [`TagFunction`](modules.md#tagfunction) |
| `br` | [`TagFunction`](modules.md#tagfunction) |
| `button` | [`TagFunction`](modules.md#tagfunction) |
| `canvas` | [`TagFunction`](modules.md#tagfunction) |
| `cite` | [`TagFunction`](modules.md#tagfunction) |
| `code` | [`TagFunction`](modules.md#tagfunction) |
| `col` | [`TagFunction`](modules.md#tagfunction) |
| `colgroup` | [`TagFunction`](modules.md#tagfunction) |
| `data` | [`TagFunction`](modules.md#tagfunction) |
| `datalist` | [`TagFunction`](modules.md#tagfunction) |
| `dd` | [`TagFunction`](modules.md#tagfunction) |
| `del` | [`TagFunction`](modules.md#tagfunction) |
| `details` | [`TagFunction`](modules.md#tagfunction) |
| `dfn` | [`TagFunction`](modules.md#tagfunction) |
| `dialog` | [`TagFunction`](modules.md#tagfunction) |
| `div` | [`TagFunction`](modules.md#tagfunction) |
| `dl` | [`TagFunction`](modules.md#tagfunction) |
| `dt` | [`TagFunction`](modules.md#tagfunction) |
| `em` | [`TagFunction`](modules.md#tagfunction) |
| `embed` | [`TagFunction`](modules.md#tagfunction) |
| `fieldset` | [`TagFunction`](modules.md#tagfunction) |
| `figcaption` | [`TagFunction`](modules.md#tagfunction) |
| `figure` | [`TagFunction`](modules.md#tagfunction) |
| `footer` | [`TagFunction`](modules.md#tagfunction) |
| `form` | [`TagFunction`](modules.md#tagfunction) |
| `h1` | [`TagFunction`](modules.md#tagfunction) |
| `h2` | [`TagFunction`](modules.md#tagfunction) |
| `h3` | [`TagFunction`](modules.md#tagfunction) |
| `h4` | [`TagFunction`](modules.md#tagfunction) |
| `h5` | [`TagFunction`](modules.md#tagfunction) |
| `h6` | [`TagFunction`](modules.md#tagfunction) |
| `header` | [`TagFunction`](modules.md#tagfunction) |
| `hgroup` | [`TagFunction`](modules.md#tagfunction) |
| `hr` | [`TagFunction`](modules.md#tagfunction) |
| `i` | [`TagFunction`](modules.md#tagfunction) |
| `iframe` | [`TagFunction`](modules.md#tagfunction) |
| `img` | [`TagFunction`](modules.md#tagfunction) |
| `input` | [`TagFunction`](modules.md#tagfunction) |
| `ins` | [`TagFunction`](modules.md#tagfunction) |
| `kbd` | [`TagFunction`](modules.md#tagfunction) |
| `keygen` | [`TagFunction`](modules.md#tagfunction) |
| `label` | [`TagFunction`](modules.md#tagfunction) |
| `legend` | [`TagFunction`](modules.md#tagfunction) |
| `li` | [`TagFunction`](modules.md#tagfunction) |
| `link` | [`TagFunction`](modules.md#tagfunction) |
| `main` | [`TagFunction`](modules.md#tagfunction) |
| `map` | [`TagFunction`](modules.md#tagfunction) |
| `mark` | [`TagFunction`](modules.md#tagfunction) |
| `menu` | [`TagFunction`](modules.md#tagfunction) |
| `menuitem` | [`TagFunction`](modules.md#tagfunction) |
| `meter` | [`TagFunction`](modules.md#tagfunction) |
| `nav` | [`TagFunction`](modules.md#tagfunction) |
| `nobr` | [`TagFunction`](modules.md#tagfunction) |
| `noframes` | [`TagFunction`](modules.md#tagfunction) |
| `noscript` | [`TagFunction`](modules.md#tagfunction) |
| `object` | [`TagFunction`](modules.md#tagfunction) |
| `ol` | [`TagFunction`](modules.md#tagfunction) |
| `optgroup` | [`TagFunction`](modules.md#tagfunction) |
| `option` | [`TagFunction`](modules.md#tagfunction) |
| `output` | [`TagFunction`](modules.md#tagfunction) |
| `p` | [`TagFunction`](modules.md#tagfunction) |
| `picture` | [`TagFunction`](modules.md#tagfunction) |
| `plaintext` | [`TagFunction`](modules.md#tagfunction) |
| `pre` | [`TagFunction`](modules.md#tagfunction) |
| `progress` | [`TagFunction`](modules.md#tagfunction) |
| `q` | [`TagFunction`](modules.md#tagfunction) |
| `rp` | [`TagFunction`](modules.md#tagfunction) |
| `rt` | [`TagFunction`](modules.md#tagfunction) |
| `rtc` | [`TagFunction`](modules.md#tagfunction) |
| `ruby` | [`TagFunction`](modules.md#tagfunction) |
| `s` | [`TagFunction`](modules.md#tagfunction) |
| `samp` | [`TagFunction`](modules.md#tagfunction) |
| `section` | [`TagFunction`](modules.md#tagfunction) |
| `select` | [`TagFunction`](modules.md#tagfunction) |
| `shadow` | [`TagFunction`](modules.md#tagfunction) |
| `small` | [`TagFunction`](modules.md#tagfunction) |
| `span` | [`TagFunction`](modules.md#tagfunction) |
| `strong` | [`TagFunction`](modules.md#tagfunction) |
| `sub` | [`TagFunction`](modules.md#tagfunction) |
| `summary` | [`TagFunction`](modules.md#tagfunction) |
| `sup` | [`TagFunction`](modules.md#tagfunction) |
| `table` | [`TagFunction`](modules.md#tagfunction) |
| `tbody` | [`TagFunction`](modules.md#tagfunction) |
| `td` | [`TagFunction`](modules.md#tagfunction) |
| `textarea` | [`TagFunction`](modules.md#tagfunction) |
| `tfoot` | [`TagFunction`](modules.md#tagfunction) |
| `th` | [`TagFunction`](modules.md#tagfunction) |
| `thead` | [`TagFunction`](modules.md#tagfunction) |
| `time` | [`TagFunction`](modules.md#tagfunction) |
| `tr` | [`TagFunction`](modules.md#tagfunction) |
| `track` | [`TagFunction`](modules.md#tagfunction) |
| `tt` | [`TagFunction`](modules.md#tagfunction) |
| `u` | [`TagFunction`](modules.md#tagfunction) |
| `ul` | [`TagFunction`](modules.md#tagfunction) |
| `varEl` | [`TagFunction`](modules.md#tagfunction) |
| `video` | [`TagFunction`](modules.md#tagfunction) |
| `wbr` | [`TagFunction`](modules.md#tagfunction) |

#### Defined in

[src/MicroStyled.tsx:216](https://github.com/caffed/microstyled/blob/bba0823/src/MicroStyled.tsx#L216)

___

### mediaQueryRegex

• `Const` **mediaQueryRegex**: `RegExp`

mediaQueryRegex - matches `@ { ... }`

#### Defined in

[src/StringUtils.ts:24](https://github.com/caffed/microstyled/blob/bba0823/src/StringUtils.ts#L24)

___

### psuedoClassRegex

• `Const` **psuedoClassRegex**: `RegExp`

psuedoClassRegex - matches `& { ... }`

#### Defined in

[src/StringUtils.ts:29](https://github.com/caffed/microstyled/blob/bba0823/src/StringUtils.ts#L29)

## Functions

### GlobalStyleSheet

▸ **GlobalStyleSheet**(`props`): `Element`

GlobalStyleSheet singleton

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`GlobalStyleSheetProps`](interfaces/GlobalStyleSheetProps.md) | styles: Template literal string |

#### Returns

`Element`

JSX.Element of <style/> for use in App layout

#### Defined in

[src/MicroStyled.tsx:137](https://github.com/caffed/microstyled/blob/bba0823/src/MicroStyled.tsx#L137)

___

### ThemeCacheProvider

▸ **ThemeCacheProvider**(`cacheContainer`): (`props`: { `children?`: `ReactNode`  }) => `Element`

ThemeCacheProvider: main entrypoint for context provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheContainer` | [`CacheContainer`](modules.md#cachecontainer) |

#### Returns

`fn`

ThemeCache Provider Component

▸ (`props`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children?` | `ReactNode` |

##### Returns

`Element`

#### Defined in

[src/MicroStyled.tsx:42](https://github.com/caffed/microstyled/blob/bba0823/src/MicroStyled.tsx#L42)

___

### ThemeProvider

▸ **ThemeProvider**(`theme`): (`props`: { `children?`: `ReactNode`  }) => `Element`

ThemeProvider: main entrypoint for context provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`Theme`](modules.md#theme) |

#### Returns

`fn`

Theme Provider Component

▸ (`props`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children?` | `ReactNode` |

##### Returns

`Element`

#### Defined in

[src/MicroStyled.tsx:106](https://github.com/caffed/microstyled/blob/bba0823/src/MicroStyled.tsx#L106)

___

### createCSSObject

▸ **createCSSObject**(`str`): [`ParsedCSSResult`](interfaces/ParsedCSSResult.md)

createCSSObject: Takes string from tagged function and creates object by type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | input string |

#### Returns

[`ParsedCSSResult`](interfaces/ParsedCSSResult.md)

ParsedCSSResult Record

#### Defined in

[src/StringUtils.ts:94](https://github.com/caffed/microstyled/blob/bba0823/src/StringUtils.ts#L94)

___

### createCSSString

▸ **createCSSString**(`obj`, `className`): `string`

Naive CSS string concatenator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`ParsedCSSResult`](interfaces/ParsedCSSResult.md) | ParsedCSSResult Object from createCSSObject |
| `className` | `string` | string |

#### Returns

`string`

string

#### Defined in

[src/StringUtils.ts:118](https://github.com/caffed/microstyled/blob/bba0823/src/StringUtils.ts#L118)

___

### createStyleElement

▸ **createStyleElement**(`id`, `styles`): `HTMLStyleElement`

HTMLStyleElement constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | string for style element |
| `styles` | `string` | rendered stylesheet for component |

#### Returns

`HTMLStyleElement`

HTMLStyleElement

#### Defined in

[src/StringUtils.ts:137](https://github.com/caffed/microstyled/blob/bba0823/src/StringUtils.ts#L137)

___

### css

▸ **css**(`props?`): [`TagFunction`](modules.md#tagfunction)

css styles helper function
CSS rule validation is up to implementor
Usage:
  const styles = css(props)`
     body {
      color: ${props.theme.bodycolor};
     }
  `;

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `Record`<`any`, `any`\> | optional props to pass for inline functions |

#### Returns

[`TagFunction`](modules.md#tagfunction)

TagFunction that return the theme object parsed CSS stylesheet

#### Defined in

[src/MicroStyled.tsx:124](https://github.com/caffed/microstyled/blob/bba0823/src/MicroStyled.tsx#L124)

___

### interpolate

▸ **interpolate**(`strings`, `values`, `props?`): `string`

interpolate: Tagged string function parser

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strings` | [`TaggedFunctionStrings`](modules.md#taggedfunctionstrings) | Tagged Function Strings |
| `values` | [`InlineBlocks`](modules.md#inlineblocks) | Tagged Function Values |
| `props` | `Record`<`any`, `any`\> | Component props |

#### Returns

`string`

CSS stylesheet string

#### Defined in

[src/StringUtils.ts:38](https://github.com/caffed/microstyled/blob/bba0823/src/StringUtils.ts#L38)

___

### randomString

▸ **randomString**(`length?`, `prefix?`, `stripNumeric?`): `string`

Random String generator

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `length` | `number` | `20` | Number: length of the final string |
| `prefix` | `string` | `''` | String prefix |
| `stripNumeric` | `boolean` | `true` | boolean to remove numbers |

#### Returns

`string`

string

#### Defined in

[src/StringUtils.ts:10](https://github.com/caffed/microstyled/blob/bba0823/src/StringUtils.ts#L10)

___

### removeWhitespace

▸ **removeWhitespace**(`str`): `string`

Normalizes whitespsace in a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string |

#### Returns

`string`

string

#### Defined in

[src/StringUtils.ts:60](https://github.com/caffed/microstyled/blob/bba0823/src/StringUtils.ts#L60)
