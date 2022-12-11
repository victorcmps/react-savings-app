import styled from 'styled-components';

export const ButtonStyle = styled.button`
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${(props) => props.theme.color.brandColorPrimary};
  color: ${(props) => props.theme.color.neutralWhite};
  padding: 18px 0;
  border-radius: 32px;
  display: block;
  width: 320px;
  height: 56px;
  border: 0;
  transition: 0.2s background-color;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.brandColorSecondary};
  }
`;
