import { Field, Form,  } from 'formik';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SignUpContainer = styled.div`
  width: 300px;
`;

export const WrapperImg = styled.div`
  width: 300px;
  margin: 0 0 24px 0;
  // border: 2px solid red;
`;

export const SignUpImg = styled.img`
  width: 100%;
  height: auto;
`;

export const SignUpWrapper = styled.div`
  width: 300px;
`;


export const SignUpHeroTitle = styled.h2`
margin: 0;
font-size: 24px;
font-style: normal;
font-weight: 500;
  line-height: 1.25;`;

  export const SignUpText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #b6b6b6;
  margin: 16px 0 0 0;
  `;

  export const SignUpFormWrapper = styled.div`
margin: 24px 0 0 0;
`;

export const StyledNotification = styled.p`
  font-size: 12px;
  color: #3cbc81;
  margin: 0 10px 0 0;
`;

export const StyledForm = styled(Form)`
display: flex;
gap: 20px;
flex-direction: column;
`;

export const InputContainer = styled.div`
background: transparent;
position: relative;


`;

export const InputText = styled.input`
width: -webkit-fill-available;
  padding: 8px 10px;
 
 
  border: 1px solid #E3FFA8;
  border-radius: 12px;
  border-radius: 12px;
  background: transparent;
  font-size: 14px;
  color: #ffffff;

  &:focus,
  &:hover,
  &:active {
    background: transparent;
    outline:  none;
    
  }

  &::placeholder {
    font-size: 14px;
    color: #b6b6b6;
  }
`;

export const IconTextPosition = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
`;


export const ErrorMessageStyled = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 0px 10px 0 0;
  color: #e74a3b;
`;

export const StyledButton = styled.button`
font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  border: none;
  border-radius: 12px;
  width: 100%;
  text-transform: none;
  padding: 8px 10px;
  background-color: #e3ffa8;
  color: #0f0f0f;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover: {
    backgroundColor: transparent,
    color: #ffffff,
  };
  &:active: {
    backgroundColor: transparent,
    color: #ffffff,
  };
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
export const SVG = styled.svg`
  width: 16px;
  height: 16px;
  margin:0 4px 0 0;
`;