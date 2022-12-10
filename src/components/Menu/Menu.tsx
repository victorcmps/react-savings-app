import { ReactElement } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import { ColorTokens } from '../../styles/colors';

const Navbar = styled.div`
  padding: 16px;
  background-color: ${ColorTokens.neutralWhite};

  @media (min-width: 992px) {
    padding: 24px 56px;
  }
`;

const Logo = styled.img`
  @media (min-width: 992px) {
    width: 100px;
    height: 32px;
  } ;
`;

export function Menu(): ReactElement {
  return (
    <Navbar>
      <Logo width={75} height={24} src={logo} alt="Origin Logo" />
    </Navbar>
  );
}
