import styled from 'styled-components';

import { globalColor } from '../../Header/root';

export const Wrapper = styled.div`
  @media (max-width: 833px) {
    margin: 0 auto;
    max-width: 300px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${globalColor.colorPrimaryWhite};
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  line-height: 1.33;
`;

export const Text = styled.p`
  color: ${globalColor.colorPrimaryGrey};
  line-height: 1.42857;
  font-size: 14px;
  font-family: inherit;
`;

export const Text2 = styled.p`
  color: ${globalColor.colorPrimaryWhite};
  line-height: 1.42857;
  font-size: 14px;
  > span {
    color: ${globalColor.colorPrimaryGrey};
  }
`;

export const WeightForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    gap: 12px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0;
  }
`;

export const InputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
  height: 36px;
  border-radius: 12px;
  border: 1px solid ${globalColor.colorPrimaryGreenLite};
  background: transparent;
  color: ${globalColor.colorPrimaryWhite};
  font-family: inherit;
  line-height: 1.42857;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    appearance: textfield;
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${globalColor.colorPrimaryGreenLite};
  }

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
  padding: 0;
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

export const WrapperInput = styled.div`
  position: relative;
`;

export const SvgWrapper = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${globalColor.colorPrimaryGrey};
`;

export const ErrorMessage = styled.p`
  color: #e74a3b;
  font-size: 12px;
  margin: 0;
  line-height: 1.16667;
  position: absolute;
  top: 40px;
  left: 10px;
`;

export const MenuButtonCloseError = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  left: auto;
  bottom: auto;
  width: 16px;
  height: 16px;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
`;

export const SvgError = styled.svg`
  width: 100%;
  height: 100%;
  fill: #e74a3b;
`;
