import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  caloriesBurned: 0,
  workoutCategory: ''
};

const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    setWorkoutData: (state, action) => {
      state.caloriesBurned = action.payload.caloriesBurned;
      state.workoutCategory = action.payload.workoutCategory;
    }
  }
});

export const { setWorkoutData } = workoutSlice.actions;

export default workoutSlice.reducer;
