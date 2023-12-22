// import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  /* display: flex; */
  border: 2px solid;
  border-color: blue;
  width: auto;
  height: auto;
  border: 1px solid black;
  margin: 10px;

  @media screen and (min-width: 320px) {
    overflow-x: auto;
  }
  @media screen and (min-width: 834px) {
    width: 780px;

    @media screen and (min-width: 1440px) {
      width: 1372px;
    }
  }
`;

export const CaloriesGraph = styled.div`
  min-width: 676px;
  min-height: 382px;
  border: 1px solid white;
  margin: 10px;
  /* overflow-x: auto; */

  /* @media screen and (min-width: 320px) {
    width: 676px;
    height: 382px;
  } */
`;

export const WaterGraph = styled.div`
  min-width: 676px;
  min-height: 382px;
  border: 1px solid white;
  margin: 10px;
`;
