import styled from 'styled-components';

export const RecommendedFood = styled.section`
  background-color: rgba(5, 5, 5, 1);
  color: rgba(255, 255, 255, 1);
  padding-top: 16px;
  padding-bottom: 40px;
  @media (min-width: 834px) {
    padding-top: 24px;
    padding-bottom: 290px;
  }
  @media (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 60px;
   
  }
`;
export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  font-style: sans-serif;
  line-height: 1.25;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const DesctopContainer = styled.div`
  padding-top: 16px;
  @media (min-width: 834px) {
    padding-top: 20px;
  }
  @media (min-width: 1440px) {
    padding-top: 0;
    display: flex;
    gap: 44px;
  }
`;

export const StyledImg = styled.img`
  height: 312px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 834px) {
    height: 396px;
    width: 380px;
  }
  @media (min-width: 1440px) {
    height: 560px;
    width: 536px;
    margin-right: 0;
    margin-left: 110px;
  }
`;

export const ProductsList = styled.div`
  @media (min-width: 320px) {
    padding-top: 24px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 834px) {
    width: 780px;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
  }
  @media (min-width: 1440px) {
    width: 680px;
    width: 780px;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
  }
`;
