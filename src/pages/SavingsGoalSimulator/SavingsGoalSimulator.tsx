import { ReactElement, useEffect, useMemo, useState } from 'react';
import { Amount } from '../../components/Amount/Amount';
import { ReachDate } from '../../components/ReachDate/ReachDate';
import { MonthlyAmount } from '../../components/MonthlyAmount/MonthlyAmount';
import buyAHouseIcon from '../../assets/icons/buy-a-house.svg';
import * as SC from './SavingsGoalSimulator.style';
import { getNextOrPrevDate, monthDiff } from '../../utils';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Link, useParams } from 'react-router-dom';
import dashboardMap from '../../shared/maps/DashboardMap';

export function SavingsGoalSimulator(): ReactElement {
  const [date, setDate] = useState(getNextOrPrevDate(new Date(), false));
  const [monthCounter, setMonthCounter] = useState(1);
  const [amount, setAmount] = useState(0);
  const [routeSlug, setRouteSlug] = useState('');
  const { getKey, setKey } = useLocalStorage();
  const { slug } = useParams();

  useEffect(() => {
    setRouteSlug(slug as string);
    const data = getKey(routeSlug);
    if (data) {
      setAmount(data.amount);
      setDate(new Date(data.date));
      setMonthCounter(monthDiff(new Date(data.date), new Date()));
    }
  }, [routeSlug]);

  const onMonthChange = (isPreviousMonth: boolean) => {
    setDate(getNextOrPrevDate(date, isPreviousMonth));
    isPreviousMonth
      ? setMonthCounter(monthCounter - 1)
      : setMonthCounter(monthCounter + 1);
  };

  const onAmountChange = (amount: number) => {
    setAmount(amount);
  };

  const calcMonthlyAmount = useMemo(() => {
    const calc = amount / monthCounter;
    return calc;
  }, [amount, monthCounter]);

  return (
    <SC.Wrapper>
      <SC.Title>
        Let&apos;s plan your <strong>saving goal.</strong>
      </SC.Title>
      <SC.CardSimulator>
        <SC.CardTitleWrapper>
          {dashboardMap.find((map) => map.slug === routeSlug)?.icon}
          <span>
            <SC.CardTitle>
              {dashboardMap.find((map) => map.slug === routeSlug)?.title}
            </SC.CardTitle>
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
            monthlyAmount={calcMonthlyAmount}
            date={date}
            amount={amount}
          ></MonthlyAmount>
          <SC.FormButton
            to="/"
            disabled={amount === 0}
            onClick={() => {
              setKey(routeSlug, { amount: amount, date: date });
            }}
          >
            Confirm
          </SC.FormButton>
        </SC.Form>
      </SC.CardSimulator>
    </SC.Wrapper>
  );
}
