import { DefaultTheme } from 'styled-components';
import * as Tokens from './shared/tokens';

const defaultTheme: DefaultTheme = {
  color: {
    ...Tokens.color,
  },
  font: { ...Tokens.fontFamily },
};

export default defaultTheme;
