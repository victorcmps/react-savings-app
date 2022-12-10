import { ReactElement } from 'react';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';
import {
  StyledReachDate,
  Label,
  Wrapper,
  Button,
  DateWrapper,
  Month,
  Year,
} from './ReachDate.style';

export function ReachDate(): ReactElement {
  return (
    <StyledReachDate>
      <Label>Reach goal by</Label>
      <Wrapper tabIndex={0}>
        <Button aria-label="Go to previous month">
          <img width={24} height={24} aria-hidden src={chevronLeft} alt="" />
        </Button>
        <DateWrapper>
          <Month>October</Month>
          <Year>2021</Year>
          <input type="hidden" id="datepicker" name="savingGoal" />
        </DateWrapper>
        <Button aria-label="Go to next month">
          <img width={24} height={24} aria-hidden src={chevronRight} alt="" />
        </Button>
      </Wrapper>
    </StyledReachDate>
  );
}
