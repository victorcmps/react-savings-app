import userEvent from '@testing-library/user-event';
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';
import { MonthlyAmount } from './MonthlyAmount';
import { render, screen } from '@testing-library/react';
import { formatCurrency, formatMonth, getNextOrPrevDate } from '../../utils';

type MonthlyAmountProps = {
  date: Date;
  amount: number;
  monthCounter: number;
  monthlyAmount: number;
};

function Component(props: MonthlyAmountProps) {
  return (
    <ThemeProvider theme={theme}>
      <MonthlyAmount
        date={props.date}
        amount={props.amount}
        monthCounter={props.monthCounter}
        monthlyAmount={props.monthlyAmount}
      ></MonthlyAmount>
    </ThemeProvider>
  );
}

describe('MonthlyAmount', () => {
  it('should render component and props correctly', async () => {
    // Mocked props
    const date = getNextOrPrevDate(new Date('01-01-2023'), false);
    const amount = 25000;
    const monthCounter = 2;
    const monthlyAmount = amount / monthCounter;

    render(
      <ThemeProvider theme={theme}>
        <Component
          date={date}
          amount={amount}
          monthCounter={monthCounter}
          monthlyAmount={monthlyAmount}
        />
      </ThemeProvider>
    );

    const findMonthlyAmount = await screen.findByTestId('monthly-amount');
    const findDetails = await screen.findByText(
      `${monthCounter} monthly deposits`
    );

    expect(findMonthlyAmount).toHaveTextContent(
      `$${formatCurrency(monthlyAmount)}`
    );
    expect(findDetails.parentElement).toHaveTextContent(
      `You're planning ${monthCounter} monthly deposits to reach your $${formatCurrency(
        amount
      )} goal by ${formatMonth(date)} ${date.getFullYear()}`
    );
  });
});
