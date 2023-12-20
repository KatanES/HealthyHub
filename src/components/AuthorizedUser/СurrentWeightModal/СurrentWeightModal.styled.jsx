import styled from 'styled-components';

import { globalColor } from '../../Header/root';

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

export const Text2 = styled.p`
  color: ${globalColor.colorPrimaryWhite};
  line-height: 1.42857;
  font-size: 14px;
  margin: 0;
  > span {
    color: ${globalColor.colorPrimaryGrey};
  }
`;

export const WeightForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0;
  }
`;

export const InputStyled = styled.input`
  box-sizing: border-box;
  padding: 8px 10px;
  height: 36px;
  border-radius: 12px;
  border: 1px solid ${globalColor.colorPrimaryGreenLite};
  background: transparent;
  color: ${globalColor.colorPrimaryWhite};
  font-family: inherit;
  line-height: 1.42857;
  @media (min-width: 834px) {
    width: 166px;
  }
`;

export const ConfirmWeightModalButton = styled.button`
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

export const CloseWeightModalButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  width: 100%;
  color: ${globalColor.colorPrimaryGrey};
  font-size: 14px;
  font-family: inherit;
  text-align: center;
  line-height: 1.42857;
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
