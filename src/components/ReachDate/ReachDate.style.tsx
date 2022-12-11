import styled from 'styled-components';

export const StyledReachDate = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.color.blueGray900};
  margin-bottom: 4px;

  @media (min-width: 992px) {
    font-size: 14px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.blueGray50};
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  height: 56px;
  border-radius: 4px;
  color: ${(props) => props.theme.color.blueGray600};
  width: 100%;

  @media (min-width: 992px) {
    width: 192px;
  }
`;

export const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Button = styled.span`
  background: white;
  border: 0;
  padding: 0 12px;
  cursor: pointer;
  height: 100%;
  display: flex;
  place-items: center;

  &[data-disabled='true'] {
    pointer-events: none;
    ${ButtonIcon} {
      opacity: 0.2;
    }
  }
`;

export const DateWrapper = styled.span`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  @media (min-width: 992px) {
    font-size: 16px;
  }
`;

export const Month = styled.p`
  color: ${(props) => props.theme.color.blueGray900};
  font-weight: 600;
`;

export const Year = styled.p`
  color: ${(props) => props.theme.color.blueGray400};
`;
