import { configureStore } from "@reduxjs/toolkit";
import { chatGptApi } from "./article"; // Assuming you renamed the file or the exported API

export const store = configureStore({
  reducer: {
    [chatGptApi.reducerPath]: chatGptApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatGptApi.middleware),
});
