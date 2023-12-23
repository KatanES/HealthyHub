import styled from 'styled-components';

import { globalColor } from '../../Header/root';

export const SettingsContainer = styled.div`
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

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 24px;

  @media (min-width: 834px) {
    margin: 24px auto 0 auto;

    width: 438px;
  }

  @media (min-width: 1440px) {
    margin-top: 24px;

    width: 212px;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  width: 100%;
  margin-bottom: 40px;

  color: ${globalColor.colorPrimaryWhite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const FormInput = styled.input`
  padding: 8px 10px;

  width: 280px;

  color: ${globalColor.colorPrimaryWhite};

  font-size: 14px;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${globalColor.colorPrimaryGrey};
  background: ${globalColor.colorPrimaryBlack2};

  &:focus,
  &:hover,
  &:active {
    border: 1px solid ${globalColor.colorPrimaryGreenLite};
    background: transparent;
    outline: none;
  }
`;

export const FormInputRadio = styled.input``;

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;

  weidth: 100%;

  @media (min-width: 834px) {
    width: 380px;
    margin: 24px auto 196px auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
    margin: 24px 0 164px 0;
  }
`;

export const FormSaveBtn = styled.button`
  margin-bottom: 12px;
  padding: 8px 10px;

  width: 100%;

  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;

  border: none;
  border-radius: 12px;

  background-color: ${globalColor.colorPrimaryGreenLite};
  color: ${globalColor.colorPrimaryBlack2};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
    color: ${globalColor.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${globalColor.colorPrimaryWhite};
  }
`;

export const FromCancelBtn = styled.button`
  margin-bottom: 40px;

  width: 280px;

  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border: none;

  background-color: transparent;
  color: ${globalColor.colorPrimaryGrey};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
    color: ${globalColor.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${globalColor.colorPrimaryWhite};
  }
`;
