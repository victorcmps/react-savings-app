import { ReactElement } from 'react';
import { formatCurrency, formatMonth } from '../../utils';
import * as SC from './MonthlyAmount.style';

type MonthlyAmountProps = {
  date: Date;
  amount: number;
  monthCounter: number;
};

export function MonthlyAmount(props: MonthlyAmountProps): ReactElement {
  const calcMonthlyAmount = (amount: number, monthCounter: number) => {
    const calc = amount / monthCounter;
    return formatCurrency(calc);
  };

  return (
    <SC.StyledMonthlyAmount>
      <SC.AmountInfo>
        <SC.Title>Monthly amount</SC.Title>
        <SC.Amount>
          ${calcMonthlyAmount(props.amount, props.monthCounter)}
        </SC.Amount>
      </SC.AmountInfo>
      <SC.AmountDetail>
        <SC.AmountDetailText>
          You&apos;re planning{' '}
          <strong>{props.monthCounter} monthly deposits</strong> to reach your{' '}
          <strong>${formatCurrency(props.amount)} goal</strong> by{' '}
          <strong>
            {formatMonth(props.date)} {props.date.getFullYear()}
          </strong>
          .
        </SC.AmountDetailText>
      </SC.AmountDetail>
    </SC.StyledMonthlyAmount>
  );
}
