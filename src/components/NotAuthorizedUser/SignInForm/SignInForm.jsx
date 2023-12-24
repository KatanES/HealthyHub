import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { signin } from '../../../redux/auth/operations';
import { SignInSchema } from '../YupSchemas/YupSchemas';
import IllstrationDesctop from '../../../assets/Welcome/IllustrationDesctop.png';
import symbol from '../../../assets/Welcome/symbol.svg';

import {
  WrapperImg,
  StyledForm,
  ErrorMessageStyled,
  StyledButton,
  InputContainer,
  IconTextPosition,
  InputText,
  SVG,
  SignInContainer,
  SignInWrapper,
  SignInImg,
  SignInTitle,
  SignInText,
  SignInNavigateWrapper,
  SignInQuestion,
  SignInNavLink,
  ForgotNavLink,
  QuestionWrapper,
} from '../../../components/NotAuthorizedUser/SignInForm/SignInForm.styled';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (values) => {
    try {
      await SignInSchema.validate(values, { abortEarly: false });
      dispatch(
        signin({
          email: values.email,
          password: values.password,
        })
      );
      console.log('Form sent');
    } catch (validationErrors) {
      console.log('Form validation errors:', validationErrors);
    }
  };

  return (
    <SignInContainer>
      <WrapperImg>
        <SignInImg
          src={IllstrationDesctop}
          alt="The main picture a girl with a watch"
        />
      </WrapperImg>
      <SignInWrapper>
        <SignInTitle>Sign in</SignInTitle>
        <SignInText>You need to login to use the service</SignInText>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, isValid, values }) => (
            <StyledForm autoComplete="off">
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
                    borderColor: touched.password
                      ? errors.password
                        ? '#E74A3B'
                        : '#3CBC81'
                      : '',
                  }}
                  aria-label="Password Input"
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
                Sign in
              </StyledButton>
            </StyledForm>
          )}
        </Formik>
        <SignInNavigateWrapper>
          <ForgotNavLink to="/forgot-password">
            Forgot your password?
          </ForgotNavLink>{' '}
        </SignInNavigateWrapper>
        <QuestionWrapper>
          <SignInQuestion>If you don't have an account yet</SignInQuestion>
          <SignInNavLink to="/signup">Sign up</SignInNavLink>
        </QuestionWrapper>
      </SignInWrapper>
    </SignInContainer>
  );
};

export default SignInForm;
