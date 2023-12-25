import styled from '@emotion/styled';
import { globalColor } from '../../../components/Header/root';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-top: 34px;

  @media screen and (min-width: 834px) {
    margin-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
    flex-direction: row;
    gap: 20px;
  }
`;

export const GraphContainer = styled.div`
  gap: 27px;
  margin-bottom: 27px;

  @media screen and (min-width: 834px) {
    gap: 40px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const GraphicHeader = styled.div`
  display: flex;

  align-items: center;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    justify-content: left;
    gap: 40px;
  }
`;
export const GraphicTitle = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 144.44%;
  color: ${globalColor.colorPrimaryWhite};

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 145.5%;
  }
`;

export const Avarage = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 143%;
  color: ${globalColor.colorPrimaryWhite};
`;

export const ScrollWrap = styled.div`
  @media screen and (max-width: 833px) {
    width: 310px;
    padding-bottom: 8px;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      height: 8px;
      width: 94px;

      background-color: ${globalColor.colorPrimaryBlack2};
      border-radius: 12px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
    }
  }
`;

export const GraphicBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 780px;
  height: 382px;
  background-color: ${globalColor.colorPrimaryBlack2};
  border-radius: 12px;

  @media screen and (min-width: 1440px) {
    width: 676px;
    height: 382px;
  }
`;
