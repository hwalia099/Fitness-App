import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY;

export const chatGptApi = createApi({
  reducerPath: "chatGptApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://chatgpt-api7.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/json");
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", "chatgpt-api7.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    askChatGPT: builder.mutation({
      query: (data) => ({
        url: "/ask",
        method: "POST",
        body: {
          query: data.query,
        },
      }),
    }),
  }),
});

// Export the hook for the ChatGPT endpoint
export const { useAskChatGPTMutation } = chatGptApi;
