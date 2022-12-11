import { ReactElement } from 'react';
import * as SC from './Card.style';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card(props: CardProps): ReactElement {
  return (
    <SC.CardStyle className={props.className}>{props.children}</SC.CardStyle>
  );
}
