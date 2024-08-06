import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCredentials } from "../redux/AuthReducer";

import {
  closeLoginPage,
  closeSignUp_LoginPage,
  openVerifyPage,
  closeVerifyPage,
  openLoginPage,
  openSignUpPage,
  closeSignUpPage,
} from "./ModalReducer.js";
import axios from "axios";
import { setErrors } from "./errorReducer.js";

export const sendMessage = createAsyncThunk(
  "auth/sendMessage",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setErrors({})); // Clear previous errors
      const response = await axios.post("http://localhost:3000/login", payload);
      if (response.status === 200) {
        dispatch(closeLoginPage());
        dispatch(openVerifyPage());
        return response.data;
      }
    } catch (error) {
      if (error.response.status === 400) {
        dispatch(setErrors(error.response.data));

        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      console.log(payload);
      const response = await axios.post(
        "http://localhost:3000/verify",
        payload
      );
      console.log(response.data);
      if (!response.data.isUserExist) {
        dispatch(closeVerifyPage());
        dispatch(openSignUpPage());
      } else {
        const { user, accessToken } = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", accessToken);
        dispatch(setCredentials({ user, accessToken: accessToken }));
        dispatch(closeVerifyPage());
        dispatch(closeSignUp_LoginPage());
        dispatch(openLoginPage());
      }
    } catch (error) {
      dispatch(setErrors(error.response.data));
      return rejectWithValue(error.response.data);
    }
  }
);
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setErrors({}));
      const response = await axios.post(
        "http://localhost:3000/complete-registration",
        formData
      );
      console.log(response);
      if (response.status === 201) {
        dispatch(closeSignUp_LoginPage());
        dispatch(openLoginPage());
        dispatch(closeSignUpPage());
        console.log("succesfully registered");
        return response.data;
      } else {
        dispatch(setErrors(response.errors));
        console.error("Registration failed:", response.errors);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        // dispatch(setErrors(error.response.data));
        dispatch(setErrors(error.response.data));
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      }
    }
  }
);
