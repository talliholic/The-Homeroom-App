import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./apiSlice"
import userSlice from "./users/slice.js"
import appSlice from "./appSlice.js"

export const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware
    ),
  devTools: true,
})
