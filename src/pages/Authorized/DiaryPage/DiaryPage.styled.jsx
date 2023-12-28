import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  padding: 10px;

  @media (min-width: 768px) {
   width: 768px;
   
  }

  @media (min-width: 1200px) {
    max-width: 1480px;
    padding: 34px;
  }
`;

export const SVG = styled.svg`
  width: 16px;
  height: 16px;
`;

export const TitelPage = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 19px;
`;

export const SectionDiaryPage = styled.div`
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 27px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (min-width: 1200px) {
    max-width: 1460px;
    padding: 34px;
    /* display: flex;
    flex-wrap: wrap; */
    gap: 20px;
    flex-basis: calc((100% - 20px) / 2);
  }
`;
