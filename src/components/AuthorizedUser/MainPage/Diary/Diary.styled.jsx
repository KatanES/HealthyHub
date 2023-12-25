import styled from 'styled-components';

export const SectionDiary = styled.div`
  max-width: 320px;
  padding: 10px;

  @media (min-width: 768px) {
    max-width: 558px;
    padding: 27px;
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
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 558px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 20px;
  }

  @media (min-width: 1200px) {
    max-width: 558px;
    row-gap: 28px;
  }
`;
