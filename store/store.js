import { configureStore } from '@reduxjs/toolkit';
import nutritionReducer from './nutritionSlice';
import workoutReducer from './workoutSlice';

export default configureStore({
  reducer: {
    nutrition: nutritionReducer,
    workout: workoutReducer
  }
});
