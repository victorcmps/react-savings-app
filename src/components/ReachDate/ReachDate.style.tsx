import styled from 'styled-components';
import { color, fontFamily } from '../../shared/styles/tokens';

export const StyledReachDate = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Label = styled.label`
  font-family: ${fontFamily.workSans};
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${color.blueGray900};
  margin-bottom: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${color.blueGray50};
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  height: 56px;
  border-radius: 4px;
  color: ${color.blueGray600};
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
  font-family: ${fontFamily.workSans};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`;

export const Month = styled.p`
  color: ${color.blueGray900};
  font-weight: 600;
`;

export const Year = styled.p`
  color: ${color.blueGray400};
`;
