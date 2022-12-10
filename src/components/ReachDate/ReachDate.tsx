import { ReactElement } from 'react';
import styled from 'styled-components';
import { ColorTokens } from '../../styles/colors';

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
    width: 192px;
  }
`;

export function ReachDate(): ReactElement {
  return <Input />;
}
