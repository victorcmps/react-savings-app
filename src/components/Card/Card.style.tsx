import styled from 'styled-components';

export const CardStyle = styled.div`
  background-color: ${(props) => props.theme.color.neutralWhite};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  display: block;
  padding: 0 40px;
  width: 100vw;

  @media (min-width: 992px) {
    width: 560px;
  }
`;

export const Icon = styled.img`
  display: flex;
  align-items: center;
`;
