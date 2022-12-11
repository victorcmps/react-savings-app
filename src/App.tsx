import { ThemeProvider } from 'styled-components';
import { Menu } from './components/Menu/Menu';
import { SavingsGoalSimulator } from './pages/SavingsGoalSimulator';
import { GlobalStyle } from './styles';
import theme from './theme';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Menu />
      <SavingsGoalSimulator />
    </ThemeProvider>
  );
}
