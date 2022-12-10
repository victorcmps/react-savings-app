import { ReactElement } from 'react';
import dollarIcon from '../../assets/icons/dollar-sign.svg';
import {
  AmountWrapper,
  Label,
  InputWrapper,
  Icon,
  Input,
} from './Amount.style';

export function Amount(): ReactElement {
  return (
    <AmountWrapper>
      <Label htmlFor="amount">Total amount</Label>
      <InputWrapper>
        <Icon aria-hidden src={dollarIcon} />
        <Input id="amount" name="savingsGoal" defaultValue={`25,000`} />
      </InputWrapper>
    </AmountWrapper>
  );
}
