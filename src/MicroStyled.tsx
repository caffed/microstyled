import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

import {
  createCSSString,
  createCSSObject,
  createStyleElement,
  interpolate,
  randomString,
  removeWhitespace,
} from './StringUtils';

import type {
  CacheContainer,
  GlobalStyleSheetProps,
  InlineBlocks,
  StyledProps,
  TagFunction,
  TaggedFunctionStrings,
  Theme,
} from './types';

/**
 * Theme Cache Context
 * Context Provider for the containing HTMLElement root to render stylesheets into for components
 */
/**
 * ThemeCacheContext: the context for the container
 */
export const ThemeCacheContext = createContext(null);
/**
 * useThemeCacheContext: context convienence function
 * @returns ThemeCacheContext
 */
export const useThemeCacheContext = () => {
  return useContext(ThemeCacheContext) ?? { container: document.head };
};
/**
 * ThemeCacheProvider: main entrypoint for context provider
 * @param container either an HTMLElement or Promise returning one
 * @returns ThemeCache Provider Component
 */
export const ThemeCacheProvider = (cacheContainer: CacheContainer) => {
  return (props: React.PropsWithChildren) => {
    const [container, setContainer] = useState(document.head);

    useEffect(() => {
      const setNewContainer = async () => {
        const originalContainer = container;
        try {
          const newContainer =
            typeof cacheContainer === 'function' ? await cacheContainer() : cacheContainer;
          if (newContainer && originalContainer) {
            setContainer(newContainer);
            // move stylesheets to specified container
            // cannot use pattern matching in `:not()` in main selector
            Array.from(document.querySelectorAll('style[id^=micro-styled]'))
              .filter((el) => !el.id.includes('micro-styled-global'))
              .forEach((styleSheet: HTMLStyleElement) => {
                if (!newContainer.querySelector('#' + styleSheet.id)) {
                  newContainer.appendChild(styleSheet);
                }
              });
          }
        } catch (err) {
          console.warn(err);
        }
      };

      setNewContainer().catch(console.warn);

      return () => {
        Array.from(container.querySelectorAll('style[id^=micro-styled]')).forEach(
          (sheet: HTMLStyleElement) => sheet.remove(),
        );
      };
    }, [container]);

    return (
      <ThemeCacheContext.Provider value={{ container }}>
        {props.children}
      </ThemeCacheContext.Provider>
    );
  };
};

/**
 * Theme Context
 * Context Provider for the theme object used in styled components
 */
/**
 * ThemeContext: the context for the theme object
 */
export const ThemeContext = createContext(null);
/**
 * useThemeContext: context convienence function
 * @returns ThemeContext
 */
export const useThemeContext = () => {
  return useContext(ThemeContext) || {};
};
/**
 * ThemeProvider: main entrypoint for context provider
 * @param theme
 * @returns Theme Provider Component
 */
export const ThemeProvider = (theme: Theme) => {
  return (props: React.PropsWithChildren) => {
    return <ThemeContext.Provider value={{ theme }}>{props.children}</ThemeContext.Provider>;
  };
};

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
export const css = (props: Record<any, any> = {}): TagFunction => {
  return (strings: TemplateStringsArray, ...values: InlineBlocks): string => {
    const { theme } = useThemeContext();
    const themeProps = { ...props, theme };
    return interpolate(strings, values, themeProps);
  };
};

/**
 * GlobalStyleSheet singleton
 * @param props styles: Template literal string
 * @returns JSX.Element of <style/> for use in App layout
 */
export const GlobalStyleSheet = (props: GlobalStyleSheetProps) => {
  const id = randomString(10, 'micro-styled-global-');
  return (
    <style key={id} id={id}>
      {props.stylesheet}
    </style>
  );
};

/**
 * MicroStyled Component constructor function
 * @param Element tag name string for component
 * @param strings tag function strings
 * @param values tag function values
 * @param selfClosing Boolean for if component needs closing tag
 * @returns JSX.Element
 */
export const Component = (
  Element: any,
  strings: TaggedFunctionStrings,
  values: InlineBlocks = [],
  selfClosing = false,
) => {
  const className: string = randomString();
  const component: React.FC = (props: Partial<StyledProps>) => {
    // create replacable prefix instead of hard coded 'micro-styled'
    const styleElementId = `micro-styled-${className}`;
    const config = {
      className,
    };
    const { theme } = useThemeContext();
    const { container } = useThemeCacheContext();
    const cssRuleString = createCSSString(
      createCSSObject(
        removeWhitespace(
          interpolate(strings, values, theme ? { ...props, config, theme } : { ...props, config }),
        ),
      ),
      className,
    );
    const ref = useRef(null);
    useEffect(() => {
      if (ref.current) {
        ref.current.classList.add(className);
        if (!container.querySelector('#' + styleElementId)) {
          container.appendChild(createStyleElement(styleElementId, cssRuleString));
        }
      }
      return () => {
        ref.current?.classList.remove(className);
        container.querySelector(styleElementId)?.remove();
      };
    });
    return selfClosing ? (
      <Element key={className} {...props} ref={ref} />
    ) : (
      <Element key={className} {...props} ref={ref}>
        {props.children}
      </Element>
    );
  };
  return component;
};

