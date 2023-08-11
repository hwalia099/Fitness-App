import { configureStore } from "@reduxjs/toolkit";
import { chatGptApi } from "./article"; // Assuming you renamed the file or the exported API
import nutritionReducer from '../store/nutritionSlice';
import workoutReducer from '../store/workoutSlice';

export const store = configureStore({
  reducer: {
    [chatGptApi.reducerPath]: chatGptApi.reducer,
    nutrition: nutritionReducer,
    workout: workoutReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatGptApi.middleware),
});
