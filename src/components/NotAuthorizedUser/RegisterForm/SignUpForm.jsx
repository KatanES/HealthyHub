import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

import { signup } from '../../../redux/auth/operations';
import SignUp from '../SignUp';
import YourGoal from '../YourGoal/YourGoal';
import SelectAgeAndGender from '../SelectAgeAndGender/SelectAgeAndGender';
import BodyParams from '../BodyParams/BodyParams';
import YourActivity from '../YourActivity/YourActivity';

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    goal: 'lose fat',
    gender: 'male',
    height: '',
    weight: '',
    age: '',
    activity: 1.2,
  };

  const userRegister = async (values) => {
    try {
      await dispatch(signup(values));
      setStep(1);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
   < Formik initialValues={initialValues} onSubmit={userRegister}>
    {({ handleSubmit }) => (
        <div>
          {step === 1 && (
            <div>
              <SignUp goNext={handleNextStep} handleSubmit={handleSubmit} />
            </div>
          )}
          {step === 2 && (
            <div>
              <YourGoal goNext={handleNextStep} handleSubmit={handleSubmit} goBack={handlePrevStep}/>
            </div>
          )}
          {step === 3 && (
            <SelectAgeAndGender goNext={handleNextStep} handleSubmit={handleSubmit} goBack={handlePrevStep}/>
          )}
          {step === 4 && (
            <BodyParams goNext={handleNextStep} handleSubmit={handleSubmit} goBack={handlePrevStep}/>
          )}
          {step === 5 && (
            <YourActivity goNext={handleNextStep} handleSubmit={handleSubmit} goBack={handlePrevStep}/>
          )}
          {step >= 6 && (
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      )}
    </Formik>
  );
};
