import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${(props) => props.theme.font.workSans};
    background-color: ${(props) => props.theme.color.blueGray10};
  }

  a {
    text-decoration: none;
  }
`;
