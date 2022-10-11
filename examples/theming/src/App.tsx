import React from 'react';
import logo from './logo.svg';
import './App.css';
import ThemedComponent from './ThemedComponent';
import { css, GlobalStyleSheet, ThemeProvider, ThemeCacheProvider } from '@caffedpkg/microstyled';

const theme = {
  backgroundColor: '#abb912',
  color: '#3d5849',
};

const GlobalStyles = (props: any) => {
  return <GlobalStyleSheet 
    stylesheet={css(props)`
      body .App-header {
        background-color: ${(props: any) => props.theme.backgroundColor} !important;
        color: ${(props: any) => props.theme.color} !important;
      }
    `}
  />
}
// @ts-ignore
const ThemeCache = ThemeCacheProvider(async () => document.body.querySelector('#theme-cache-container'));
const Theme = ThemeProvider(theme);

function App() {
  return (
    <ThemeCache>
      <Theme>
        <GlobalStyles />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ThemedComponent>
                Learn React
              </ThemedComponent>
            </a>
          </header>
        </div>
      </Theme>
    </ThemeCache>

  );
}

export default App;
