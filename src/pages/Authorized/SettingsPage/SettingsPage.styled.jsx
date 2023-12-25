import styled from 'styled-components';

export const ContainerSetting = styled.div`
  padding-bottom: 40px;

  @media (min-width: 834px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-bottom: 174px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 160px;

    margin-left: 116px;
    padding-bottom: 72px;

    width: 1181px;
  }
`;

export const SettingsTitle = styled.h2`
  margin: 16px 0;

  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media (min-width: 834px) {
    margin-top: 24px;
    margin-bottom: 20px;

    width: 200px;

    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
    margin-bottom: 24px;
  }
`;

export const ContainerImg = styled.div`
  width: 300px;

  @media (min-width: 834px) {
    margin: 0 auto;

    width: 380px;
    height: 374px;
  }

  @media (min-width: 1440px) {
    width: 536px;
    height: 528px;
  }
`;

export const SettingsImg = styled.img`
  width: 100%;
  height: auto;
`;
