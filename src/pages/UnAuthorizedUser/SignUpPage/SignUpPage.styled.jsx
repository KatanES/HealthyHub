import styled from "styled-components";
import { device } from "../../../Device";
import { NavLink } from "react-router-dom";

export const SignUpContainer = styled.div`
width: 300px;
border: 2px solid red;
// padding: 10px;
// @media ${device.tablet} {
//   max-width: 794px;
//   padding: 20px;
// }

// @media ${device.desktop} {
//     max-width: 1376px;
//     padding: 32px;
//     display: flex;
//     gap: 104px;
//   }
// `;

export const WrapperImg = styled.div`
  width: 300px;
  margin: 0 0 24px 0;
  border: 2px solid red;

//   @media ${device.tablet} {
//     width: 380px;
//     margin: 0 auto;
//   }

//   @media ${device.desktop} {
//     width: 592px;
//   }`;

  export const SignUpImg = styled.img`
  width: 100%;
  height: auto;
`;


export const SignUpWrapper = styled.div`
  width: 100%;
  margin: 24px 0 0 0;
//   @media ${device.mobileS} {
//       min-width: 300px;
//     }

//   @media ${device.tablet} {
   
//     width: 444px;
//     margin: 80px auto 0 auto;
//     align-items: center;
//   }

//   @media ${device.desktop} {
//    width: 444px;
   
//   }`;

export const SignUpHeroTitle = styled.h1`
margin: 0;
font-size: 24px;
font-style: normal;
font-weight: 500;
  line-height: 1.25;
  

//   @media ${device.tablet} {
//     font-size: 30px;
//     font-style: normal;
//     // font-weight: 500;
//     line-height: 1.2;
   
//   }
`;

export const SignUpText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #b6b6b6;
  margin: 16px 0 0 0;

//   @media ${device.tablet} {
//     font-size: 22px;
//     line-height: 1.45;
//     text-align: center;
//     margin: 16px 45px 0 45px;
//   }
`;

export const SignUpFormWrapper = styled.div`
margin: 24px 0 0 0;
`;

export const SignUpQuestion = styled.p`
font-size: 14px;
line-height: 1.42;
color: #B6B6B6;
margin: 48px 0 0 0;
`;

export const SignUpNavLink = styled(NavLink)`
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 1.42;
color: #ffffff;
margin: 16px 0 0 0;
`;