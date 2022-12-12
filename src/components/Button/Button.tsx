import { ReactElement } from 'react';
import * as SC from './Button.style';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function Button(props: ButtonProps): ReactElement {
  return (
    <SC.ButtonStyle className={props.className}>
      {props.children}
    </SC.ButtonStyle>
  );
}
