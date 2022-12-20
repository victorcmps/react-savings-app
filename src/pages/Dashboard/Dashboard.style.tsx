import styled from 'styled-components';
import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';

export const Wrapper = styled.section`
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Title = styled.h2`
  font-family: ${(props) => props.theme.font.rubik};
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  margin-bottom: 24px;
`;

export const WrapperCard = styled.div`
  display: grid;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const CardDashboard = styled(Card)`
  padding: 16px 16px 24px 16px;
  width: 100%;
  @media (min-width: 992px) {
    padding: 56px 24px 24px 24px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
  @media (min-width: 992px) {
    gap: 8px;
    flex-direction: column;
  }
`;

export const CardHeaderTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
`;

export const CardButton = styled(Button)`
  height: 40px;
  @media (min-width: 992px) {
    margin-top: 56px;
  }

  &[data-variant='secondary'] {
    margin-top: 16px;
  }
`;
