import { Amount } from './Amount';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';
import { formatCurrency } from '../../utils';

type componentProps = {
  amount: number;
  onAmountChange: (amount: number) => void;
};

let onAmountChange = jest.fn();

function Component(props: componentProps) {
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
    it('should fire onAmountChange method when user types', async () => {
      let amount = 25000;
      render(<Component amount={amount} onAmountChange={onAmountChange} />);
      const input = await screen.findByLabelText('Total amount');
      input.focus();
      await userEvent.keyboard('Some text');
      expect(onAmountChange).toHaveBeenCalled();
    });
  });
});
