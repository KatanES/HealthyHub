import styled from 'styled-components';

export const SectionDiary = styled.div`
  border: 2px solid white;
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

export const TitelDiary = styled.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
`;

export const TextDiary = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const ItemTitelDiary = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 22px;
`;

export const ItemDiary = styled.div`
  border: 2px solid white;
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 184px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
  }

  @media (min-width: 1200px) {
    max-width: 558px;
    row-gap: 28px;
  }
`;
