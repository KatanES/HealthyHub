import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  @media screen and (min-width: 300px) {
    max-width: 320px;
    padding: 0 10px;
  }

  @media screen and (min-width: 780px) {
    max-width: 834px;
    padding: 0 27px;
  }
  
  @media screen and (min-width: 1372px) {
    max-width: 1440px;
    padding: 0 34px;
  }
`;
