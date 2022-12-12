import { FormEvent, ReactElement } from 'react';
import dollarIcon from '../../assets/icons/dollar-sign.svg';
import { formatCurrency, formatOnlyNumbers } from '../../utils';
import * as SC from './Amount.style';

type AmountProps = {
  amount: number;
  onAmountChange: (amount: number) => void;
};

export function Amount(props: AmountProps): ReactElement {
  const handleOnInput = (event: FormEvent<HTMLInputElement>): void => {
    const valueFormatted = formatOnlyNumbers(
      (event.target as HTMLInputElement).value
    );
    props.onAmountChange(Number(valueFormatted));
  };

  return (
    <SC.AmountWrapper>
      <SC.Label htmlFor="amount">Total amount</SC.Label>
      <SC.InputWrapper>
        <SC.Icon aria-hidden src={dollarIcon} />
        <SC.Input
          onChange={(event) => {
            handleOnInput(event);
          }}
          id="amount"
          name="savingsGoal"
          value={formatCurrency(props.amount)}
        />
      </SC.InputWrapper>
    </SC.AmountWrapper>
  );
}
