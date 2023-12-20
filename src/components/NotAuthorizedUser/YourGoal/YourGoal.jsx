import React from 'react';
import { Formik, Field, Form } from 'formik';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { YourGoalSchema } from '../YupSchemas/YupSchemas';

import IllustrutonGoals from '../../../assets/Welcome/IllustrationGoals.png';
import { updateGoal } from '../../../redux/auth/operations';

 const YourGoal = ({ goNext, setGoal, dataGoal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const selectorString = 'input[type="radio"][value="' + dataGoal + '"]';
    const checkedButton = document.querySelector(selectorString);
    if (!checkedButton) {
      return;
    }
    checkedButton.checked = true;
  }, [dataGoal]);

  const handleSubmit = (values) => {
    const { goal } = values;
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
            onSubmit={({ ...values }, actions) => {
              dispatch(updateGoal({ ...values }));
              actions.resetForm();
            }}
          >
            <Form onSubmit={handleSubmit}>
              <div role="group" aria-labelledby="goalGroup">
                <label>
                  <Field type="radio" name="goal" value=" Lose Fat" required />
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

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default YourGoal;