import { Field } from 'formik';
import styled from 'styled-components';
import { globalColor } from '../../Header/root';

export const AgeContainer = styled.div`
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

export const AgeAndGenderlImg = styled.img`
  width: 100%;
  height: auto;
`;

export const AgeWrapper = styled.div`
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

export const AgeTitle = styled.h2`
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

export const Text = styled.p`
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


export const GenderText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin: 24px 0 0 0;
`;

export const GenderRadio = styled.div`
  display: flex;
  flex-direction: row;
  width: 230px;
  margin: 12px 0 0 0;
  justify-content: space-between;
  @media (min-width: 834px) {
    width: 276px;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: column;
    margin: 12px 0 0 0;
    gap: 16px;
  }
`;

export const GenderLabel = styled.label`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AgeText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin: 24px 0 0 0;
`;

export const GenderField = styled(Field)`
  place-content: center;
  appearance: none;
  background-color: black;
  margin-top: auto;
  font: inherit;
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
  @media (min-width: 834px) {
    margin-top: 0;
  }
`;

export const InputContainer = styled.div`
  background: transparent;
  position: relative;
  margin: 12px 0 0 0;
  @media (min-width: 1440px) {
    width: 212px;
  }
`;

export const InputText = styled.input`
  width: -webkit-fill-available;
  padding: 8px 10px;

  border: 1px solid ${globalColor.colorPrimaryGreenLite};
  border-radius: 12px;
  border-radius: 12px;
  background: transparent;
  font-size: 14px;
  color: ${globalColor.colorPrimaryWhite};

  &:focus,
  &:hover,
  &:active {
    background: transparent;
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: ${globalColor.colorPrimaryGrey};
  }
`;
export const IconTextPosition = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
`;

export const SVG = styled.svg`
  width: 16px;
  height: 16px;
  margin: 0 4px 0 0;
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
    margin: 24px 0 144px 0;
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
