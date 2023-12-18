import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signup } from '../../../redux/auth/operations';
import { ImEyeBlocked, ImEye } from 'react-icons/im';
import {
  FormWrapper,
  StyledField,
  StyledForm,
  ErrorMessageStyled,
  StyledButton,
  SVG,
} from './SignUpForm.styled';
import { StyleSheetManager } from 'styled-components';
import sprite from '../../../assets/Welcome/symbol.svg';

const RegisterSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/,
      'Invalid name format'
    )
    .required('Name is required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),

  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required!'),
  password: Yup.string('Enter a valid Password*')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  return (
    <FormWrapper>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={({ ...values }, actions) => {
          dispatch(signup({ ...values }));
          actions.resetForm();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, isValid, values }) => (
          <StyledForm onSubmit={handleSubmit}>
            <StyledField
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <ErrorMessage name="name" component={ErrorMessageStyled} />
            <StyledField
              name="email"
              type="email"
              id="email"
              placeholder="E-mail"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="email" component={ErrorMessageStyled} />
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'success'}>
              <div style={{ position: 'relative' }}>
                <StyledField
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Password"
                  success={isValid}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '10px',
                    transform: 'translateY(80%)',
                    cursor: 'pointer',
                  }}
                  onClick={handlePasswordVisibility}
                >
                  {showPassword ? <ImEye /> : <ImEyeBlocked />}
                </span>
              </div>
              <ErrorMessage name="password" component={ErrorMessageStyled} />
            </StyleSheetManager>

            <StyledButton type="submit">Next</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};
