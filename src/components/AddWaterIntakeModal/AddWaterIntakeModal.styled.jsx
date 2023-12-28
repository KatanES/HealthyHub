import styled from 'styled-components';
import { Form, Field } from 'formik';
import errorIcon from '../../assets/icons/error.svg';
import { globalColor } from '../../components/Header/root';

export const Container = styled.div`
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
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(3px);
`;

export const WaterIntakeModal = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  width: 300px;
  height: 266px;
  border-radius: 12px;
  padding: 0 12px;
  background-color: ${globalColor.colorPrimaryBlack2};

  font-style: normal;

  @media (min-width: 834px) {
    top: 180px;
    width: 338px;
    height: 280px;
    padding: 24px 40px;
  }

  @media (min-width: 1440px) {
    top: 215px;
  }
`;

export const WaterIntakeForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media (min-width: 834px) {
    width: 258px;
    padding-left: 23px;
    padding-right: 23px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
  }
`;

export const WaterLable = styled.label`
  position: relative;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  margin: 24px 0 0 24px;

  &::after {
    position: absolute;
    bottom: 50%;
    right: -10%;
    transform: translateY(50px);
    content: '';
    display: ${({ $showIcon }) => $showIcon};
    margin-left: 16px;
    width: 16px;
    height: 16px;
    background-image: url('${errorIcon}');
  }
`;

export const InputField = styled(Field)`
width: 100%;
  padding: 8px 10px;
  background: transparent;
  border: 1px solid ${globalColor.colorPrimaryGreenLite};
  border-radius: 12px;
  margin: 12px auto 0 24px;
  outline: none;
  font-size: 14px;
  line-height: 1.42;
  color: ${globalColor.colorPrimaryWhite};
  &::placeholder {
    font-size: 14px;
    line-height: 1.42;
    color: ${globalColor.colorPrimaryGrey};
  }


`;

export const ButtonWrapper = styled.div`
  weidth: 100%;
  display: flex;
  flex-direction: column;
  margin: 32px 0 0 0;
gap: 16px;
  @media (min-width: 834px) {
    width: 212px;
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
  width: 276px;
  text-transform: none;
  padding: 8px 10px;
  margin: 0;
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

export const ErrorText = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  color: ${globalColor.colorSecondaryRed};
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  padding-left: 10px;

  @media (min-width: 834px) {
    margin-left: 42px;
  }
`;

export const CancelButton = styled.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: transparent;
  border: none;

  color: ${globalColor.colorPrimaryGrey} ;
  font-family: Poppins;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: 834px) {
    width: 212px;
  }
`;
