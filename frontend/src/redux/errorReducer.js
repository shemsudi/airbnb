import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setErrors: (state, action) => {
      const { errors } = action.payload;
      return {
        ...state,
        error: errors,
      };
    },
  },
});

export const { setErrors } = errorSlice.actions;

export default errorSlice.reducer;
export const selectCurrentError = (state) => state.error.error;
