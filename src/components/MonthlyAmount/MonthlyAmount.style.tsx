import styled from 'styled-components';
import { color, fontFamily } from '../../shared/styles/tokens';

export const StyledMonthlyAmount = styled.div`
  border: 1px solid ${color.blueGray50};
  border-radius: 8px;
`;

export const AmountInfo = styled.div`
  display: flex;
  margin: 24px 32px 16px 32px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  font-family: ${fontFamily.workSans};
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: ${color.blueGray900};
`;

export const Amount = styled.h3`
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  color: ${color.brandColorSecondary};
`;

export const AmountDetail = styled.div`
  background-color: ${color.blueGray10};
  padding: 24px 32px;
`;

export const AmountDetailText = styled.p`
  font-family: ${fontFamily.workSans};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${color.blueGray900};
`;
