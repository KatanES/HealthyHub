import styled from 'styled-components';

import { globalColor } from '../../Header/root';

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;

  width: 300px;

  @media (min-width: 834px) {
    margin-top: 0;
    width: 491px;
  }

  @media (min-width: 1440px) {
    width: 491px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const WrapperContainerBigScreen = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
`;

export const ContainerBigScreen = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 60px;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  gap: 40px;

  @media (min-width: 834px) {
    margin: 24px auto 0 auto;

    width: 491px;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  width: 280px;

  color: ${globalColor.colorPrimaryWhite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  
  @media (min-width: 834px) {
    width: 212px;
  }
`;

export const FormInput = styled.input`
  padding: 8px 10px;

  width: 100%;

  color: ${globalColor.colorPrimaryWhite};

  font-size: 14px;
  font-style: normal;
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

  @media (min-width: 834px) {
    max-width: 212px;
  }
`;

export const WrapperSection = styled.div`
  @media (min-width: 834px) {
    width: 219px;
  }
`;

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;

  margin-top: 12px;

  @media (min-width: 834px) {
    width: 219px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  width: 36px;
  height: 36px;
  object-fit: cover;
`;

export const AvatarUpload = styled.div`
  display: flex;
  align-items: center;
`;

export const InputFile = styled.input`
  display: none;
`;

export const SvgUpload = styled.svg`
  width: 16px;
  height: 16px;

  stroke: ${globalColor.colorPrimaryGreenLite};

  cursor: pointer;
`;

export const SpanUpload = styled.span`
  color: ${globalColor.colorPrimaryWhite};

  font-size: 14px;
  line-height: 1.43;

  cursor: pointer;
`;

export const TitleRadio = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const ContainerGender = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  margin-top: 12px;

  width: 230px;

  @media (min-width: 834px) {
    width: 276px;
  }

  @media (min-width: 1440px) {
    margin-top: 12px;

    gap: 16px;

    text-align: left;
  }
`;

export const GenderLabel = styled.label`
  display: flex;
  align-items: center;

  gap: 8px;

  font-size: 14px;
  line-height: 1.43;
`;

export const RadioBtn = styled.input`
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

  @media (min-width: 834px) {
    margin-top: 0;
  }
`;

export const ContainerActivity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;

  margin-top: 12px;

  width: 300px;

  @media (min-width: 834px) {
    width: 276px;
  }

  @media (min-width: 1440px) {
    margin-top: 12px;

    gap: 16px;

    text-align: left;
  }
`;

export const ActivityLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  width: 300px;

  font-size: 14px;
  line-height: 1.43;

  color: ${globalColor.colorPrimaryWhite};

  @media (min-width: 834px) {
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
