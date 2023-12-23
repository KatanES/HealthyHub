import styled from 'styled-components';
import { globalColor } from '../../../components/Header/root';

export const WelcomeContainer = styled.div`
  padding: 24px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: 834px) {
    padding: 40px 0;
    width: 780px;
    gap: 80px;
  }

  @media (min-width: 1440px) {
    width: 1372px;
    gap: 104px;
    flex-direction: row;
    justify-content: center;
  }
`;

export const WrapperImg = styled.div`
  width: 100%;
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  height: auto;
`;

export const Wrapper = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    max-width: 444px;

    align-items: center;
  }

  @media (min-width: 1440px) {
    align-items: start;
  }
`;

export const HeroTitle = styled.h1`
  color: ${globalColor.colorPrimaryWhite};
  margin: 0 0 16px 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.02em;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    letter-spacing: 0.01em;
    margin-bottom: 16px;
  }
`;

export const HeroText = styled.p`
  font-size: 18px;
  line-height: 1.33;
  color: ${globalColor.colorPrimaryGrey};
  margin: 0 0 24px 0;
  max-width: 352px;

  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;

    text-align: center;
  }

  @media (min-width: 1440px) {
    text-align: start;
  }
`;

export const HeroList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: column;
  }
`;

export const HeroItem = styled.li`
  display: flex;
  align-items: center;
`;

export const SvgWrapper = styled.svg`
  width: 8px;
  height: 8px;
  margin-right: 8px;
`;

export const HeroItemText = styled.p`
  font-size: 14px;
  line-height: 1.42857;
  margin: 0;
  color: ${globalColor.colorPrimaryWhite};
`;
