[**@caffedpkg/microstyled**](../README.md)

***

[@caffedpkg/microstyled](../globals.md) / css

# Function: css()

> **css**(`props`): `TagFunction`

css styles helper function
CSS rule validation is up to implementor
Usage:
  const styles = css(props)`
     body {
      color: ${props.theme.bodycolor};
     }
  `;

## Parameters

### props

`Record`\<`any`, `any`\> = `{}`

optional props to pass for inline functions

## Returns

`TagFunction`

TagFunction that return the theme object parsed CSS stylesheet

## Defined in

[src/MicroStyled.tsx:151](https://github.com/caffed/microstyled/blob/0e0d0d91e7aa2e3a4202341d6352feeb008d9de4/src/MicroStyled.tsx#L151)
