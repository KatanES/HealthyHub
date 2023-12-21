import React from 'react';
import { Formik, Field, Form } from 'formik';

import { useEffect } from 'react';

import { YourGoalSchema } from '../YupSchemas/YupSchemas';

import IllustrutonGoals from '../../../assets/Welcome/IllustrationGoals.png';
import SignUp from '../SignUp';

const YourGoal = ({ goNext, setGoal, dataGoal, goBack }) => {
  useEffect(() => {
    const selectorString = 'input[type="radio"][value="' + dataGoal + '"]';
    const checkedButton = document.querySelector(selectorString);
    if (!checkedButton) {
      return;
    }
    checkedButton.checked = true;
  }, [dataGoal]);
  const handleSubmit = ({ goal }) => {
    setGoal(goal);
    goNext();
  };
  return (
    <div>
      <div>
        <img src={IllustrutonGoals} alt="Hiking" />
      </div>
      <div>
        <h2>Your goal</h2>
        <p>Choose a goal so that we can help you effectively</p>
        <div>
          <Formik
            initialValues={{
              goal: dataGoal,
            }}
            validationSchema={YourGoalSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div role="group" aria-labelledby="goalGroup">
                <label>
                  <Field type="radio" name="goal" value="Lose Fat" required />
                  Lose Fat
                </label>
                <label>
                  <Field type="radio" name="goal" value="Maintain" required />
                  Maintain
                </label>
                <label>
                  <Field
                    type="radio"
                    name="goal"
                    value=" Gain Muscle"
                    required
                  />
                  Gain Muscle
                </label>
              </div>

              <button type="submit">Next</button>
              <button type="button" onClick={goBack}>
                Back
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default YourGoal;
