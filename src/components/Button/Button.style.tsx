import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonStyle = styled(Link)`
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${(props) => props.theme.color.brandColorPrimary};
  color: ${(props) => props.theme.color.neutralWhite};
  padding: 10px 0;
  border-radius: 32px;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  transition: 0.2s background-color;
  text-align: center;

  &[data-variant='secondary'] {
    background-color: ${(props) => props.theme.color.blueGray10};
    color: ${(props) => props.theme.color.brandColorSecondary};
  }

  &[data-disabled='true'] {
    pointer-events: none;
    opacity: 0.2;
  }
`;
