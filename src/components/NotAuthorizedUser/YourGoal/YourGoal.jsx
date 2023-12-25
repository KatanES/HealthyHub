import React from 'react';
import { Formik } from 'formik';

import { useEffect } from 'react';

import { YourGoalSchema } from '../YupSchemas/YupSchemas';

import IllustrutonGoals from '../../../assets/Welcome/IllustrationGoals.png';

import {
  GoalContainer,
  GoalTitle,
  GoalText,
  GoalWrapper,
  WrapperImg,
  YourGoalImg,
  GaolRadioForm,
  GaolRadio,
  GoalLabel,
  GoalField,
  StyledButton,
  ButtonWrapper,
} from './YourGoal.styled';

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
    <GoalContainer>
      <WrapperImg>
        <YourGoalImg src={IllustrutonGoals} alt="Hiking" />
      </WrapperImg>
      <GoalWrapper>
        <GoalTitle>Your goal</GoalTitle>
        <GoalText>Choose a goal so that we can help you effectively</GoalText>

        <Formik
          initialValues={{
            goal: dataGoal,
          }}
          validationSchema={YourGoalSchema}
          onSubmit={handleSubmit}
        >
          <GaolRadioForm>
            <GaolRadio role="group" aria-labelledby="goalGroup">
              <GoalLabel>
                <GoalField type="radio" name="goal" value="Lose Fat" required />
                Lose Fat
              </GoalLabel>
              <GoalLabel>
                <GoalField type="radio" name="goal" value="Maintain" required />
                Maintain
              </GoalLabel>
              <GoalLabel>
                <GoalField
                  type="radio"
                  name="goal"
                  value="Gain Muscle"
                  required
                />
                Gain Muscle
              </GoalLabel>
            </GaolRadio>
            <ButtonWrapper>
              <StyledButton type="submit">Next</StyledButton>
              <StyledButton type="button" onClick={goBack}>
                Back
              </StyledButton>
            </ButtonWrapper>
          </GaolRadioForm>
        </Formik>
      </GoalWrapper>
    </GoalContainer>
  );
};
export default YourGoal;
