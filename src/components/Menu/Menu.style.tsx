import styled from 'styled-components';
import { color } from '../../shared/styles/tokens';

export const Navbar = styled.div`
  padding: 16px;
  background-color: ${color.neutralWhite};
  margin-bottom: 32px;
  height: 56px;

  @media (min-width: 992px) {
    padding: 24px 56px;
    margin-bottom: 48px;
    height: 80px;
  }
`;

export const Logo = styled.img`
  @media (min-width: 992px) {
    width: 100px;
    height: 32px;
  } ;
`;
