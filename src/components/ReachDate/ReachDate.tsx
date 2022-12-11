import { ReactElement } from 'react';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';
import { formatMonth, getNextOrPrevDate } from '../../utils';
import * as SC from './ReachDate.style';

type ReachDateProps = {
  value: Date;
  onMonthChange: (
    isPreviousMonth: boolean,
    event:
      | React.MouseEvent<HTMLSpanElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>
  ) => void;
};

export function ReachDate(props: ReachDateProps): ReactElement {
  const isPreviousDisabled =
    props.value.toString() === getNextOrPrevDate(new Date(), false).toString();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case 'ArrowLeft':
        if (isPreviousDisabled) break;
        props.onMonthChange(true, event);
        break;
      case 'ArrowRight':
        props.onMonthChange(false, event);
        break;
    }
  };

  return (
    <SC.StyledReachDate onKeyDown={(event) => handleKeyPress(event)}>
      <SC.Label>Reach goal by</SC.Label>
      <SC.Wrapper tabIndex={0}>
        <SC.Button
          onClick={(event) =>
            !isPreviousDisabled && props.onMonthChange(true, event)
          }
          data-disabled={isPreviousDisabled}
        >
          <SC.ButtonIcon
            width={24}
            height={24}
            aria-hidden
            src={chevronLeft}
            alt=""
          />
        </SC.Button>
        <SC.DateWrapper>
          <SC.Month>{formatMonth(props.value)}</SC.Month>
          <SC.Year>{props.value.getFullYear()}</SC.Year>
          <input
            type="hidden"
            id="datepicker"
            name="savingGoal"
            value={props.value.toString()}
          />
        </SC.DateWrapper>
        <SC.Button
          onClick={(event) => {
            props.onMonthChange(false, event);
          }}
        >
          <SC.ButtonIcon
            width={24}
            height={24}
            aria-hidden
            src={chevronRight}
            alt=""
          />
        </SC.Button>
      </SC.Wrapper>
    </SC.StyledReachDate>
  );
}
