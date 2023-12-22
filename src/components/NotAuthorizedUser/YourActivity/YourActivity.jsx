import React from 'react';
import { Formik, Field, Form } from 'formik';

import { useEffect } from 'react';

import { YourActivitySchema } from '../YupSchemas/YupSchemas';

import IllustrutonActivity from '../../../assets/Welcome/IllustrationActivity.png';
import { ActivContainer, ActivRadio, ActivRadioForm, ActivTitle, ActivlImg, Text, WrapperImg, ActivLabel, ActivField, ButtonWrapper, StyledButton, ActivWrapper } from './YourActivity.styled';

const YourActivity = ({ goNext, setActivity, dataActivity, goBack }) => {
  useEffect(() => {
    const selectorString = `input[type="radio"][value="${dataActivity}"]`;
    const checkedButton = document.querySelector(selectorString);

    if (checkedButton) {
      checkedButton.checked = true;
    }
  }, [dataActivity]);

  const handleSubmit = ({ activity }) => {
    setActivity(Number(activity));
    goNext();
  };
  const handleBack = () => {
    goBack();
  };

  return (
    <ActivContainer>
      <WrapperImg>
        <ActivlImg src={IllustrutonActivity} alt="Physical activity" />
      </WrapperImg>
      <ActivWrapper>
        <ActivTitle>Your Activity</ActivTitle>
        <Text>To correctly calculate calorie and water intake</Text>
    
          <Formik
            initialValues={{
              activity: dataActivity,
            }}
            validationSchema={YourActivitySchema}
            onSubmit={handleSubmit}
          >
            <ActivRadioForm>
              <ActivRadio role="group" aria-labelledby="activityGroup">
                <ActivLabel>
                  <ActivField
                    type="radio"
                    name="activity"
                    value=" 1.2"
                    required
                    checked
                  />
                  1.2 - if you do not have physical activity and sedentary work
                </ActivLabel>
                <ActivLabel>
                  <ActivField type="radio" name="activity" value="1.375" required />
                  1.375 - if you do short runs or light gymnastics 1-3 times a
                  week
                </ActivLabel>
                <ActivLabel>
                  <ActivField type="radio" name="activity" value="1.55" required />
                  1.55 - if you play sports with average loads 3-5 times a week
                </ActivLabel>
                <ActivLabel>
                  <ActivField type="radio" name="activity" value="1.725" required />
                  1.725 ​​- if you train fully 6-7 times a week
                </ActivLabel>
                <ActivLabel>
                  <ActivField type="radio" name="activity" value="1.9" required />
                  1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program
                </ActivLabel>
              </ActivRadio>
<ButtonWrapper>
  <StyledButton type="submit">Sign Up</StyledButton>
              <StyledButton type="button" onClick={handleBack}>
                Back
              </StyledButton>
</ButtonWrapper>
              
            </ActivRadioForm>
          </Formik>
       
      </ActivWrapper>
    </ActivContainer>
  );
};
export default YourActivity;
