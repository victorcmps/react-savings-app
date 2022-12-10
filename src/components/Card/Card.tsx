import { ReactElement } from 'react';
import { CardStyle } from './Card.style';

type CardProps = {
  children: React.ReactNode;
};

export function Card(props: CardProps): ReactElement {
  return <CardStyle>{props.children}</CardStyle>;
}
