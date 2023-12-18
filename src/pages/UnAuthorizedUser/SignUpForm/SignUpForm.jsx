import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signup } from '../../../redux/auth/operations';
import { ImEyeBlocked, ImEye } from 'react-icons/im';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  backgroundColor: ' #e3ffa8',

  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#1E3535',
    color: '#ffffff',
  },
  '&:active': {
    backgroundColor: '#1E3535',
    color: '#ffffff',
  },
});

const RegisterSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required!'),
  password: Yup.string('Enter your password')
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
      {({ handleSubmit }) => (
        <form
          style={{ width: '300px', margin: '0 auto', textAlign: 'center' }}
          onSubmit={handleSubmit}
        >
          <Field name="name">
            {({ field, form: { touched, errors } }) => (
              <TextField
                style={{
                  boxShadow: '6px 6px 6px 0px rgba(0,0,0,0.55)',
                }}
                {...field}
                label="Name"
                variant="outlined"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                fullWidth
                margin="normal"
                autoComplete="off"
                size="small"
              />
            )}
          </Field>

          <Field name="email">
            {({ field, form: { touched, errors } }) => (
              <TextField
                style={{
                  boxShadow: '6px 6px 6px 0px rgba(0,0,0,0.55)',
                }}
                {...field}
                label="Email"
                variant="outlined"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
                margin="normal"
                autoComplete="off"
                size="small"
              />
            )}
          </Field>

          <Field name="password">
            {({ field, form: { touched, errors } }) => (
              <TextField
                style={{
                  boxShadow: '6px 6px 6px 0px rgba(0,0,0,0.55)',
                }}
                {...field}
                type={showPassword ? 'text' : 'password'}
                label="Password"
                variant="outlined"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                fullWidth
                margin="normal"
                size="small"
                autoComplete="off"
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibility}>
                        {showPassword ? <ImEye /> : <ImEyeBlocked />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </Field>

          <StyledButton type="submit" variant="contained" fullWidth>
            Next
          </StyledButton>
        </form>
      )}
    </Formik>
  );
};
