import { createGlobalStyle } from 'styled-components';
import { ColorTokens } from './shared/styles/tokens/colors';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    background-color: ${ColorTokens.blueGray10};
  }
`;
