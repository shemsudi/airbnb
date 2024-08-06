import { createAsyncThunk } from "@reduxjs/toolkit";

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
export const sendMessage = createAsyncThunk(
  "auth/sendMessage",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3000/login", payload);
      if (response.status === 200) {
        dispatch(closeLoginPage());
        dispatch(openVerifyPage());
        return response.data;
      }
    } catch (error) {
      if (error.response.status === 400) {
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
        return response.data;
      } else {
        const { user, accessToken } = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", accessToken);
        dispatch(closeVerifyPage());
        dispatch(closeSignUp_LoginPage());
        dispatch(openLoginPage());
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { dispatch, rejectWithValue }) => {
    try {
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
        console.error("Registration failed:", response.errors);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);
