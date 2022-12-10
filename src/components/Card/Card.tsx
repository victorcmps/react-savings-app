import { ReactElement } from 'react';
import { CardStyle } from './Card.style';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card(props: CardProps): ReactElement {
  return <CardStyle className={props.className}>{props.children}</CardStyle>;
}