/**
 * ComponentFactory: Entrypoint factory for taking tagged function
 * @param elementTag tag name string for component
 * @param selfClosing  Boolean for if component needs closing tag
 * @returns TagFunction constuctor for React Component
 */
export const ComponentFactory = (elementTag: string, selfClosing = false): TagFunction => {
  return (strings: TemplateStringsArray, ...values: InlineBlocks): React.FC => {
    return Component(elementTag, strings, values, selfClosing);
  };
};

/**
 * Block renderable HTMLElements  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/
 */
export default {
  a: ComponentFactory('a'),
  address: ComponentFactory('address'),
  area: ComponentFactory('area'),
  article: ComponentFactory('article'),
  aside: ComponentFactory('aside'),
  audio: ComponentFactory('audio'),
  b: ComponentFactory('b'),
  base: ComponentFactory('base'),
  bdi: ComponentFactory('bdi'),
  bdo: ComponentFactory('bdo'),
  blockquote: ComponentFactory('blockquote'),
  br: ComponentFactory('br', true),
  button: ComponentFactory('button'),
  canvas: ComponentFactory('canvas'),
  cite: ComponentFactory('cite'),
  code: ComponentFactory('code'),
  col: ComponentFactory('col'),
  colgroup: ComponentFactory('colgroup'),
  data: ComponentFactory('data'),
  datalist: ComponentFactory('datalist'),
  dd: ComponentFactory('dd'),
  del: ComponentFactory('del'),
  details: ComponentFactory('details'),
  dfn: ComponentFactory('dfn'),
  dialog: ComponentFactory('dialog'),
  div: ComponentFactory('div'),
  dl: ComponentFactory('dl'),
  dt: ComponentFactory('dt'),
  em: ComponentFactory('em'),
  embed: ComponentFactory('embed'),
  fieldset: ComponentFactory('fieldset'),
  figcaption: ComponentFactory('figcaption'),
  figure: ComponentFactory('figure'),
  footer: ComponentFactory('footer'),
  form: ComponentFactory('form'),
  h1: ComponentFactory('h1'),
  h2: ComponentFactory('h2'),
  h3: ComponentFactory('h3'),
  h4: ComponentFactory('h4'),
  h5: ComponentFactory('h5'),
  h6: ComponentFactory('h6'),
  header: ComponentFactory('header'),
  hgroup: ComponentFactory('hgroup'),
  hr: ComponentFactory('hr', true),
  i: ComponentFactory('i'),
  iframe: ComponentFactory('iframe'),
  img: ComponentFactory('img', true),
  input: ComponentFactory('input', true),
  ins: ComponentFactory('ins', true),
  kbd: ComponentFactory('kbd'),
  keygen: ComponentFactory('keygen'),
  label: ComponentFactory('label'),
  legend: ComponentFactory('legend'),
  li: ComponentFactory('li'),
  link: ComponentFactory('link'),
  main: ComponentFactory('main'),
  map: ComponentFactory('map'),
  mark: ComponentFactory('mark'),
  menu: ComponentFactory('menu'),
  menuitem: ComponentFactory('menuitem'),
  meter: ComponentFactory('meter'),
  nav: ComponentFactory('nav'),
  nobr: ComponentFactory('nobr'),
  noframes: ComponentFactory('noframes'),
  noscript: ComponentFactory('noscript'),
  object: ComponentFactory('object'),
  ol: ComponentFactory('ol'),
  optgroup: ComponentFactory('optgroup'),
  option: ComponentFactory('option'),
  output: ComponentFactory('output'),
  p: ComponentFactory('p'),
  picture: ComponentFactory('picture'),
  plaintext: ComponentFactory('plaintext'),
  pre: ComponentFactory('pre'),
  progress: ComponentFactory('progress'),
  q: ComponentFactory('q'),
  rp: ComponentFactory('rp'),
  rt: ComponentFactory('rt'),
  rtc: ComponentFactory('rtc'),
  ruby: ComponentFactory('ruby'),
  s: ComponentFactory('s'),
  samp: ComponentFactory('samp'),
  section: ComponentFactory('section'),
  select: ComponentFactory('select'),
  shadow: ComponentFactory('shadow'),
  small: ComponentFactory('small'),
  span: ComponentFactory('span'),
  strong: ComponentFactory('strong'),
  sub: ComponentFactory('sub'),
  summary: ComponentFactory('summary'),
  sup: ComponentFactory('sup'),
  table: ComponentFactory('table'),
  tbody: ComponentFactory('tbody'),
  td: ComponentFactory('td'),
  textarea: ComponentFactory('textarea'),
  tfoot: ComponentFactory('tfoot'),
  th: ComponentFactory('th'),
  thead: ComponentFactory('thead'),
  time: ComponentFactory('time'),
  tr: ComponentFactory('tr'),
  track: ComponentFactory('track'),
  tt: ComponentFactory('tt'),
  u: ComponentFactory('u'),
  ul: ComponentFactory('ul'),
  varEl: ComponentFactory('var'),
  video: ComponentFactory('video'),
  wbr: ComponentFactory('wbr'),
};
