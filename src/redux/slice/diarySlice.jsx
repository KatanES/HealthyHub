import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const selectMeals = (state) => state.diary.meals;

export const fetchMeals = createAsyncThunk('meals/fetchAll', async () => {
  const response = await fetch(
    '/https://65140b928e505cebc2ea9bcc.mockapi.io/contacts/'
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
});

export const addMeal = createAsyncThunk('meals/addMeal', async (mealData) => {
  const response = await fetch(
    '/https://65140b928e505cebc2ea9bcc.mockapi.io/contacts/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mealData),
    }
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
});

export const deleteMeal = createAsyncThunk(
  'meals/deleteMeal',
  async (mealId) => {
    const response = await fetch(
      `/https://65140b928e505cebc2ea9bcc.mockapi.io/contacts/${mealId}`,
      {
        method: 'DELETE',
      }
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return mealId;
  }
);

const initialState = {
  meals: [],
  err: null, 
  filter: '',
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.err = null;
        state.meals = action.payload;
      })
      .addCase(addMeal.fulfilled, (state, action) => {
        state.err = null;
        state.meals.push(action.payload);
      })
      .addCase(deleteMeal.fulfilled, (state, action) => {
        state.err = null;
        state.meals = state.meals.filter((meal) => meal.id !== action.payload);
      });
  },
});

export const { updateFilter } = diarySlice.actions;

export default diarySlice.reducer;
