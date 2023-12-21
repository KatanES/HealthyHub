import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

import { signup } from '../../../redux/auth/operations';
import SignUp from '../SignUp';
import YourGoal from '../YourGoal/YourGoal';
import SelectAgeAndGender from '../SelectAgeAndGender/SelectAgeAndGender';
import BodyParams from '../BodyParams/BodyParams';
import YourActivity from '../YourActivity/YourActivity';

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

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [goal, setGoal] = useState('lose fat');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [activity, setActivity] = useState(1.2);

  const userRegister = () => {
    const userData = {
      name,
      email,
      password,
      goal,
      gender,
      height: Number(height),
      weight: Number(weight),
      age: Number(age),
      activity: Number(activity),
    };
    try {
      dispatch(signup(userData));
      setStep(1);
      setName('');
      setEmail('');
      setPassword('');
      setGoal('lose fat');
      setGender('male');
      setHeight('');
      setWeight('');
      setAge('');
      setActivity(1.2);
    } catch (error) {
      setErrorsMessage(error);
      setIsOpenModal(true);
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
   
        <div>
          {step === 1 && (
            <div>
              <SignUp goNext={handleNextStep}  setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}  />
            </div>
          )}
          {step === 2 && (
            <div>
              <YourGoal goNext={handleNextStep}  goBack={handlePrevStep}
               setGoal={setGoal}
               dataGoal={goal}/>
            </div>
          )}
          {step === 3 && (
            <SelectAgeAndGender goNext={handleNextStep}  goBack={handlePrevStep}
            setAge={setAge}
            setGender={setGender}
            dataGender={gender}
            dataAge={age}
            />
          )}
          {step === 4 && (
            <BodyParams goNext={handleNextStep}  goBack={handlePrevStep}
            setHeight={setHeight}
            setWeight={setWeight}
            dataHeight={height}
            dataWeight={weight}/>
          )}
          {step === 5 && (
            <YourActivity goNext={handleNextStep}  goBack={handlePrevStep}
            setActivity={setActivity}
            dataActivity={activity}/>
          )}
          {step >= 6 && (
            <button type="submit" onClick={userRegister}>
              Submit
            </button>
          )}
        </div>
    
    </Formik>
  );
};
