import styled from 'styled-components';

export const SettingsTitle = styled.h2`
  margin-top: 16px;
  margin-bottom: 0;

  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media (min-width: 834px) {
    margin-bottom: 16px;

    font-size: 30px;
    line-height: 1.2;
    text-align: center;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const ContainerImg = styled.div`
  margin-top: 16px;

  width: 300px;

  @media (min-width: 834px) {
    margin: 40px auto 0 auto;

    width: 380px;
    height: 376px;
  }

  @media (min-width: 1440px) {
    margin-left: 116px;

    width: 592px;
    height: 588px;
  }
`;

export const SettingsImg = styled.img`
  width: 100%;
  height: auto;
`;
