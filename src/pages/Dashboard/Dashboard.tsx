import { ReactElement, useState } from 'react';
import * as SC from './Dashboard.style';
import { SavedGoal } from '../../components/SavedGoal/SavedGoal';
import { Link } from 'react-router-dom';
import dashboardMap from '../../shared/maps/DashboardMap';
import { useLocalStorage } from '../../hooks/useLocalStorage';

type SavedGoals = {
  [key: string]: {
    amount: number;
    date: number;
  };
};

export function Dashboard(): ReactElement {
  const { getAll } = useLocalStorage();
  const [savedGoals] = useState<SavedGoals>(getAll());

  return (
    <SC.Wrapper>
      <SC.Title>Here are your savings goals!</SC.Title>
      <SC.WrapperCard>
        {dashboardMap.map((item) => {
          return (
            <SC.CardDashboard key={item.slug}>
              <SC.CardHeader>
                {item.icon}
                <SC.CardHeaderTitle>{item.title}</SC.CardHeaderTitle>
              </SC.CardHeader>
              {savedGoals && savedGoals[item.slug] ? (
                <>
                  <SavedGoal
                    amount={savedGoals[item.slug].amount}
                    date={new Date(savedGoals[item.slug].date)}
                  ></SavedGoal>
                  <SC.CardButton to={`/${item.slug}`} variant="secondary">
                    Edit goal
                  </SC.CardButton>
                </>
              ) : (
                <SC.CardButton to={`/${item.slug}`}>Setup goal</SC.CardButton>
              )}
            </SC.CardDashboard>
          );
        })}
      </SC.WrapperCard>
    </SC.Wrapper>
  );
}
