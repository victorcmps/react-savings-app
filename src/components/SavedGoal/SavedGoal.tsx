import { ReactElement } from 'react';
import { formatCurrency, formatMonth } from '../../utils';
import * as SC from './SavedGoal.style';

type GoalProps = {
  amount: number;
  date: Date;
};

export function SavedGoal(props: GoalProps): ReactElement {
  return (
    <SC.WrapperSavedGoal>
      <SC.SavedGoalItem>
        <SC.SavedGoalItemTitle>Goal amount</SC.SavedGoalItemTitle>
        <SC.SavedGoalItemAmount>
          ${formatCurrency(props.amount)}
        </SC.SavedGoalItemAmount>
      </SC.SavedGoalItem>
      <SC.SavedGoalItem>
        <SC.SavedGoalItemTitle>Reach goal by</SC.SavedGoalItemTitle>
        <SC.SavedGoalItemDate>
          {formatMonth(props.date, 'short')} {props.date.getFullYear()}
        </SC.SavedGoalItemDate>
      </SC.SavedGoalItem>
    </SC.WrapperSavedGoal>
  );
}
