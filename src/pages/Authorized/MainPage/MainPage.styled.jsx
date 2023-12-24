import styled from 'styled-components';

export const Container = styled.div`
  /* border: 2px solid white; */
  max-width: 320px;
  padding: 10px;
  /* display: flex;
  gap: 19px; */

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 27px;
  }

  @media (min-width: 1200px) {
    max-width: 1480px;
    padding: 34px;
  }
`;

export const SVG = styled.svg`
  text-align: right;
  width: 16px;
  height: 16px;
`;

export const TitelPage = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 19px;
  justify-content: space-between;
`;

export const TitelFlex = styled.div`
  display: flex;
`;

export const SectionDiary = styled.div`
  /* border: 2px solid white; */
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 558px;
    padding: 10;
    display: flex;
    gap: 20px;
  }

  @media (min-width: 1200px) {
    max-width: 558px;
    padding: 10px;
    display: flex;
  }
`;

export const Text = styled.p`
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
`;

export const Titel = styled.h2`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
`;
export const DiaryAndRecommendFoodWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 138px;
    margin-right: 0;
  }
`;
