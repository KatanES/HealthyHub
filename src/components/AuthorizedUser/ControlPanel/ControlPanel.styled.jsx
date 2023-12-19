import styled from 'styled-components';
import { globalColor } from '../../Header/root';

export const WrapperControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 834px) {
    flex-direction: row;
    margin-left: 127px;
    margin-right: 73px;
  }

  @media (min-width: 1440px) {
    gap: 80px;
    margin-left: 626px;
    margin-left: 124px;
  }
`;

export const MenuButton = styled.button`
  border: none;
  padding: 0;
  background: transparent;

  @media (min-width: 834px) {
    display: none;
  }
`;

export const MenuButtonCloseModal = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
`;

export const SvgWrapperCloseModal = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${globalColor.colorPrimaryGrey};
`;

export const ControlPanelButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  background: transparent;
  padding: 0;
`;

export const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

export const Title = styled.p`
  color: ${globalColor.colorPrimaryWhite};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857;
  margin: 0;
`;

export const TextWrapperGoal = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const IconSelectWrapper = styled.div`
  width: 28px;
  height: 28px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid ${globalColor.colorSecondaryGrey1};
  background: rgba(255, 255, 255, 0.01);
`;

export const SvgWrapper = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${globalColor.colorPrimaryGreenLite};

  &.active {
    stroke: ${globalColor.colorPrimaryGrey};
  }
`;

export const TextWrapperWeight = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const Text = styled.p`
  color: ${globalColor.colorPrimaryWhite};
  font-weight: 500;
  line-height: 1.42857;
  margin: 0;

  > span {
    color: ${globalColor.colorPrimaryGrey};
    font-weight: 400;
    margin: 0;
  }
`;
