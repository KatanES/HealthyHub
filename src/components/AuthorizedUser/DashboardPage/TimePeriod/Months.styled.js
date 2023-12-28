import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Container = styled.div``;

export const DashboardForm = styled(Form)``;

export const LabelDashboard = styled.label`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  color: var(--color-primary-white);
  margin-bottom: 8px;
`;

export const FieldStyled = styled(Field)`
  width: 212px;
  overflow-y: auto;
  border: none;
  margin-left: 6px;
  background-color: inherit;
  color: var(--color-primary-green-lite);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-grey);
    border-radius: 12px;
  }

  /* Стили для галочки */
  input[type='checkbox'] {
    position: absolute;
    top: 50%;
    left: 6px;
    transform: translateY(-50%);
  }

  /* Стили для текста опции */
  span {
    position: absolute;
    top: 50%;
    left: 32px; /* Расстояние от галочки до текста */
    transform: translateY(-50%);
  }
`;

export const OptionStyled = styled.option`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-grey);
`;
