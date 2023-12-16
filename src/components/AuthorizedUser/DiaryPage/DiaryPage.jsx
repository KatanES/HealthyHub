// import React from 'react';
import { useDispatch } from 'react-redux';
import { addRecorde } from 'redux/diarySlice';
import style from './diaryPage.module.css';

const DiaryForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const carbonohidrates = event.target.carbonohidrates.value;
    const protein = event.target.protein.value;
    const fat = event.target.fat.value;

    dispatch(addRecorde({ carbonohidrates, protein, fat }));

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="carbonohidrates" className={style.label}>
        Carbonohidrates:
        <input type="text" name="carbonohidrates" required />
      </label>

      <label htmlFor="protein" className={style.label}>
        Protein:
        <input type="text" name="protein" required />
      </label>

      <label htmlFor="fat" className={style.label}>
        Fat:
        <input type="text" name="fat" required />
      </label>

      <button type="submit" className={style.add}>
        Record your meal
      </button>

      <button type="submit" className={style.delete}>
        Delete
      </button>
    </form>
  );
};

export default DiaryForm;
