import { Amount } from './Amount';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';
import { formatCurrency } from '../../utils';

type ComponentProps = {
  amount: number;
  onAmountChange: (amount: number) => void;
};

const onAmountChange = jest.fn();

function Component(props: ComponentProps) {
  return (
    <ThemeProvider theme={theme}>
      <Amount amount={props.amount} onAmountChange={props.onAmountChange} />
    </ThemeProvider>
  );
}

describe('Amount', () => {
  describe('Basic tests', () => {
    it('should render input with value formatted', async () => {
      const amount = 25000;
      render(<Component amount={amount} onAmountChange={onAmountChange} />);
      const input = await screen.findByLabelText('Total amount');
      expect(input).toHaveValue(formatCurrency(amount));
    });
  });

  describe('onInput event tests', () => {
    it('should fire onAmountChange passing the new value when user types', async () => {
      const amount = 25000;
      const numberToInsert = 5;
      render(<Component amount={amount} onAmountChange={onAmountChange} />);
      const input = await screen.findByLabelText('Total amount');
      input.focus();
      await userEvent.keyboard(`{Home}${numberToInsert}`);

      expect(onAmountChange.mock.calls[0][0].toString()).toBe(
        `${numberToInsert}${amount}`
      );
    });
  });
});
