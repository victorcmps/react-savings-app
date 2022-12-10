import { ReactElement } from 'react';
import { Amount } from '../components/Amount/Amount';
import buyAHouseIcon from '../assets/icons/buy-a-house.svg';
import { ReachDate } from '../components/ReachDate/ReachDate';
import { MonthlyAmount } from '../components/MonthlyAmount/MonthlyAmount';
import * as Styles from './SavingsGoalSimulator.styles';

export function SavingsGoalSimulator(): ReactElement {
  return (
    <Styles.Wrapper>
      <Styles.Title>
        Let&apos;s plan your <strong>saving goal.</strong>
      </Styles.Title>
      <Styles.CardSimulator>
        <Styles.CardTitleWrapper>
          <img width={64} height={64} src={buyAHouseIcon} alt="Buy a house" />
          <span>
            <Styles.CardTitle>Buy a house</Styles.CardTitle>
            <Styles.CardSubtitle>Saving goal</Styles.CardSubtitle>
          </span>
        </Styles.CardTitleWrapper>
        <Styles.Form name="savingsGoal">
          <Styles.InputWrapper>
            <Amount />
            <ReachDate />
          </Styles.InputWrapper>
          <MonthlyAmount></MonthlyAmount>
          <Styles.FormButton>Confirm</Styles.FormButton>
        </Styles.Form>
      </Styles.CardSimulator>
    </Styles.Wrapper>
  );
}
