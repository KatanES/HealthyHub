import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { forgotPassword } from '../../../redux/auth/operations';
import IllstrationDesctop from '../../../assets/Welcome/IllustrationDesctop.png';
import symbol from '../../../assets/Welcome/symbol.svg';
import {
  ForgotPassContainer,
  PassImg,
  PassTitle,
  PassWrapper,
  StyledForm,
  InputContainer,
  InputText,
  IconTextPosition,
  ErrorMessageStyled,
  StyledButton,
  WrapperImg,
  PassText,
  SVG,
  PassNavigateWrapper,
  PassQuestion,
  PassNavLink
} from './ForgotPasswordPage.styled';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log('Email sent to backend:', values.email);
    dispatch(forgotPassword({ email: values.email }));
    navigate('/signin');
  };

  return (
    <ForgotPassContainer>
      <WrapperImg>
        <PassImg
          src={IllstrationDesctop}
          alt="The main picture a girl with a watch"
        />
      </WrapperImg>
      <PassWrapper>
        <PassTitle>Forgot your password</PassTitle>
        <PassText>We will send you an email with recovery instructions</PassText>

        <Formik
          initialValues={{ email: '' }}
          validationSchema={SignUpSchema}
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
              <StyledButton type="submit" disabled={!isValid}>
                Send
              </StyledButton>
            </StyledForm>
          )}
        </Formik>
        <PassNavigateWrapper>
          <PassQuestion>Do you already have an account?</PassQuestion>
          <PassNavLink to="/signin">Sign in</PassNavLink>
        </PassNavigateWrapper>
      </PassWrapper>
    </ForgotPassContainer>
  );
};

export default ForgotPassword;
