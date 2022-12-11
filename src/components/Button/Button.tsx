import { ReactElement } from 'react';
import * as SC from './Button.style';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: Event;
};

export function Button(props: ButtonProps): ReactElement {
  return (
    <SC.ButtonStyle
      onClick={(event) => event.preventDefault()}
      className={props.className}
    >
      {props.children}
    </SC.ButtonStyle>
  );
}
