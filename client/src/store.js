import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./apiSlice"
import userSlice from "./users/slice.js"

export const store = configureStore({
  reducer: {
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware
    ),
  devTools: true,
})
