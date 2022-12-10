import React from 'react';
import { Menu } from './components/Menu/Menu';
import { SavingsGoalSimulator } from './pages/SavingsGoalSimulator';
import GlobalStyle from './styles';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <SavingsGoalSimulator />
    </>
  );
}
