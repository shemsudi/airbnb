import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors: {},
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setErrors: (state, action) => {
      state.errors = action.payload; // Directly mutating the state is safe with Immer in Redux Toolkit
    },
  },
});

export const { setErrors } = errorSlice.actions;

export default errorSlice.reducer;
export const selectCurrentError = (state) => state.error.errors;
