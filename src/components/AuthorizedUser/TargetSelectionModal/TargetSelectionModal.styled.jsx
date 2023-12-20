import styled from 'styled-components';

import { globalColor } from '../../Header/root';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 284px;
  
  @media (max-width: 833px) {
    margin: 0 auto;
    max-width: 300px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  color: ${globalColor.colorPrimaryWhite};
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  line-height: 1.33;
  margin: 0;
`;

export const Text = styled.p`
  color: ${globalColor.colorPrimaryGrey};
  line-height: 1.42857;
  font-size: 14px;
  font-family: inherit;
  margin: 0;
`;

export const ConfirmTargetSelectionModalButton = styled.button`
  border: none;
  border-radius: 12px;
  background-color: ${globalColor.colorPrimaryGreenLite};
  color: ${globalColor.colorPrimaryBlack};
  padding: 8px 10px;
  text-align: center;
  width: 100%;
  height: 36px;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42857;

  @media (min-width: 834px) {
    width: 166px;
  }
`;

export const CloseTargetSelectionModalButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  width: 100%;
  color: ${globalColor.colorPrimaryGrey};
  font-size: 14px;
  font-family: inherit;
  text-align: center;
  line-height: 1.42857;
  margin: 8px auto 0;
`;

export const MenuButtonCloseModal = styled.button`
  position: absolute;
  top: 20px;
  right: 32px;
  left: auto;
  bottom: auto;
  width: 16px;
  height: 16px;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
`;

export const SvgWrapper = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${globalColor.colorPrimaryGrey};
`;
