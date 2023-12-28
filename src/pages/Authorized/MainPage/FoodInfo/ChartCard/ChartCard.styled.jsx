import styled from 'styled-components';
import { globalColor } from '../../../../../components/Header/root';

export const ChartWrapper = styled.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const ChartElement = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
`;

export const Percentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${globalColor.colorPrimaryGrey};
  font-size: 14px;
  font-weight: 400;
`;
export const PerValue = styled.p`
margin: 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ElementsTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height:1.33;
  margin: 0 2px 0 0;
  color: ${globalColor.colorPrimaryWhite};
`;

export const ValueWrap = styled.div`
  display: flex;
  align-items: center;

`;

export const Value = styled.span`
  font-weight: 500;
  color: ${globalColor.colorPrimaryGrey};
`;

export const GoalWrap = styled.p`
  width: 78px;
  margin: 0;
`;

export const LeftValue = styled.p`
  margin: 0;
  
`;
