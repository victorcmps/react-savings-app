import { ReactElement, useState } from 'react';
import { Amount } from '../components/Amount/Amount';
import buyAHouseIcon from '../assets/icons/buy-a-house.svg';
import { ReachDate } from '../components/ReachDate/ReachDate';
import { MonthlyAmount } from '../components/MonthlyAmount/MonthlyAmount';
import * as SC from './SavingsGoalSimulator.styles';
import { getNextOrPrevDate } from '../utils';

export function SavingsGoalSimulator(): ReactElement {
  const [date, setDate] = useState(getNextOrPrevDate(new Date(), false));
  const [monthCounter, setMonthCounter] = useState(1);
  const [amount, setAmount] = useState(25000);

  const onMonthChange = (isPreviousMonth: boolean) => {
    setDate(getNextOrPrevDate(date, isPreviousMonth));
    isPreviousMonth
      ? setMonthCounter(monthCounter - 1)
      : setMonthCounter(monthCounter + 1);
  };

  const onAmountChange = (amount: number) => {
    setAmount(amount);
  };

  return (
    <SC.Wrapper>
      <SC.Title>
        Let&apos;s plan your <strong>saving goal.</strong>
      </SC.Title>
      <SC.CardSimulator>
        <SC.CardTitleWrapper>
          <img width={64} height={64} src={buyAHouseIcon} alt="Buy a house" />
          <span>
            <SC.CardTitle>Buy a house</SC.CardTitle>
            <SC.CardSubtitle>Saving goal</SC.CardSubtitle>
          </span>
        </SC.CardTitleWrapper>
        <SC.Form name="savingsGoal">
          <SC.InputWrapper>
            <Amount amount={amount} onAmountChange={onAmountChange} />
            <ReachDate value={date} onMonthChange={onMonthChange} />
          </SC.InputWrapper>
          <MonthlyAmount
            monthCounter={monthCounter}
            date={date}
            amount={amount}
          ></MonthlyAmount>
          <SC.FormButton>Confirm</SC.FormButton>
        </SC.Form>
      </SC.CardSimulator>
    </SC.Wrapper>
  );
}
