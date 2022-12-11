import { DefaultTheme } from 'styled-components';
import { color, fontFamily, spacing } from './shared/tokens';

const defaultTheme: DefaultTheme = {
  color: {
    ...color,
  },
  font: { ...fontFamily },
  spacing: {
    ...spacing,
  },
};

export default defaultTheme;
