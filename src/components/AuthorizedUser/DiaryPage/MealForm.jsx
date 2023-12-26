import { useState } from 'react';
import {
  InputFlex,
  InputMeal,
  ButtonDelete,
  ButtonAdd,
  SVG,
  ButtonFlex,
  ButtonSolution,
  FormStyle,
} from './DiaryPage.styled.jsx';
import { postFoodIntake } from '../../../redux/diary/operations';
import symbol from '../../../assets/Welcome/symbol.svg';
import { useDispatch } from 'react-redux';

const MealForm = ({
  mealName,
  setMealName,
  carbonohidrates,
  setCarbonohidrates,
  protein,
  setProtein,
  fat,
  setFat,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const [showNewForm, setShowNewForm] = useState(false);

  const [newMealName, setNewMealName] = useState('');
  const [newCarbonohidrates, setNewCarbonohidrates] = useState('');
  const [newProtein, setNewProtein] = useState('');
  const [newFat, setNewFat] = useState('');

  const handleMainFormSubmit = async () => {
    try {
      const formData = {
        foodName: mealName,
        carbohydrate: carbonohidrates,
        protein,
        fat,
        calories: '0',
        foodType: 'Breakfast',
      };

      dispatch(postFoodIntake(formData));
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    closeModal(); 
  };

  const handleAddMore = () => {
    // Збереження даних перед додаванням нової форми
    handleMainFormSubmit();
    setShowNewForm(true);
  };

  const handleNewFormSubmit = async () => {
    try {
      const formData = {
        foodName: newMealName,
        carbohydrate: newCarbonohidrates,
        protein: newProtein,
        fat: newFat,
      };

      // Очищення полів і сховання форми
      setNewMealName('');
      setNewCarbonohidrates('');
      setNewProtein('');
      setNewFat('');
      setShowNewForm(false);

      // Виклик функції для відправки formData на сервер
      await postFoodIntake(formData);
    } catch (error) {
      // Обробка помилок, якщо потрібно
      console.error('Error submitting new form:', error);
    }
  };

  return (
    <FormStyle
      onSubmit={(e) => {
        e.preventDefault();
        handleMainFormSubmit();
      }}
    >
      <InputFlex>
        <InputMeal
          type="text"
          id="mealName"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          required
          placeholder="The name of the product or dish"
          size="35"
        />

        <InputMeal
          type="text"
          id="carbonohidrates"
          value={carbonohidrates}
          placeholder="Carbonohidrates"
          onChange={(e) => setCarbonohidrates(e.target.value)}
          required
          size="35"
        />

        <InputMeal
          type="text"
          id="protein"
          value={protein}
          placeholder="Protein"
          onChange={(e) => setProtein(e.target.value)}
          required
          size="8"
        />

        <InputMeal
          type="text"
          id="fat"
          value={fat}
          placeholder="Fat"
          onChange={(e) => setFat(e.target.value)}
          required
          size="8"
        />
        <ButtonDelete type="submit" onClick={handleMainFormSubmit}>
          <SVG>
            <use href={symbol + '#icon-trash-03'} />
          </SVG>
        </ButtonDelete>
      </InputFlex>

      <ButtonAdd type="button" onClick={handleAddMore}>
        + Add more
      </ButtonAdd>

      {showNewForm && (
        <InputFlex>
          <InputMeal
            type="text"
            id="newMealName"
            value={newMealName}
            onChange={(e) => setNewMealName(e.target.value)}
            required
            placeholder="The name of the product or dish"
            size="35"
          />

          <InputMeal
            type="text"
            id="newCarbonohidrates"
            value={newCarbonohidrates}
            placeholder="Carbonohidrates"
            onChange={(e) => setNewCarbonohidrates(e.target.value)}
            required
            size="35"
          />

          <InputMeal
            type="text"
            id="newProtein"
            value={newProtein}
            placeholder="Protein"
            onChange={(e) => setNewProtein(e.target.value)}
            required
            size="8"
          />

          <InputMeal
            type="text"
            id="newFat"
            value={newFat}
            placeholder="Fat"
            onChange={(e) => setNewFat(e.target.value)}
            required
            size="8"
          />
          <ButtonDelete type="submit" onClick={handleNewFormSubmit}>
            <SVG>
              <use href={symbol + '#icon-trash-03'} />
            </SVG>
          </ButtonDelete>
        </InputFlex>
      )}

      <ButtonFlex>
        <ButtonSolution type="submit" onClick={handleMainFormSubmit}>
          Save
        </ButtonSolution>
        <ButtonSolution type="button" onClick={closeModal}>
          Cancel
        </ButtonSolution>
      </ButtonFlex>
    </FormStyle>
  );
};

export default MealForm;
