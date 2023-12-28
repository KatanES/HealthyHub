import styled from 'styled-components';

export const DashboardContainer = styled.div`
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

export const WeightContainerStyle = styled.div`
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    min-width: 1440px;
    margin-left: unset;
    margin-right: unset;

    justify-content: center;
    align-items: center;

    margin-top: 16px;
    margin-bottom: 20px;
  }
`;
