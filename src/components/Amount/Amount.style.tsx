import styled from 'styled-components';
import { ColorTokens } from '../../shared/styles/tokens/colors';

export const AmountWrapper = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: 'Work Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${ColorTokens.blueGray900};
  margin-bottom: 4px;
`;

export const InputWrapper = styled.span`
  position: relative;
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  translate: 0% -50%;
  margin-left: 12px;
  pointer-events: none;
`;

export const Input = styled.input`
  border: 1px solid ${ColorTokens.blueGray50};
  padding-left: 44px;
  padding-right: 12px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  height: 56px;
  border-radius: 4px;
  color: ${ColorTokens.blueGray600};
  width: 100%;

  @media (min-width: 992px) {
    width: 272px;
  }
`;
