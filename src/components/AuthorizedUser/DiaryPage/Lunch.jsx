import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMeal } from '../../../redux/slice/diarySlice.jsx';
import LunchPng from '../../../assets/Diary/Lunch.png';
// import style from './DiaryPage.styled.jsx';

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
    closeModal();
  };

  return (
    <div>
      <img src={LunchPng} alt="Lunch"></img>
      <TitelMeal>Lunch</TitelMeal>
      <button onClick={openModal}>+ Record your meal</button>

      {modalOpen && (
        <div>
          <h2>Lunch</h2>
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
            <button type="submit" onSubmit={handleSubmit}>
              delete
            </button>
            <button type="submit" onSubmit={handleSubmit}>
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

export default Lunch;
