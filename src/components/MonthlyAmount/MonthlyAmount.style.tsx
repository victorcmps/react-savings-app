import styled from 'styled-components';
import { color, fontFamily } from '../../shared/styles/tokens';

export const StyledMonthlyAmount = styled.div`
  border: 1px solid ${color.blueGray50};
  border-radius: 8px;
`;

export const AmountInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;

  @media (min-width: 992px) {
    padding: 24px 32px 16px 32px;
  }
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  color: ${color.blueGray900};

  @media (min-width: 992px) {
    font-size: 20px;
  }
`;

export const Amount = styled.h3`
  font-family: ${fontFamily.rubik};
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  font-size: 24px;
  color: ${color.brandColorSecondary};

  @media (min-width: 992px) {
    font-size: 32px;
  }
`;

export const AmountDetail = styled.div`
  background-color: ${color.blueGray10};
  padding: 24px 32px;
`;

export const AmountDetailText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${color.blueGray900};
  text-align: center;
  line-height: 133%;

  @media (min-width: 992px) {
    text-align: left;
  }
`;
