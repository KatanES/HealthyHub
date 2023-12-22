import React from 'react';

import { Formik, Form, ErrorMessage } from 'formik';

import { BodyParamsSchema } from '../YupSchemas/YupSchemas';

import IllustrutonBody from '../../../assets/Welcome/IllustrationGender.png';
import symbol from '../../../assets/Welcome/symbol.svg';
import { ErrorMessageStyled } from './BodyParams.styled';

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
    <div>
      <div>
        <img src={IllustrutonBody} alt="Body parameters" />
      </div>
      <div>
        <h2>Body parameters</h2>
        <p>Enter your parameters for correct performance tracking</p>
        <div>
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
                <p>Height</p>
                <div
                  style={{
                    borderColor: touched.height
                      ? errors.height
                        ? '#E74A3B'
                        : '#3CBC81'
                      : '',
                  }}
                >
                  <input
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
                  <div
                    style={{
                      display: values.height ? 'block' : 'none',
                      position: 'absolute',
                      top: '-5%',
                      right: '10px',
                      transform: 'translateY(50%)',
                    }}
                  >
                    {errors.height && touched.height ? (
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

                <p>Weight</p>
                <div
                  style={{
                    borderColor: touched.weight
                      ? errors.weight
                        ? '#E74A3B'
                        : '#3CBC81'
                      : '',
                  }}
                >
                  <input
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
                  <div
                    style={{
                      display: values.weight ? 'block' : 'none',
                      position: 'absolute',
                      top: '-5%',
                      right: '10px',
                      transform: 'translateY(50%)',
                    }}
                  >
                    {errors.weight && touched.weight ? (
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
                <button type="button" onClick={goBack}>
                  Back
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default BodyParams;
