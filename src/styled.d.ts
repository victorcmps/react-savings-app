import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      neutralWhite: string;
      brandColorPrimary: string;
      brandColorSecondary: string;
      blueGray900: string;
      blueGray600: string;
      blueGray400: string;
      blueGray300: string;
      blueGray100: string;
      blueGray50: string;
      blueGray10: string;
    };
    font: {
      workSans: string;
      rubik: string;
    };
  }
}
