import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMeal } from '../../../redux/slice/diarySlice.jsx';
import MealForm from './MealForm';
// import symbol from '../../../assets/Welcome/symbol.svg';
import LunchImage from '../../../assets/Diary/Lunch.png';
import {
  DeviceFlex,
  TitelSection,
  IconMeal,
  TitelMeal,
  TitelNutrients,
  NutrientsSection,
  ButtonRecord,
  TitelRecord,
  ModalRecord,
  Section
} from './DiaryPage.styled.jsx';

const Lunch = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.diary.meals);
  const [modalOpen, setModalOpen] = useState(false);
  const [mealName, setMealName] = useState('');
  const [carbonohidrates, setCarbonohidrates] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setMealName('');
    setCarbonohidrates('');
    setProtein('');
    setFat('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addMeal({
        name: mealName,
        carbonohidrates,
        protein,
        fat,
      })
    );

    setTotalNutrients((prev) => ({
      carbonohidrates: prev.carbonohidrates + parseFloat(carbonohidrates),
      protein: prev.protein + parseFloat(protein),
      fat: prev.fat + parseFloat(fat),
    }));

    closeModal();
  };

  const [totalNutrients, setTotalNutrients] = useState({
    carbonohidrates: 0,
    protein: 0,
    fat: 0,
  });

  return (
    <Section>
      <DeviceFlex>
        <TitelSection>
          <IconMeal src={LunchImage} alt="Lunch"></IconMeal>
          <TitelMeal>Lunch</TitelMeal>
        </TitelSection>

        <NutrientsSection>
          <TitelNutrients>
            Carbonohidrates: {totalNutrients.carbonohidrates}
          </TitelNutrients>
          <TitelNutrients>Protein: {totalNutrients.protein}</TitelNutrients>
          <TitelNutrients>Fat: {totalNutrients.fat}</TitelNutrients>
        </NutrientsSection>
      </DeviceFlex>

      <ButtonRecord onClick={openModal}>+ Record your meal</ButtonRecord>

      {modalOpen && (
        <ModalRecord>
          <TitelRecord>Record your meal</TitelRecord>
          <TitelSection>
            <IconMeal src={LunchImage} alt="Lunch"></IconMeal>
            <TitelMeal>Lunch</TitelMeal>
          </TitelSection>
          <MealForm
            handleSubmit={handleSubmit}
            mealName={mealName}
            setMealName={setMealName}
            carbonohidrates={carbonohidrates}
            setCarbonohidrates={setCarbonohidrates}
            protein={protein}
            setProtein={setProtein}
            fat={fat}
            setFat={setFat}
            closeModal={closeModal}
          />
        </ModalRecord>
      )}
      {meals.map((meal) => (
        <div key={meal.id}>
          <p>{meal.name}</p>
          <p>Carbonohidrates: {meal.carbonohidrates}</p>
          <p>Protein: {meal.protein}</p>
          <p>Fat: {meal.fat}</p>
        </div>
      ))}
    </Section>
  );
};

export default Lunch;
