import styled from 'styled-components';

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 60px;

  @media screen and (min-width: 300px) {
    
  }

  @media screen and (min-width: 780px) {
   
  }

  @media screen and (min-width: 1372px) {
    
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  width: 300px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  width: 100%;
  margin-bottom: 40px;

  color: #ffffff;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`; 

export const FormInput = styled.input`
padding
  
  width: 280px;

  color: #ffffff;

  font-size: 14px;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid #b6b6b6;
  background: #0f0f0f;
`;

export const FormInputRadio = styled.input``;

export const ContainerBtn = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 280px;
`;

export const FormSaveBtn = styled.button`
  display: inline-block;
  padding: 10px 8px;
  width: 100%;

  font-family: 'Poppins';
  color: #0f0f0f;
  background-color: #e3ffa8;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

export const FromCancelBtn = styled.button``;
