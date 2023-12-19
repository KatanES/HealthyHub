import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMeal } from '../../../redux/slice/diarySlice.jsx';
import BreakfastImage from '../../../assets/Diary/Breakfast.png';
import { TitelMeal } from './DiaryPage.styled.jsx';

const Breakfast = () => {
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
    <div>
      <img src={BreakfastImage} alt="Breakfast"></img>
      <h2>Breakfast</h2>
      <button onClick={openModal}>+ Record your meal</button>

      <div>
        <p>Carbonohidrates: {totalNutrients.carbonohidrates}</p>
        <p>Protein: {totalNutrients.protein}</p>
        <p>Fat: {totalNutrients.fat}</p>
      </div>

      {modalOpen && (
        <div>
          <img src={Breakfast} alt="Breakfast"></img>
          <TitelMeal>Breakfast</TitelMeal>
          <form onSubmit={handleSubmit}>
            <label htmlFor="mealName">The name of the product or dish</label>
            <input
              type="text"
              id="mealName"
              value={mealName}
              onChange={(e) => setMealName(e.target.value)}
              required
            />

            <label htmlFor="carbonohidrates">Carbonohidrates</label>
            <input
              type="text"
              id="carbonohidrates"
              value={carbonohidrates}
              onChange={(e) => setCarbonohidrates(e.target.value)}
              required
            />

            <label htmlFor="protein">Protein</label>
            <input
              type="text"
              id="protein"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
              required
            />

            <label htmlFor="fat">Fat</label>
            <input
              type="text"
              id="fat"
              value={fat}
              onChange={(e) => setFat(e.target.value)}
              required
            />
            <button type="submit" onClick={handleSubmit}>
              delete
            </button>
            <button type="submit" onClick={handleSubmit}>
              + Add more
            </button>
            <button type="submit">Save</button>
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
          </form>
        </div>
      )}
      {meals.map((meal) => (
        <div key={meal.id}>
          <p>{meal.name}</p>
          <p>Carbonohidrates: {meal.carbonohidrates}</p>
          <p>Protein: {meal.protein}</p>
          <p>Fat: {meal.fat}</p>
        </div>
      ))}
    </div>
  );
};

console.log();

export default Breakfast;
