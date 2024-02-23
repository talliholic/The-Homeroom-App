import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { get } from "../utils/requests"

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async () => await get("/users/dashboard")
)

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loaded: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      // .addCase(fetchUser.pending, state => {
      //   state.error = false
      // })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.data = payload
        state.loaded = true
      })
      .addCase(fetchUser.rejected, state => {
        state.error = true
        state.loaded = true
      })
  },
})

export default userSlice.reducer
