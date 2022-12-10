import styled from 'styled-components';
import { color } from '../../shared/styles/tokens';

export const CardStyle = styled.div`
  background-color: ${color.neutralWhite};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  display: block;
  padding: 0 40px;
  width: 100vw;

  @media (min-width: 992px) {
    width: 560px;
  }
`;
