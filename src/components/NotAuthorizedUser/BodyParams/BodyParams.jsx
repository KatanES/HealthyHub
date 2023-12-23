import React from 'react';

import { Formik, Form, ErrorMessage } from 'formik';

import { BodyParamsSchema } from '../YupSchemas/YupSchemas';

import IllustrutonBody from '../../../assets/Welcome/IllustrationBody.png';
import symbol from '../../../assets/Welcome/symbol.svg';
import { BodyContainer, BodyParamslImg, BodyText, BodyTitle, BodyWrapper, ErrorMessageStyled, IconTextPosition, InputContainer, InputText, SVG, Text, WrapperImg, ButtonWrapper, StyledButton } from './BodyParams.styled';

const BodyParams = ({
  goNext,
  goBack,
  setWeight,
  setHeight,
  dataHeight,
  dataWeight,
}) => {
  const handleSubmit = (values) => {
    const { height, weight } = values;
    setHeight(height);
    setWeight(weight);
    goNext();
  };



  return (
    <BodyContainer>
      <WrapperImg>
        <BodyParamslImg src={IllustrutonBody} alt="Body parameters" />
      </WrapperImg>
      <BodyWrapper>
        <BodyTitle>Body parameters</BodyTitle>
        <Text>Enter your parameters for correct performance tracking</Text>
    
          <Formik
            initialValues={{
              height: dataHeight ?? '',
              weight: dataWeight ?? '',
            }}
            validationSchema={BodyParamsSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form autoComplete="off">
                <BodyText>Height</BodyText>
                <InputContainer
                  style={{
                    borderColor: touched.height
                      ? errors.height
                        ? '#E74A3B'
                        : '#3CBC81'
                      : '',
                  }}
                >
                  <InputText
                    type="number"
                    id="height"
                    name="height"
                    placeholder="Enter your height"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.height}
                    style={{
                      borderColor: touched.height
                        ? errors.height
                          ? '#E74A3B'
                          : '#3CBC81'
                        : '',
                    }}
                    aria-label="Height Input"
                  />
                  <IconTextPosition
                    style={{
                      display: values.height ? 'block' : 'none',
                      position: 'absolute',
                      top: '-5%',
                      right: '10px',
                      transform: 'translateY(50%)',
                    }}
                  >
                    {errors.height && touched.height ? (
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

                <BodyText>Weight</BodyText>
                <InputContainer
                  style={{
                    borderColor: touched.weight
                      ? errors.weight
                        ? '#E74A3B'
                        : '#3CBC81'
                      : '',
                  }}
                >
                  <InputText
                    type="number"
                    id="weight"
                    name="weight"
                    placeholder="Enter your weight"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.weight}
                    style={{
                      borderColor: touched.weight
                        ? errors.weight
                          ? '#E74A3B'
                          : '#3CBC81'
                        : '',
                    }}
                    aria-label="Weight Input"
                  />
                  <IconTextPosition
                    style={{
                      display: values.weight ? 'block' : 'none',
                      position: 'absolute',
                      top: '-5%',
                      right: '10px',
                      transform: 'translateY(50%)',
                    }}
                  >
                    {errors.weight && touched.weight ? (
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
<ButtonWrapper>
  <StyledButton type="submit">Next</StyledButton>
                <StyledButton type="button" onClick={goBack}>
                  Back
                </StyledButton>
</ButtonWrapper>
                
              </Form>
            )}
          </Formik>
      
      </BodyWrapper>
    </BodyContainer>
  );
};
export default BodyParams;
