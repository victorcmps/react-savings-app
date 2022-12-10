import { createGlobalStyle } from 'styled-components';
import { ColorTokens } from './styles/colors';

const globalStyle = createGlobalStyle`
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

export default globalStyle;
