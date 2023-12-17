import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  @media screen and (min-width: 300px) {
    max-width: 320px;
    padding: 0 10px;
  }

  @media screen and (min-width: 768px) {
    max-width: 834px;
    padding: 0 32px;
    padding: 32px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1440px;
    padding: 0 10px;
  }
`;
