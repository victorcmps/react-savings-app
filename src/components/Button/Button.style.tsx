import styled from 'styled-components';
import { color } from '../../shared/styles/tokens';

export const ButtonStyle = styled.button`
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${color.brandColorPrimary};
  color: ${color.neutralWhite};
  padding: 18px 0;
  border-radius: 32px;
  display: block;
  width: 320px;
  height: 56px;
`;
