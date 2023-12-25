import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchFoodIntake,
  postFoodIntake,
} from '../../../redux/diary/operations';
import MealForm from './MealForm';
import BreakfastImage from '../../../assets/Diary/Breakfast.png';
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
  Section,
} from './DiaryPage.styled.jsx';

const Breakfast = () => {
  const dispatch = useDispatch();
  const foodIntake = useSelector((state) => state.diary.foodIntake);
  const [modalOpen, setModalOpen] = useState(false);
  const [mealName, setMealName] = useState('');
  const [carbonohidrates, setCarbonohidrates] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');

  useEffect(() => {
    dispatch(fetchFoodIntake());
  }, [dispatch]);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(
        postFoodIntake({
          name: mealName,
          carbonohidrates,
          protein,
          fat,
        })
      );

      // Оновлюємо foodIntake за допомогою fetchFoodIntake
      dispatch(fetchFoodIntake());

      setTotalNutrients((prev) => ({
        carbonohidrates: prev.carbonohidrates + parseFloat(carbonohidrates),
        protein: prev.protein + parseFloat(protein),
        fat: prev.fat + parseFloat(fat),
      }));

      closeModal();
    } catch (error) {
      console.error('Помилка при відправленні форми:', error);
    }
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
          <IconMeal src={BreakfastImage} alt="Breakfast"></IconMeal>
          <TitelMeal>Breakfast</TitelMeal>
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
            <IconMeal src={BreakfastImage} alt="Breakfast"></IconMeal>
            <TitelMeal>Breakfast</TitelMeal>
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
      {foodIntake &&
        foodIntake.map((foodIntake) => (
          <div key={foodIntake.id}>
            <p>{foodIntake.name}</p>
            <p>Carbonohidrates: {foodIntake.carbonohidrates}</p>
            <p>Protein: {foodIntake.protein}</p>
            <p>Fat: {foodIntake.fat}</p>
          </div>
        ))}
    </Section>
  );
};

export default Breakfast;