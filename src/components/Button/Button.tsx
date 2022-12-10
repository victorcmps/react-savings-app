import { ReactElement } from 'react';
import styled from 'styled-components';
import { ColorTokens } from '../../styles/colors';

type ButtonProps = {
  children: React.ReactNode;
};

const ButtonStyle = styled.button`
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${ColorTokens.brandColorPrimary};
  color: ${ColorTokens.neutralWhite};
  padding: 18px 0;
  border-radius: 32px;
  display: block;
  width: 320px;
  height: 56px;
`;

export function Button(props: ButtonProps): ReactElement {
  return <ButtonStyle>{props.children}</ButtonStyle>;
}
