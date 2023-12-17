import styled from 'styled-components';
import { globalColor } from '../../Header/root';

export const WrapperControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-left: 127px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-left: 626px;
  }
  @media (min-width: 1200px) {
    gap: 80px;
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

export const IconSelectWrapper = styled.div`
  width: 28px;
  height: 28px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid ${globalColor.colorSecondaryGrey1};
  background: rgba(255, 255, 255, 0.01);
`;

export const Goals = styled.div`
  display: flex;
  gap: 12px;
`;

// display: flex;
// flex - direction: column;
//   @media (min-width: 834px) {
//     flex-direction: row;
//   }
//   @media (min-width: 1440px) {
//     gap: 80px;
//   }

export const Weight = styled.div`
  display: flex;
  gap: 12px;
`;

export const SvgWrapper = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${globalColor.colorPrimaryGreenLite};
`;

export const Title = styled.h2`
  color: ${globalColor.colorPrimaryWhite};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42857;
  margin: 0;
`;

export const TextWrapperGoal = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const TextWrapperWeight = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;
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

export const ControlPanelButton = styled.button`
  border: none;
  padding: 0;
  background: transparent;
`;
