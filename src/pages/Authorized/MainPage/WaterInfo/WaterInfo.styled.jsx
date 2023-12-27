import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { ReactComponent as Icon } from '../../../../assets/icons/add.svg';
import { globalColor } from '../../../../components/Header/root';

const animate = keyframes` 
    0% {
        transform: translateY(0%);
        opacity: 1;
    }
    100% {
        transform: translateY(-1400%);
        opacity: 1;
    }
  `;

export const WaterTitle = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;
  color: ${globalColor.colorPrimaryWhite};
  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const WaterInfoCard = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 276px;
  height: 224px;
  border-radius: 12px;
  position: relative;
  background-color: ${globalColor.colorPrimaryBlack2};
  margin-bottom: 20px;

  @media (min-width: 834px) {
    width: 356px;
    height: 208px;

    column-gap: 40px;
  }

  @media (min-width: 1440px) {
    width: 404px;
height: 192px;
    padding: 24px 40px;
  }
`;

export const Level = styled.div`
  position: relative;
  width: 80px;
  height: 178px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: rgba(5, 5, 5, 1);
  padding: 7px;
`;

export const WaterPercentage = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({ $offset }) => $offset}px);
  color: ${({ $percentColor }) => $percentColor};
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;

export const WaterBar = styled.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;

  span {
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 3px rgba(255, 196, 247, 1);
    animation: ${animate} 4s linear infinite;

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      transform: scale(0.25) translate(-60%, -60%);
      background: radial-gradient(#fff, transparent);
      border-radius: 50%;
    }
  }
`;

export const InfoWrapper = styled.div`
  width: 166px;
  height: 148px;

  @media (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`;

export const InfoTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 12px;
  color: ${globalColor.colorPrimaryWhite};

  @media (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ValueWrap = styled.div`
  @media (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`;

export const InfoNumber = styled.p`
  display: flex;
  align-items: center;

  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  margin-bottom: 8px;
  color: ${globalColor.colorPrimaryWhite};
  @media (min-width: 834px) {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 0px;
  }
`;

export const Unit = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
  color: ${globalColor.colorPrimaryGrey};
`;

export const LeftInfo = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 16px;
  color: ${globalColor.colorPrimaryWhite};

  @media (min-width: 834px) {
    margin-bottom: 0px;
  }
`;

export const LeftNumber = styled.span`
  font-weight: 500;
  margin-left: 4px;
  color: ${globalColor.colorPrimaryGrey};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  border: none;
  border-radius: 12px;
  // width: 100%;
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

export const AddIcon = styled(Icon)`
  stroke: ${globalColor.colorPrimaryBlack2};
`;

export const SVG = styled.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const DelButton = styled.button`
  position: absolute;
  right: 12px;
  top: 0;
  width: 24px;
  height: 24px;
  transform: translateY(50%);
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;

  @media (min-width: 834px) {
    right: 24px;
    top: 24px;
  }
`;
