import styled from 'styled-components';
import { globalColor } from '../../../components/Header/root';

export const WelcomeContainer = styled.div`
  width: 300px;
  @media (min-width: 834px) {
    width: 780px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1440px) {
    width: 1372px;
    display: flex;

    flex-direction: row;
    align-items: flex-start;
  }
`;
export const WrapperImg = styled.div`
  width: 300px;
  margin: 40px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin: 40px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-left: 116px;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  height: auto;
`;

export const Wrapper = styled.div`
width: 300px;
margin: 24px auto 0 auto;
@media (min-width: 834px) {
  width: 380px;
  margin: 60px auto 0 auto;
}
@media (min-width: 1440px) {
  width: 444px;
  margin: 120px auto 0 auto;
}
`;

export const HeroTitle = styled.h1`
margin: 0;
font-size: 24px;
font-weight: 500;
line-height: 1.25;
letter-spacing: 0.02em;
@media (min-width: 834px) {
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: 0.01em;
  text-align: center;
  margin-bottom: 16px;

}
 @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const HeroText = styled.p`
font-size: 18px;
line-height: 1.33;
color: ${globalColor.colorPrimaryGrey};
margin: 16px 0 0 0;
@media (min-width: 834px) {
  font-size: 22px;
  line-height: 1.45;
  text-align: center;
}
@media (min-width: 1440px) {
    text-align: left;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

export const Button = styled.button`
  width: 142px;
  height: 36px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  border: none;
  border-radius: 12px;
  text-transform: none;
  padding: 8px 10px;

  background-color: ${globalColor.colorPrimaryGreenLite};
  color: ${globalColor.colorPrimaryBlack2};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: transparent;
    color: ${globalColor.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${globalColor.colorPrimaryWhite};
  }
  @media (min-width: 834px) {
    width: 212px;
  }
`;

export const HeroList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  > li:last-of-type {
    margin-bottom: 40px;
  }
  @media (min-width: 834px) {
    margin-top: 80px;
    margin-bottom: 286px;
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
  flex-direction: row;
  margin-top: 16px;
`;

export const SVG = styled.svg`
  width: 8px;
  height: 8px;
  margin-top: 4px;
`;

export const HeroItemText = styled.p`
font-size: 14px;
line-height: 1.42;
  margin: 0 0 0 8px;
`;
