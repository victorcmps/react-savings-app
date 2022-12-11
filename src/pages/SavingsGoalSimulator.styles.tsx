import { Button } from '../components/Button/Button';
import styled from 'styled-components';
import { color, fontFamily } from '../shared/styles/tokens';
import { Card } from '../components/Card/Card';

export const Wrapper = styled.section`
  display: grid;
  place-items: center;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  color: ${color.brandColorPrimary};
  margin-bottom: 24px;

  @media (min-width: 992px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
  }
`;

export const CardSimulator = styled(Card)`
  padding: 24px 24px 40px 24px;

  @media (min-width: 992px) {
    padding: 32px 40px 40px 40px;
  }
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
  @media (min-width: 992px) {
    margin-bottom: 24px;
  }
`;

export const CardTitle = styled.h2`
  font-family: ${fontFamily.rubik};
  font-size: 20px;
  margin-bottom: 4px;
  font-weight: 500;

  @media (min-width: 992px) {
    font-size: 24px;
    line-height: 120%;
    color: ${color.blueGray900};
  }
`;

export const CardSubtitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${color.blueGray400};

  @media (min-width: 992px) {
    font-size: 16px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 24px;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormButton = styled(Button)`
  align-self: center;
  margin-top: 32px;
`;
