import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { useEffect } from 'react';

import { AgeAndGenderSchema } from '../YupSchemas/YupSchemas';

import IllustrutonGender from '../../../assets/Welcome/IllustrationGender.png';
import symbol from '../../../assets/Welcome/symbol.svg';
import {
  AgeAndGenderlImg,
  AgeContainer,
  Text,
  AgeTitle,
  AgeWrapper,
  GenderField,
  GenderLabel,
  GenderText,
  GenderRadio,
  WrapperImg,
  AgeText,
  InputContainer,
  InputText,
  IconTextPosition,
  SVG,
  ButtonWrapper,
  StyledButton,
} from './SelectAgeAndGender.styled';

import { ErrorMessageStyled } from '../SignUp/SignUp.styled';

const SelectAgeAndGender = ({
  goNext,
  goBack,
  setAge,
  setGender,
  dataGender,
  dataAge,
}) => {
  useEffect(() => {
    const selectorString = 'input[type="radio"][value="' + dataGender + '"]';
    const checkedButton = document.querySelector(selectorString);
    if (!checkedButton) {
      return;
    }
    checkedButton.checked = true;
  }, [dataGender]);

  const handleSubmit = (values) => {
    const { age, gender } = values;
    setAge(age);
    setGender(gender.toLowerCase());
    goNext();
  };

  return (
    <AgeContainer>
      <WrapperImg>
        <AgeAndGenderlImg src={IllustrutonGender} alt="Healthy life style" />
      </WrapperImg>
      <AgeWrapper>
        <AgeTitle>Select gender, Age</AgeTitle>
        <Text>Choose a goal so that we can help you effectively</Text>
    
          <Formik
            initialValues={{
              gender: dataGender,
              age: dataAge,
            }}
            validationSchema={AgeAndGenderSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form autoComplete="off">
                <GenderText id="ageAndGenderGroup">Gender</GenderText>
                <GenderRadio role="group" aria-labelledby="ageAndGenderGroup">
                  
                  <GenderLabel>
                    <GenderField type="radio" name="gender" value="Male" required />
                    Male
                  </GenderLabel>
                  <GenderLabel>
                    <GenderField type="radio" name="gender" value="Female" required />
                    Female
                  </GenderLabel>
                </GenderRadio>
                <div>
                   <AgeText>Your age</AgeText>
                <InputContainer
                  style={{
                    borderColor: touched.age
                      ? errors.age
                        ? '#E74A3B'
                        : '#3CBC81'
                      : '',
                  }}
                >
                  <InputText
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Enter your age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    style={{
                      borderColor: touched.age
                        ? errors.age
                          ? '#E74A3B'
                          : '#3CBC81'
                        : '',
                    }}
                    aria-label="Age Input"
                  />
                  <IconTextPosition
                    style={{
                      display: values.age ? 'block' : 'none',
                      position: 'absolute',
                      top: '-5%',
                      right: '10px',
                      transform: 'translateY(50%)',
                    }}
                  >
                    {errors.age && touched.age ? (
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
                </div>
               
<ButtonWrapper>
   <StyledButton type="submit">Next</StyledButton>
                <StyledButton type="button" onClick={goBack}>
                  Back
                </StyledButton>
</ButtonWrapper>
               
              </Form>
            )}
          </Formik>
      
      </AgeWrapper>
    </AgeContainer>
  );
};
export default SelectAgeAndGender;
