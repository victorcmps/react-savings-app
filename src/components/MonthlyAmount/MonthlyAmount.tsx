import { ReactElement } from 'react';
import { formatMonth } from '../../utils/dates';
import {
  AmountInfo,
  StyledMonthlyAmount,
  Title,
  Amount,
  AmountDetail,
  AmountDetailText,
} from './MonthlyAmount.style';

type MonthlyAmountProps = {
  date: Date;
  amount?: number;
  monthCounter: number;
};

export function MonthlyAmount(props: MonthlyAmountProps): ReactElement {
  return (
    <StyledMonthlyAmount>
      <AmountInfo>
        <Title>Monthly amount</Title>
        <Amount>$520.83</Amount>
      </AmountInfo>
      <AmountDetail>
        <AmountDetailText>
          You&apos;re planning{' '}
          <strong>{props.monthCounter} monthly deposits</strong> to reach your{' '}
          <strong>$25,000 goal</strong> by{' '}
          <strong>
            {formatMonth(props.date)} {props.date.getFullYear()}
          </strong>
          .
        </AmountDetailText>
      </AmountDetail>
    </StyledMonthlyAmount>
  );
}
