import { Form } from 'formik';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { globalColor } from '../../../components/Header/root';

export const ForgotPassContainer = styled.div`
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

export const PassImg = styled.img`
  width: 100%;
  height: auto;
`;

export const PassWrapper = styled.div`
  width: 300px;
  margin: 24px auto 0 auto;
  @media (min-width: 834px) {
    width: 380px;
    margin: 60px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 444px;
    margin: 120px auto 0 auto;
  }
`;

export const PassTitle = styled.h2`
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

export const PassText = styled.p`
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

export const StyledForm = styled(Form)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 24px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;

    margin: 60px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
  }
`;

export const InputContainer = styled.div`
  background: transparent;
  position: relative;
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

export const ErrorMessageStyled = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin: 0px 10px 0 0;
  color: ${globalColor.colorSecondaryRed};
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
  margin: 20px 0 0 0;
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

export const PassNavigateWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin: 48px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;
    flex-direction: row;
    margin: 206px 0 60px 0;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: column;
  }
`;
export const PassQuestion = styled.p`
  font-size: 14px;
  line-height: 1.42;
  color: ${globalColor.colorPrimaryGrey};
  margin: 0;
`;

export const PassNavLink = styled(NavLink)`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  color: ${globalColor.colorPrimaryWhite};
  margin: 0 0 40px 0;
  @media (min-width: 834px) {
    margin: 0;
  }
`;
export const SVG = styled.svg`
  width: 16px;
  height: 16px;
  margin: 0 20px 0 0;
`;
