import { ThemeProvider } from 'styled-components';
import { Menu } from './components/Menu/Menu';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { SavingsGoalSimulator } from './pages/SavingsGoalSimulator/SavingsGoalSimulator';
import { GlobalStyle } from './styles';
import theme from './theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/:slug',
    element: <SavingsGoalSimulator />,
  },
]);

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Menu />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
