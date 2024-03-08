import { createSlice } from "@reduxjs/toolkit"

const initialState = { studentId: null }

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setStudentId(state, action) {
      state.studentId = action.payload
    },
    resetStudentId(state) {
      state.studentId = null
    },
  },
})

export const { setStudentId, resetStudentId } = appSlice.actions
export default appSlice.reducer
