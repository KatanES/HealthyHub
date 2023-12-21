import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { useEffect } from 'react';

import { AgeAndGenderSchema } from '../YupSchemas/YupSchemas';

import IllustrutonGender from '../../../assets/Welcome/IllustrationGender.png';
import symbol from '../../../assets/Welcome/symbol.svg';
import { ErrorMessageStyled } from './SelectAgeAndGender.styled';

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
    <div>
      <div>
        <img src={IllustrutonGender} alt="Healthy life style" />
      </div>
      <div>
        <h2>Select gender, Age</h2>
        <p>Choose a goal so that we can help you effectively</p>
        <div>
          <Formik
            initialValues={{
              gender: dataGender,
              age: dataAge,
            }}
            validationSchema={AgeAndGenderSchema}
            onSubmit={ handleSubmit}
          >
            {({
              errors,
              touched,
              handleChange,
              handleBlur,
              values,
            }) => (
              <Form autoComplete="off">
                <div id="ageAndGenderGroup">Gender</div>
                <div role="group" aria-labelledby="ageAndGenderGroup">
                  <label>
                    <Field type="radio" name="gender" value=" Male" required />
                    Male
                  </label>
                  <label>
                    <Field type="radio" name="gender" value="Female" required />
                    Female
                  </label>
                </div>
                <p>Your age</p>
                <div
                  style={{
                    borderColor: touched.age
                      ? errors.age
                        ? '#E74A3B'
                        : '#3CBC81'
                      : '',
                  }}
                >
                  <input
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
                  <div
                    style={{
                      display: values.age ? 'block' : 'none',
                      position: 'absolute',
                      top: '-5%',
                      right: '10px',
                      transform: 'translateY(50%)',
                    }}
                  >
                    {errors.age && touched.age ? (
                      <svg>
                        <use href={symbol + '#icon-error'} />
                      </svg>
                    ) : (
                      <svg>
                        <use href={symbol + '#icon-correct'} />
                      </svg>
                    )}
                  </div>
                </div>
                <ErrorMessage name="name" component={ErrorMessageStyled} />

                <button type="submit">Next</button>
                <button type="button" onClick={goBack}>Back</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default SelectAgeAndGender;
