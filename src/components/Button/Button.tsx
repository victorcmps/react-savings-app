import { ReactElement } from 'react';
import * as SC from './Button.style';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Button(props: ButtonProps): ReactElement {
  return (
    <SC.ButtonStyle
      onClick={props.onClick}
      type="button"
      className={props.className}
    >
      {props.children}
    </SC.ButtonStyle>
  );
}
