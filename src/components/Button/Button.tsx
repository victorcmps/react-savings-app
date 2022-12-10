import { ReactElement } from 'react';
import { ButtonStyle } from './Button.style';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function Button(props: ButtonProps): ReactElement {
  return (
    <ButtonStyle className={props.className}>{props.children}</ButtonStyle>
  );
}
