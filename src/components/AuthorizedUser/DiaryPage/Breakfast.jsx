import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMeal } from '../../../redux/slice/diarySlice.jsx';
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
  const meals = useSelector((state) => state.diary.meals);
  const [modalOpen, setModalOpen] = useState(false);
  const [mealName, setMealName] = useState('');
  const [carbonohidrates, setCarbonohidrates] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [setSelectedMeal] = useState(null); 

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setMealName('');
    setCarbonohidrates('');
    setProtein('');
    setFat('');
    setSelectedMeal(null);
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

  // // Додано функцію для генерації порожніх елементів
  // const generateEmptyMeals = () => {
  //   const emptyMeals = [];
  //   for (let i = 0; i < 4; i++) {
  //     emptyMeals.push({
  //       id: `empty_${i + 1}`,
  //       name: `Empty Meal ${i + 1}`,
  //       carbonohidrates: 0,
  //       protein: 0,
  //       fat: 0,
  //     });
  //   }
  //   return emptyMeals;
  // };

  // // Використано useEffect для ініціалізації порожніх елементів при завантаженні компонента
  // useEffect(() => {
  //   if (meals.length === 0) {
  //     const emptyMeals = generateEmptyMeals();
  //     dispatch(addEmptyMeals(emptyMeals));
  //   }
  // }, [dispatch, meals]);

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

console.log();

export default Breakfast;
