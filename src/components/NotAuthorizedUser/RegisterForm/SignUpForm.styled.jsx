import { Field, Form, useFormikContext } from 'formik';
import styled from 'styled-components';

const StyledNotification = styled.p`
  font-size: 12px;
  color: #3cbc81;
  margin: 4px 10px 14px 10px;
`;

const PasswordNotification = ({ isSuccess }) => {
  return isSuccess ? (
    <StyledNotification>Password is secure</StyledNotification>
  ) : null;
};

export const FormWrapper = styled.div`
 width: 300px;
`
export const StyledForm = styled(Form)`
 width: 100%
`;


export const StyledField = ({ name, ...rest }) => {
  const formik = useFormikContext();

  return (
    <>
      <StyledInput
        {...formik.getFieldProps(name)}
        $hasError={formik.errors[name] && formik.touched[name]}
        $isSuccess={formik.touched[name] && formik.errors[name] === undefined}
        {...rest}
      />
      <PasswordNotification
        isSuccess={formik.touched[name] && formik.errors[name] === undefined}
      />
    </>
  );
};

const StyledInput = styled.input`
  width: -webkit-fill-available;
  padding: 8px 10px;
  margin-bottom: 20px;
  border: 1px solid
    ${({ $hasError, $isSuccess }) =>
      $hasError ? '#E74A3B' : $isSuccess ? '#3CBC81' : '#e3ffa8'};
  border-radius: 12px;
  background: transparent;
  font-size: 14px;
  color: #ffffff;

  &:focus,
  &:hover,
  &:active {
    background: transparent;
    outline: transparent;
  }

  &::placeholder {
    font-size: 14px;
    color: #b6b6b6;
  }
`;


export const ErrorMessageStyled = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 0px 10px 14px 10px;
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

