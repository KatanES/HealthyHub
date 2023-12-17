import React from 'react';
import IllstrationDesctop from '../../../assets/Welcome/IllustrationDesctop.png'
// import { SignUpForm } from '../SignUpForm/SignUpForm';
import { NavLink } from 'react-router-dom';


const SignUpPage = () => {
  return (
    <div>
<img src={IllstrationDesctop} alt='The main picture a girl with a watch'/>
      <h1>Sign up</h1>
      <p>You need to register to use the service</p>
      <div>
       {/* <SignUpForm/> */}
       </div>
      <p>Do you already have an account?</p>
      <NavLink to="/signin">
        Sign in
      </NavLink>

    </div>
  );
};

export default SignUpPage;
