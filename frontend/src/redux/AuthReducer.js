import { createSlice } from "@reduxjs/toolkit";
import { sendMessage, verifyOtp, registerUser } from "./action.js";
import setAuthToken from "../utils/setAuthToken.js";
import axios from "axios";

const initialState = {
  isUserAuthenticated: false,
  loading: false,
  user: null,
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
      state.user = action.payload;
      state.isUserAuthenticated = true;
    },
    logOut: (state) => {
      setAuthToken(false);
      state.user = null;
      state.isUserAuthenticated = false;
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
        console.log(action.payload);
        if (!action.payload.isUserExist) {
          state.error = null;
        } else {
          state.isUserAuthenticated = true;
          state.user = action.payload.decoded;
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
        state.isUserAuthenticated = true;
        state.user = action.payload.decoded;
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
