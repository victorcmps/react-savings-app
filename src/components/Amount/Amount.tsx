import { ReactElement } from 'react';
import styled from 'styled-components';
import { ColorTokens } from '../../styles/colors';
import dollarIcon from '../../assets/icons/dollar-sign.svg';

const InputWrapper = styled.div`
  position: relative;
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  translate: 0% -50%;
  margin-left: 12px;
  pointer-events: none;
`;

const Input = styled.input`
  border: 1px solid ${ColorTokens.blueGray50};
  padding-left: 44px;
  padding-right: 12px;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
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

export function Amount(): ReactElement {
  return (
    <>
      <InputWrapper>
        <Icon src={dollarIcon} />
        <Input />
      </InputWrapper>
    </>
  );
}
