import { Field, Form } from 'formik';
import styled from 'styled-components';
import { globalColor } from '../../Header/root';

export const GoalContainer = styled.div`
  width: 300px;
  @media (min-width: 834px) {
    width: 780px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1440px) {
    width: 1372px;
    display: flex;

    flex-direction: row;
    align-items: flex-start;
  }
`;

export const WrapperImg = styled.div`
  width: 300px;
  margin: 40px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin: 40px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-left: 116px;
  }
`;

export const YourGoalImg = styled.img`
  width: 100%;
  height: auto;
`;

export const GoalWrapper = styled.div`
  width: 300px;
  margin: 24px auto 0 auto;
  @media (min-width: 834px) {
    width: 380px;
    margin: 24px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 444px;
    margin: 120px auto 0 auto;
  }
`;

export const GoalTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const GoalText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: ${globalColor.colorPrimaryGrey};
  margin: 16px 0 0 0;
  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
export const GaolRadioForm = styled(Form)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 24px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;

    margin: 24px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
  }
`;

export const GaolRadio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 834px) {
    width: 380px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: column;
  }
`;

export const GoalLabel = styled.label`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const GoalField = styled(Field)`
  appearance: none;

  min-width: 12px;
  min-height: 12px;

  font: inherit;
  color: ${globalColor.colorPrimaryGreenLite};
  background-color: black;

  border: 0.11em solid ${globalColor.colorPrimaryGrey};
  border-radius: 50%;

  &:checked {
    background: radial-gradient(
      circle,
      ${globalColor.colorPrimaryGreenLite} 40%,
      transparent 50%
    );
  }
`;

export const ButtonWrapper = styled.div`
  weidth: 100%;
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 0;

  @media (min-width: 834px) {
    width: 380px;
    margin: 24px auto 366px auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
    margin: 24px 0 228px 0;
  }
`;

export const StyledButton = styled.button`
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  border: none;
  border-radius: 12px;
  width: 100%;
  text-transform: none;
  padding: 8px 10px;
  margin: 0 0 20px 0;
  background-color: ${globalColor.colorPrimaryGreenLite};
  color: ${globalColor.colorPrimaryBlack2};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: transparent;
    color: ${globalColor.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${globalColor.colorPrimaryWhite};
  }
`;
export const ErrorMessageStyled = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin: 0px 10px 0 0;
  color: ${globalColor.colorSecondaryRed};
`;
