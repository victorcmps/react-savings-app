import styled from 'styled-components';
import { ColorTokens } from '../../shared/styles/tokens/colors';

export const StyledReachDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: 'Work Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${ColorTokens.blueGray900};
  margin-bottom: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${ColorTokens.blueGray50};
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  height: 56px;
  border-radius: 4px;
  color: ${ColorTokens.blueGray600};
  width: 100%;

  @media (min-width: 992px) {
    width: 192px;
  }
`;

export const Button = styled.span`
  background: white;
  border: 0;
  padding: 0 12px;
  cursor: pointer;
  height: 100%;
  display: flex;
  place-items: center;
`;

export const DateWrapper = styled.span`
  display: flex;
  flex-direction: column;
  font-family: 'Work Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`;

export const Month = styled.p`
  color: ${ColorTokens.blueGray900};
  font-weight: 600;
`;

export const Year = styled.p`
  color: ${ColorTokens.blueGray400};
`;
