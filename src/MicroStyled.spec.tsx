import React from 'react'
import { render, screen } from '@testing-library/react'
import { randomString } from './StringUtils'
import styled, { ThemeCacheProvider, ThemeProvider } from './MicroStyled'

const renderComponent = (Comp: React.FC, defaultProps = {}) => {
  return (props = {}) => {
    return render(<Comp {...defaultProps} {...props} />)
  }
}

describe('<MicroStyled />', () => {
  let Comp: React.FC
  let id: string
  beforeAll(() => {
    Comp = styled.div`
      color: red;
      &:hover {
        color: blue;
      }
      @media (min-width: 600px) {
        & {
          color: white;
        }
      }
      ${(props: any) => {
        id = props.config.className
      }}
    `
  })

  it('should render', async () => {
    const text = randomString()
    renderComponent(Comp)({ children: text })
    expect(screen.queryByText(text)).not.toBeNull()
  })

  it('should create a stylesheet in the head', async () => {
    const text = randomString()
    const compClassName = `micro-styled-${id}`
    renderComponent(Comp)({ children: text })
    const el = document.getElementById(compClassName)
    expect(el).not.toBeNull()
  })

  it('should create the correct stylesheet', async () => {
    const compClassName = `micro-styled-${id}`
    const styleSheet = `.${id} { color: red; }\n.${id}:hover { color: blue; }\n@media (min-width: 600px) { .${id} { color: white; } }\n`
    renderComponent(Comp)()
    const el = document.getElementById(compClassName)
    expect(el.innerHTML).toBe(styleSheet)
  })

  it('should render the correct HTMLElement', async () => {
    const text = randomString()
    renderComponent(Comp)({ children: text })
    const el = screen.queryByText(text)
    expect(el.localName).toBe('div')
  })
})

describe('<ThemeProvider />', () => {
  const theme = { test: { color: 'grey' } }
  let themedCompClass: string
  const ThemedComp = styled.div`
    color: ${(props: any) => {
      return `${props.theme.test.color};`
    }};
    ${(props: any) => {
      themedCompClass = props.config.className
    }}
  `
  const Theme = ThemeProvider(theme)
  const ThemeWithComponent = (props: any) => (
    <Theme>
      <ThemedComp {...props} />
    </Theme>
  )

  it('should render with a component child', async () => {
    const text = randomString()
    renderComponent(ThemeWithComponent)({ children: text })
    expect(screen.queryByText(text)).not.toBeNull()
  })

  it('should provide theme in component props', async () => {
    const text = randomString()
    const styleSheet = `.${themedCompClass} { color: grey; }\n`
    renderComponent(ThemeWithComponent)({ children: text })
    const el = document.getElementById('micro-styled-' + themedCompClass)
    expect(el.innerHTML).toBe(styleSheet)
  })
})

describe('<ThemeCacheProvider />', () => {
  let themedCacheCompClass: string
  const ThemeCacheComp = styled.div`
    color: blue;
    ${(props: any) => {
      themedCacheCompClass = props.config.className
    }}
  `
  const container = document.createElement('div')
  container.id = 'test-container'
  document.body.appendChild(container)
  const ThemeCache = ThemeCacheProvider(container)
  const ThemeCacheWithComponent = (props: any) => (
    <ThemeCache>
      <ThemeCacheComp {...props} />
    </ThemeCache>
  )

  it('should render with a component child', async () => {
    const text = randomString()
    renderComponent(ThemeCacheComp)({ children: text })
    render(<ThemeCacheWithComponent />)
    expect(screen.queryByText(text)).not.toBeNull()
  })

  it('should render theme stylesheet in container', async () => {
    renderComponent(ThemeCacheWithComponent)({})
    const el = document.getElementById('micro-styled-' + themedCacheCompClass)
    expect(el).not.toBe(null)
  })
})
