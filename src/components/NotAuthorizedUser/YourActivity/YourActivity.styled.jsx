import { Field, Form } from 'formik';
import styled from 'styled-components';
import { globalColor } from '../../Header/root';

export const ActivContainer = styled.div`
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

export const ActivlImg = styled.img`
  width: 100%;
  height: auto;
`;

export const ActivWrapper = styled.div`
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

export const ActivTitle = styled.h2`
  margin: 0;
  font-size: 24px;
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

export const Text = styled.p`
  font-size: 18px;
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
export const ActivRadioForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 0;
  @media (min-width: 834px) {
    width: 438px;
    margin: 24px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
  }
`;

export const ActivRadio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 834px) {
    width: 438px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: column;
  }
`;

export const ActivLabel = styled.label`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
  @media (min-width: 834px) {

    letter-spacing: 0.01em;
  }
`;

export const ActivField = styled(Field)`
  place-content: center;
  appearance: none;
  background-color: black;
  color: ${globalColor.colorPrimaryGreenLite};
  width: 12px;
  height: 12px;
  border: 0.15em solid ${globalColor.colorPrimaryGrey};
  border-radius: 50%;
  transform: translateY(-0.075em);

  &:checked {
    background-color: rgba(227, 255, 168, 1);
    transform: scale(1);
  }
`;

export const ButtonWrapper = styled.div`
  weidth: 100%;
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 0;

  @media (min-width: 834px) {
    width: 380px;
    margin: 24px auto 186px auto;
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
export const ErrorMessageStyled = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 0px 10px 0 0;
  color: ${globalColor.colorSecondaryRed};
`;
