import styled from 'styled-components';
import { device } from '../../../Device';

export const WelcomeContainer = styled.div`
border: 2px solid red;
padding: 10px;
@media ${device.tablet} { 
  max-width: 1200px;
  padding: 20px;
}

@media ${device.desktop} {
  max-width: 1376px;
  padding: 32px;
}

`;

export const HeroImg = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  text-align: start;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 40px;
  //   box-sizing: border-box;
  max-width: 300px;
  border: 2px solid red;
  
//   @media ${device.mobileS} { 
//   min-width: 300px;
  
// }


// @media ${device.tablet} { 
//  max-width: 1200px;
// }

// @media ${device.desktop} {
//   max-width: 1440px;
// }
`;

export const HeroTitle = styled.h1`
  font-size: 24px;

  margin: 0;
  line-height: 1.25;
  letter-spacing: -0.02em;
`;

export const HeroText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #b6b6b6;
  margin-top: 16px;
`;

export const WrapperButtons = styled.div`
  display: flex;

  gap: 16px;
  margin-top: 24px;
`;

export const Button = styled.button`
  width: 142px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: #e3ffa8;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  border: none;
  color: #0f0f0f;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: transparent;

    color: #ffffff;
  }

  &:active {
    background-color: transparent;

    color: #ffffff;
  }
`;

export const HeroList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
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
  margin: 0 0 0 8px;
`;

export const WrapperImg = styled.div`
  max-width: 300px;
  border: 2px solid red;
`;
