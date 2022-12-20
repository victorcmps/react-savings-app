import styled from 'styled-components';

export const WrapperSavedGoal = styled.div`
  border: 1px solid ${(props) => props.theme.color.blueGray50};
  padding: 12px 32px;
  border-radius: 8px;
  display: flex;
  margin-bottom: 16px;

  @media (min-width: 992px) {
    padding: 12px 16px;
  }
`;

export const SavedGoalItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const SavedGoalItemTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
`;

export const SavedGoalItemAmount = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: ${(props) => props.theme.color.brandColorSecondary};
  text-align: center;
`;

export const SavedGoalItemDate = styled(SavedGoalItemAmount)`
  color: ${(props) => props.theme.color.blueGray900};
  text-align: center;
`;
