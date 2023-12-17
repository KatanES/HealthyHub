import styled from 'styled-components';

import { globalColor } from './root';

export const HeaderContainer = styled.div`
  background-color: ${globalColor.colorPrimaryBlack2};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 60px;

  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 0 10px;
  }

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 0 27px;
    height: 100px;
  }

  @media screen and (min-width: 1140px) {
    width: 1440px;
    padding: 0 34px;
  }
`;


