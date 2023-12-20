import styled from 'styled-components';

import { globalColor } from '../../Header/root';

export const LogoutBtnButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0;
  background: transparent;
`;

export const Text = styled.p`
  color: ${globalColor.colorPrimaryWhite};
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42857;
`;

export const IconWrapper = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${globalColor.colorPrimaryWhite};
`;

export const TextModalConfirm = styled.p`
  color: ${globalColor.colorPrimaryWhite};
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.42857;
`;

export const ModalConfirmButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const CancelModalConfirmButton = styled.button`
  border: none;
  border-radius: 12px;
  background-color: ${globalColor.colorPrimaryGreenLite};
  padding: 10px;
  width: 100px;
  font-size: 14px;
  min-height: 40px;
  font-family: inherit;
  color: ${globalColor.colorPrimaryBlack};
  transition: font-size 0.3s ease;

  &:focus,
  &:hover,
  &:active {
    background-color: ${globalColor.colorPrimaryGreen};
    color: ${globalColor.colorPrimaryBlack2};
    font-size: 16px;
  }
`;

export const LogoutModalConfirmButton = styled.button`
  border: 1px solid ${globalColor.colorPrimaryGreenLite};
  border-radius: 12px;
  background: transparent;
  padding: 10px;
  width: 100px;
  min-height: 40px;
  color: ${globalColor.colorPrimaryWhite};
  font-size: 14px;
  font-family: inherit;
  transition: font-size 0.3s ease;

  &:focus,
  &:hover,
  &:active {
    border: 1px solid ${globalColor.colorPrimaryGreen};
    font-size: 16px;
  }
`;
