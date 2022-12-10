import styled from 'styled-components';

import { ColorTokens } from '../../shared/styles/tokens/colors';

export const Navbar = styled.div`
  padding: 16px;
  background-color: ${ColorTokens.neutralWhite};
  margin-bottom: 32px;

  @media (min-width: 992px) {
    padding: 24px 56px;
    margin-bottom: 48px;
  }
`;

export const Logo = styled.img`
  @media (min-width: 992px) {
    width: 100px;
    height: 32px;
  } ;
`;
