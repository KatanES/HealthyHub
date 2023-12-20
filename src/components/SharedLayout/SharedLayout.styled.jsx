import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;


  @media screen and (min-width: 320px) {
    width: 300px;
    padding: 0 10px;
  }

  @media screen and (min-width: 834px) {
    width: 780px;
    padding: 0 27px;
    height: 100px;
  }

  @media screen and (min-width: 1440px) {
    width: 1372px;

    padding: 0 34px;
  }
`;
