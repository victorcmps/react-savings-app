import { ReactElement } from 'react';
import logo from '../../assets/images/logo.svg';
import * as SC from './Menu.style';

export function Menu(): ReactElement {
  return (
    <SC.Navbar>
      <SC.Logo width={75} height={24} src={logo} alt="Logo" />
    </SC.Navbar>
  );
}
