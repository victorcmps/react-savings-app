import { ReactElement } from 'react';
import { Card } from '../components/Card/Card';
import { Amount } from '../components/Amount/Amount';
import styled from 'styled-components';
import { ColorTokens } from '../styles/colors';
import buyAHouseIcon from '../assets/icons/buy-a-house.svg';
import { Button } from '../components/Button/Button';
import { ReachDate } from '../components/ReachDate/ReachDate';

const Wrapper = styled.div`
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  padding-bottom: 24px;
  color: ${ColorTokens.brandColorPrimary};
`;

const CardTitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 24px;
  align-items: center;
`;

const CardTitle = styled.h2`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: ${ColorTokens.blueGray900};
`;

const CardSubtitle = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export function SavingsGoalSimulator(): ReactElement {
  return (
    <Wrapper>
      <Title>
        Let&apos;s plan your <strong>saving goal.</strong>
      </Title>
      <Card>
        <CardTitleWrapper>
          <img width={64} height={64} src={buyAHouseIcon} alt="Buy a house" />
          <span>
            <CardTitle>Buy a house</CardTitle>
            <CardSubtitle>Saving goal</CardSubtitle>
          </span>
        </CardTitleWrapper>
        <InputWrapper>
          <Amount />
          <ReachDate />
        </InputWrapper>
        <Button>Confirm</Button>
      </Card>
    </Wrapper>
  );
}
