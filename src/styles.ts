import { createGlobalStyle } from 'styled-components';
import { color, fontFamily } from './shared/styles/tokens';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${fontFamily.workSans}, sans-serif;
    background-color: ${color.blueGray10};
  }
`;
