import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 10px;
  overflow-y: auto;

  @media (min-width: 834px) {
    margin-left: unset;
    overflow-y: unset;
  }

  @media (min-width: 1440px) {
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 9px;

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;

export const CaloriesTitle = styled.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: var(--color-primary-white);
  margin-right: 40px;
`;

export const CaloriesDesc = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-white);
`;

export const ChartsContainer = styled.div`
  display: flex;
  min-width: 676px;
  width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  @media (min-width: 834px) {
    min-width: 780px;
    overflow-x: unset;
    overflow-y: unset;
  }

  @media (min-width: 1440px) {
    min-width: 676px;
  }
`;
