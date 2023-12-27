import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { globalColor } from '../../../components/Header/root';

export const MainContainer = styled.main`

  padding-top: 16px;
  padding-bottom: 16px;
  @media (min-width: 834px) {
    padding-top: 24px;
  }

  @media (min-width: 1440px) {
    padding-top: 27px;
   
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
export const MainTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin: 0;
  color: ${globalColor.colorPrimaryWhite};

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoalLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  color: ${globalColor.colorPrimaryGrey};
  @media (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Text = styled.p`
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  color: ${globalColor.colorPrimaryGrey};
`;

export const SVG = styled.svg`
  width: 16px;
  height: 16px;
  margin: 0 0 0 5px;
  @media (min-width: 834px) {
    margin: 0 15px 0 5px;
  }
`;

export const ElementsWrapper = styled.div`
  margin: 20px 0 0 0;
  @media (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (min-width: 1440px) {
    display: flex;
    column-gap: 20px;
  }
`;

export const TitelPage = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 19px;
  justify-content: space-between;
`;

export const DiaryAndRecommendFoodWrap = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    column-gap: 138px;
    margin: 20px ;
  }
`;

export const SectionDiary = styled.div`
  width: 300px;

  @media (min-width: 834px) {
    width: 558px;
    display: flex;
    gap: 20px;
  }

  @media (min-width: 1440px) {
    display: flex;
    margin-right: 220px;
  }
`;

