import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  Backdrop,
  ButtonWrapper,
  Container,
  ErrorText,
  InputField,
  StyledButton,
  Title,
  WaterIntakeForm,
  WaterIntakeModal,
  WaterLable,
} from '../AddWaterIntakeModal/AddWaterIntakeModal.styled';

import { addWaterIntake } from '../../redux/DailyWater/operations';

const validationSchema = Yup.object({
  waterIntake: Yup.number().required('Required'),
});

export const AddWaterIntakeModal = ({ handleModal }) => {
  const dispatch = useDispatch();

  const handleCloseModal = (e) => {
    (e.code === 'Escape' || e.currentTarget === e.target) && handleModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  const handleSubmit = async (values, { resetForm }) => {
    const { waterIntake } = values;
    console.log('Olya', waterIntake);
    dispatch(await addWaterIntake({ value: waterIntake }));

    resetForm();
    handleModal();
  };
  return (
    <Container>
       <Backdrop onClick={handleCloseModal}>
      <WaterIntakeModal>
        <Title>Add water intake</Title>
        <Formik
          initialValues={{ waterIntake: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <WaterIntakeForm>
              <WaterLable
                htmlFor="waterIntake"
                $showIcon={
                  errors.waterIntake && touched.waterIntake ? 'block' : 'none'
                }
              >
                How much water
              </WaterLable>
              <InputField
                autoFocus
                name="waterIntake"
                type="number"
                min={0}
                placeholder="Enter milliliters"
                borderstyle={
                  errors.waterIntake && touched.waterIntake
                    ? '1px solid red'
                    : ''
                }
              />

              <ErrorMessage name="waterIntake">
                {(msg) => <ErrorText>{msg}</ErrorText>}
              </ErrorMessage>
              <ButtonWrapper>
                <StyledButton type="submit">Confirm</StyledButton>
              <StyledButton type="button" onClick={handleModal}>
                Cancel
              </StyledButton>
              </ButtonWrapper>
              
            </WaterIntakeForm>
          )}
        </Formik>
      </WaterIntakeModal>
    </Backdrop>
    </Container>
   
  );
};
