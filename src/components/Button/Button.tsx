import { ReactElement } from 'react';
import { ButtonStyle } from './Button.style';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: Event;
};

export function Button(props: ButtonProps): ReactElement {
  return (
    <ButtonStyle
      onClick={(event) => event.preventDefault()}
      className={props.className}
    >
      {props.children}
    </ButtonStyle>
  );
}
