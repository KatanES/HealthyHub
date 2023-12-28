import styled from 'styled-components';
import { globalColor } from '../../../../components/Header/root';

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;
  color: ${globalColor.colorPrimaryWhite};

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const DailyInfoCard = styled.div`
  box-sizing: border-box;
  padding: 16px 12px;
  width: 300px;
  height: 212px;
  border-radius: 12px;
  background-color: ${globalColor.colorPrimaryBlack2};
  margin-bottom: 20px;

 @media (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
  }

  @media (min-width: 1440px) {
    width: 328px;
  }
`;

export const InfoCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 180px;
  gap: 20px;

  @media (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoTitle = styled.p`
  color: ${globalColor.colorPrimaryGrey};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 4px;
  margin: 0;
`;

export const InfoNumber = styled.p`
  display: flex;
  align-items: center;
  color: ${globalColor.colorPrimaryWhite};
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin: 0;
`;

export const Unit = styled.span`
  color: ${globalColor.colorPrimaryGrey};
  font-size: 14px;
  font-style: normal;
  font-family: inherit;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`;
