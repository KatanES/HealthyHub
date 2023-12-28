import styled from 'styled-components';
import { globalColor } from '../../../Header/root';

export const SectionDiary = styled.div`
 width: 300px;

  @media (min-width: 834px) {
    max-width: 558px;
    padding: 27px;
  }
`;

export const ItemTitelDiary = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

`;
export const TitelDiary = styled.h2`
  font-size: 18px;
  line-height: 1.4;
 
`;

export const TextDiary = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  color: ${globalColor.colorPrimaryGrey};
  text-align: center;
`;



export const ItemDiary = styled.div`
  width: 300px;

  @media (min-width: 834px) {
    max-width: 558px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 20px;
  }

  @media (min-width: 1440px) {
    max-width: 558px;
    row-gap: 28px;
  }
`;
