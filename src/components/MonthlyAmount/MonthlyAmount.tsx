import { ReactElement } from 'react';
import {
  AmountInfo,
  StyledMonthlyAmount,
  Title,
  Amount,
  AmountDetail,
  AmountDetailText,
} from './MonthlyAmount.style';

export function MonthlyAmount(): ReactElement {
  return (
    <StyledMonthlyAmount>
      <AmountInfo>
        <Title>Monthly amount</Title>
        <Amount>$520.83</Amount>
      </AmountInfo>
      <AmountDetail>
        <AmountDetailText>
          You’re planning <strong>48 monthly deposits</strong> to reach your{' '}
          <strong>$25,000 goal</strong> by <strong>October 2020</strong>.
        </AmountDetailText>
      </AmountDetail>
    </StyledMonthlyAmount>
  );
}
