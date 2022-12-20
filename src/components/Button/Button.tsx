import { ReactElement } from 'react';
import * as SC from './Button.style';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  disabled?: boolean;
  to?: string;
  onClick?: () => void;
};

export function Button(props: ButtonProps): ReactElement {
  return (
    <SC.ButtonStyle
      data-variant={props.variant}
      data-disabled={props.disabled}
      onClick={props.onClick}
      type="button"
      className={props.className}
      to={props.to as string}
    >
      {props.children}
    </SC.ButtonStyle>
  );
}
