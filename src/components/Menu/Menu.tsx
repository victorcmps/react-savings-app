import { ReactElement } from 'react';
import logo from '../../assets/images/logo.svg';
import { Navbar, Logo } from './Menu.style';

export function Menu(): ReactElement {
  return (
    <Navbar>
      <Logo width={75} height={24} src={logo} alt="Origin Logo" />
    </Navbar>
  );
}
