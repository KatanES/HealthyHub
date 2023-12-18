import React from 'react';
import IllstrationDesctop from '../../../assets/Welcome/IllustrationDesctop.png';
import { SignUpForm } from '../SignUpForm/SignUpForm';
import { NavLink } from 'react-router-dom';
import {
  SignUpContainer,
  SignUpHeroTitle,
  SignUpImg,
  SignUpWrapper,
  WrapperImg,
  SignUpText,
  SignUpFormWrapper,
  SignUpQuestion,
  SignUpNavLink
} from './SignUpPage.styled';

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <WrapperImg>
        <SignUpImg
          src={IllstrationDesctop}
          alt="The main picture a girl with a watch"
        />
      </WrapperImg>
      <SignUpWrapper>
        <SignUpHeroTitle>Sign up</SignUpHeroTitle>
        <SignUpText>You need to register to use the service</SignUpText>
        <SignUpFormWrapper>
          <SignUpForm />
        </SignUpFormWrapper>
        <SignUpQuestion>Do you already have an account?</SignUpQuestion>
        <SignUpNavLink to="/signin">Sign in</SignUpNavLink>
      </SignUpWrapper>
    </SignUpContainer>
  );
};

export default SignUpPage;
