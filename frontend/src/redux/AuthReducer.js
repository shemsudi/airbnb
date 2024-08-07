import { createSlice } from "@reduxjs/toolkit";
import { sendMessage, verifyOtp, registerUser } from "./action.js";

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setErrors: (state, action) => {
      state.error = action.payload;
    },
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred";
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        if (!action.payload.isUserExist) {
          state.error = null;
        } else {
          const { user, accessToken } = action.payload;
          state.user = user;
          state.token = accessToken;
          state.error = null;
        }
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        const { user, accessToken } = action.payload;
        state.user = user;
        state.token = accessToken;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.error = action.payload || "An error occurred";
      });
  },
});

export const { setCredentials, logOut, setErrors } = userSlice.actions;

export default userSlice.reducer;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentError = (state) => state.auth.error;
export const selectLoading = (state) => state.auth.loading;
