import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: ${theme.fonts.serif};
    color: ${theme.colors.dark};
    background-color: ${theme.colors.light};
    overflow-x: hidden;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .section-name {
    font-family: ${theme.fonts.sans};
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 18px;
  }
`;