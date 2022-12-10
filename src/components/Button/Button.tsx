import { ReactElement } from 'react';
import { ButtonStyle } from './Button.style';

type ButtonProps = {
  children: React.ReactNode;
};

export function Button(props: ButtonProps): ReactElement {
  return <ButtonStyle>{props.children}</ButtonStyle>;
}
