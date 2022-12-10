import { ReactElement } from 'react';
import styled from 'styled-components';
import { ColorTokens } from '../../styles/colors';

type CardProps = {
  children: React.ReactNode;
};

const CardStyle = styled.div`
  background-color: ${ColorTokens.neutralWhite};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  width: 560px;
  padding: 0 40px;
`;

export function Card(props: CardProps): ReactElement {
  return <CardStyle>{props.children}</CardStyle>;
}
