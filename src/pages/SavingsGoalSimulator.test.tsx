import { SavingsGoalSimulator } from './SavingsGoalSimulator';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import userEvent from '@testing-library/user-event';
import { formatMonth } from '../utils';

describe('SavingsGoalSimulator', () => {
  let monthCounter = 1;
  let date: HTMLElement;
  let year: HTMLElement;
  let monthlyDetails: HTMLElement;

  const dateMock = (monthCounter: number) =>
    new Date(
      new Date().getFullYear(),
      new Date().getMonth() + monthCounter,
      new Date().getDate()
    );

  const getData = async () => {
    date = await screen.findByText(formatMonth(dateMock(monthCounter)));
    year = await screen.findByText(dateMock(monthCounter).getFullYear());
    monthlyDetails = await screen.findByText(
      `${monthCounter} monthly deposits`
    );
  };

  it('should advance when clicked in ReachDate', async () => {
    render(
      <ThemeProvider theme={theme}>
        <SavingsGoalSimulator />
      </ThemeProvider>
    );
    const buttonNext = await screen.findByTestId('button-next');
    await userEvent.click(buttonNext);
    monthCounter++;
    await getData();
    expect(date).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(monthlyDetails).toBeInTheDocument();
  });

  it('should go to previous month when clicked in ReachDate', async () => {
    render(
      <ThemeProvider theme={theme}>
        <SavingsGoalSimulator />
      </ThemeProvider>
    );
    const buttonPrev = await screen.findByTestId('button-prev');
    const buttonNext = await screen.findByTestId('button-next');

    await userEvent.click(buttonNext);
    await userEvent.click(buttonPrev);
    monthCounter--;

    await getData();
    expect(date).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(monthlyDetails).toBeInTheDocument();
  });

  it('should change input amount value', async () => {
    render(
      <ThemeProvider theme={theme}>
        <SavingsGoalSimulator />
      </ThemeProvider>
    );

    const input = await screen.findByLabelText('Total amount');

    await userEvent.click(input);
    input.focus();
    await userEvent.keyboard(`0`);

    const monthlyAmount = await screen.findByTestId('monthly-amount');

    expect(monthlyAmount.textContent).toBe('$250,000');
    expect((input as HTMLInputElement).value).toBe('250,000');
  });
});
