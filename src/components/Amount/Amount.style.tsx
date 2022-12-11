import styled from 'styled-components';

export const AmountWrapper = styled.label`
  display: flex;
  flex-direction: column;
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

export const InputWrapper = styled.span`
  position: relative;
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  translate: 0% -50%;
  margin-left: 12px;
  pointer-events: none;
`;

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.color.blueGray50};
  padding-left: 44px;
  padding-right: 12px;
  font-family: ${(props) => props.theme.font.rubik};
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  height: 56px;
  border-radius: 4px;
  color: ${(props) => props.theme.color.blueGray600};
  width: 100%;

  @media (min-width: 992px) {
    width: 272px;
    font-size: 24px;
  }
`;
