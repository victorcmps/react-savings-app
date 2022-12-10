import { ReactElement, useState } from 'react';
import { Amount } from '../components/Amount/Amount';
import buyAHouseIcon from '../assets/icons/buy-a-house.svg';
import { ReachDate } from '../components/ReachDate/ReachDate';
import { MonthlyAmount } from '../components/MonthlyAmount/MonthlyAmount';
import * as Styles from './SavingsGoalSimulator.styles';
import { getNextOrPrevDate } from '../utils/dates';

export function SavingsGoalSimulator(): ReactElement {
  const [date, setDate] = useState(getNextOrPrevDate(new Date(), false));
  const [monthCounter, setMonthCounter] = useState(1);

  const handleMonthChange = (isPreviousMonth: boolean) => {
    setDate(getNextOrPrevDate(date, isPreviousMonth));
    isPreviousMonth
      ? setMonthCounter(monthCounter - 1)
      : setMonthCounter(monthCounter + 1);
  };

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
            <ReachDate value={date} handleMonthChange={handleMonthChange} />
          </Styles.InputWrapper>
          <MonthlyAmount
            monthCounter={monthCounter}
            date={date}
          ></MonthlyAmount>
          <Styles.FormButton>Confirm</Styles.FormButton>
        </Styles.Form>
      </Styles.CardSimulator>
    </Styles.Wrapper>
  );
}
