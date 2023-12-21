import { Formik, ErrorMessage } from 'formik';

import { useState } from 'react';

import { SignUpSchema } from '../YupSchemas/YupSchemas';
import symbol from '../../../assets/Welcome/symbol.svg';
import {
  WrapperImg,
  StyledForm,
  ErrorMessageStyled,
  StyledButton,
  SignUpContainer,
  SignUpImg,
  SignUpText,
  SignUpNavLink,
  SignUpFormWrapper,
  SignUpHeroTitle,
  SignUpWrapper,
  InputContainer,
  IconTextPosition,
  SignUpQuestion,
  InputText,
  SVG,
} from './SignUp.styled';
import IllstrationDesctop from '../../../assets/Welcome/IllustrationDesctop.png';

const SignUp = ({ goNext, setName, setEmail, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (values) => {
    try {
      await SignUpSchema.validate(values, { abortEarly: false });
      setName(values.name);
      setEmail(values.email.toLowerCase());
      setPassword(values.password);
      goNext();
    } catch (validationErrors) {
      console.log('Form validation errors:', validationErrors);
    }
  };


  // const validateForm = (formData) => {
  //   const errors = {};

  //   try {
  //     SignUpSchema.validateSync(formData, { abortEarly: false });
  //   } catch (validationErrors) {
  //     validationErrors.inner.forEach((error) => {
  //       errors[error.path] = error.message;
  //     });
  //   }

  //   const isValid = Object.keys(errors).length === 0;

  //   return { errors, isValid };
  // };
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
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
            
          >
            {({
              errors,
              touched,
              handleChange,
              handleBlur,
       
              isValid,
              values,
            }) => (
              <StyledForm autoComplete="off">
                <InputContainer
                  style={{
                    borderColor: touched.name
                      ? errors.name
                        ? '#E74A3B'
                        : '#3CBC81'
                      : '',
                  }}
                >
                  <InputText
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    style={{
                      borderColor: touched.name
                        ? errors.name
                          ? '#E74A3B'
                          : '#3CBC81'
                        : '',
                    }}
                    aria-label="Name Input"
                  />
                  <IconTextPosition
                    style={{
                      display: values.name ? 'block' : 'none',
                      position: 'absolute',
                      top: '-5%',
                      right: '10px',
                      transform: 'translateY(50%)',
                    }}
                  >
                    {errors.name && touched.name ? (
                      <SVG>
                        <use href={symbol + '#icon-error'} />
                      </SVG>
                    ) : (
                      <SVG>
                        <use href={symbol + '#icon-correct'} />
                      </SVG>
                    )}
                  </IconTextPosition>
                </InputContainer>
                <ErrorMessage name="name" component={ErrorMessageStyled} />

                <InputContainer
                  style={{
                    borderColor: touched.email
                      ? errors.email
                        ? '#E74A3B'
                        : '#3CBC81'
                      : '',
                  }}
                >
                  <InputText
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    style={{
                      borderColor: touched.email
                        ? errors.email
                          ? '#E74A3B'
                          : '#3CBC81'
                        : '',
                    }}
                    aria-label="Email Input"
                  />
                  <IconTextPosition
                    style={{
                      display: values.email ? 'block' : 'none',
                      position: 'absolute',
                      top: '-5%',
                      right: '10px',
                      transform: 'translateY(50%)',
                    }}
                  >
                    {errors.email && touched.email ? (
                      <SVG>
                        <use href={symbol + '#icon-error'} />
                      </SVG>
                    ) : (
                      <SVG>
                        <use href={symbol + '#icon-correct'} />
                      </SVG>
                    )}
                  </IconTextPosition>
                </InputContainer>
                <ErrorMessage name="email" component={ErrorMessageStyled} />

                <InputContainer
                  style={{
                    borderColor: touched.password
                      ? errors.password
                        ? '#E74A3B'
                        : '#3CBC81'
                      : '',
                  }}
                >
                  <InputText
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Password"
                    success="true"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    style={{
                      borderColor: touched.email
                        ? errors.email
                          ? '#E74A3B'
                          : '#3CBC81'
                        : '',
                    }}
                    aria-label="Height Input"
                  />

                  <IconTextPosition
                    style={{
                      display: values.password ? 'block' : 'none',
                      position: 'absolute',
                      top: '-5%',
                      right: '10px',
                      transform: 'translateY(50%)',
                    }}
                    onClick={handlePasswordVisibility}
                  >
                    {touched.password && (
                      <SVG>
                        {errors.password ? (
                          <use href={symbol + '#icon-error'} />
                        ) : (
                          <use href={symbol + '#icon-correct'} />
                        )}
                      </SVG>
                    )}
                    {showPassword ? (
                      <SVG>
                        <use href={symbol + '#icon-eye'} />
                      </SVG>
                    ) : (
                      <SVG>
                        <use href={symbol + '#icon-eye-off'} />
                      </SVG>
                    )}
                  </IconTextPosition>
                </InputContainer>

                {touched.password && values.password.length >= 8 && (
                  <div style={{ color: '#3CBC81', fontSize: '12px' }}>
                    Password is secure
                  </div>
                )}
                <ErrorMessage name="password" component={ErrorMessageStyled} />

                <StyledButton type="submit" disabled={!isValid}>
                  Next
                </StyledButton>
              </StyledForm>
            )}
          </Formik>
        </SignUpFormWrapper>
        <SignUpQuestion>Do you already have an account?</SignUpQuestion>
        <SignUpNavLink to="/signin">Sign in</SignUpNavLink>
      </SignUpWrapper>
    </SignUpContainer>
  );
};

export default SignUp;
