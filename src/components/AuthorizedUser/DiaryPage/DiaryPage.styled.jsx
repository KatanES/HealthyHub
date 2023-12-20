import styled from 'styled-components';

export const DeviceFlex = styled.div`
  @media (min-width: 768px) {
    display: flex;
  gap: 159px;
  }
`;

export const Section = styled.div`
  margin-bottom: 27px;
`;

export const FormStyle = styled.form`
  /* outline: none; */
`;

export const TitelMeal = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
  margin: 0;
`;

export const TitelSection = styled.div`
  display: flex;
  gap: 12px;
  justify-content: start;
  align-items: center;
  margin: 0;
  margin-bottom: 15px;
  width:148px;
`;

export const IconMeal = styled.img`
width: 32px;
height: 32px;
`;

export const TitelNutrients = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: ${(totalNutrients) => (totalNutrients ? 'white' : '##B6B6B6')};
  margin: 0;
`;

export const NutrientsSection = styled.div`
  display: flex;
  gap: 12px;
  justify-content: start;
  align-items: center;
  margin: 0;
  margin-bottom: 15px;
  
`;

export const ButtonRecord = styled.button`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  background-color: inherit;
  color: #e3ffa8;
  border: none;
  margin: 0;
  border-radius:12px;

  &:hover {
    background-color: #e3ffa8;
    color: black;
  }

  &:active {
    background-color: #e3ffa8;
    color: black;
  }
`;

export const TitelRecord = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const InputMeal = styled.input`
  background-color: inherit;
  color: #b6b6b6;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  border-radius: 12px;
  border: 1px solid #e3ffa8;
  height: 20px;
  margin-bottom: 32px;
`;

export const SVG = styled.svg`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
`;

export const InputFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }

  @media (min-width: 1200px) {
  }
`;

export const ModalRecord = styled.div`
  max-width: 320px;
  padding: 12px;
  top: 0;
  position: absolute;
  top: 100px;
  left: 10px;
  background: black;
  z-index: 1000;

  @media (min-width: 768px) {
    max-width: 708px;
    padding: 27px;
    top: 212px;
  }

  @media (min-width: 1200px) {
    max-width: 708px;
    padding: 34px;
    top: 236px;
    left: 36px;
  }
`;

export const ButtonDelete = styled.button`
  background-color: inherit;
  color: #e3ffa8;
  border: none;
  margin: 0;
  width: 20px;
  height: 20px;
`;

export const ButtonAdd = styled.button`
  background-color: inherit;
  color: #e3ffa8;
  border: none;
  margin-bottom: 72px;
`;

export const ButtonFlex = styled.div`
  display: flex:
  flex-wrap: wrap;
  gap: 10px;
  justify-content: end;
  background-color: inherit;
  border: none;
  flex-direction: column; 
  align-items: flex-start;
`;

export const ButtonSolution = styled.button`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  background-color: inherit;
  color: #e3ffa8;
  border: 2px solid #e3ffa8;
  margin: 0;
  /* display: flex; */
  padding: 8px 10px;
  
  border-radius: 12px;

  &:hover {
    background-color: #e3ffa8;
    color: black;
  }

  &:active {
    background-color: #e3ffa8;
    color: black;
  }
`;