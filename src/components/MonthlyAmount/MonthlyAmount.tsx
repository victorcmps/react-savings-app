import { ReactElement } from 'react';
import { formatCurrency, formatMonth } from '../../utils';
import * as SC from './MonthlyAmount.style';

type MonthlyAmountProps = {
  date: Date;
  amount: number;
  monthCounter: number;
  monthlyAmount: number;
};

export function MonthlyAmount(props: MonthlyAmountProps): ReactElement {
  return (
    <SC.StyledMonthlyAmount>
      <SC.AmountInfo>
        <SC.Title>Monthly amount</SC.Title>
        <SC.Amount data-testid="monthly-amount">${formatCurrency(props.monthlyAmount)}</SC.Amount>
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
