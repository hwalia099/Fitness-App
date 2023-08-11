import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCaloriesConsumed: 0,
};

const nutritionSlice = createSlice({
  name: 'nutrition',
  initialState,
  reducers: {
    setNutritionData: (state, action) => {
      state.totalCaloriesConsumed = action.payload.totalCaloriesConsumed;
    }
  }
});

export const { setNutritionData } = nutritionSlice.actions;

export default nutritionSlice.reducer;
