import { ReactElement } from 'react';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';
import { formatMonth, getNextOrPrevDate } from '../../utils/dates';
import * as Styles from './ReachDate.style';

type ReachDateProps = {
  value: Date;
  handleMonthChange: (
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
        props.handleMonthChange(true, event);
        break;
      case 'ArrowRight':
        props.handleMonthChange(false, event);
        break;
    }
  };

  return (
    <Styles.StyledReachDate onKeyDown={(event) => handleKeyPress(event)}>
      <Styles.Label>Reach goal by</Styles.Label>
      <Styles.Wrapper tabIndex={0}>
        <Styles.Button
          onClick={(event) =>
            !isPreviousDisabled ? props.handleMonthChange(true, event) : ''
          }
          data-disabled={isPreviousDisabled}
        >
          <Styles.ButtonIcon
            width={24}
            height={24}
            aria-hidden
            src={chevronLeft}
            alt=""
          />
        </Styles.Button>
        <Styles.DateWrapper>
          <Styles.Month>{formatMonth(props.value)}</Styles.Month>
          <Styles.Year>{props.value.getFullYear()}</Styles.Year>
          <input
            type="hidden"
            id="datepicker"
            name="savingGoal"
            value={props.value.toString()}
          />
        </Styles.DateWrapper>
        <Styles.Button
          onClick={(event) => {
            props.handleMonthChange(false, event);
          }}
        >
          <Styles.ButtonIcon
            width={24}
            height={24}
            aria-hidden
            src={chevronRight}
            alt=""
          />
        </Styles.Button>
      </Styles.Wrapper>
    </Styles.StyledReachDate>
  );
}
