// modalSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isDropDownOpen: false,
    isSignUp_LoginPageOpen: false,
    isLoginPage: true,
    isVerifyPage: false,
    isSignupPage: false,
  },
  reducers: {
    openLoginPage: (state) => {
      state.isLoginPage = true;
    },
    closeLoginPage: (state) => {
      state.isLoginPage = false;
    },
    openDropDown: (state) => {
      state.isDropDownOpen = true;
    },
    closeDropDown: (state) => {
      state.isDropDownOpen = false;
    },
    openSignUp_LoginPage: (state) => {
      state.isSignUp_LoginPageOpen = true;
    },
    closeSignUp_LoginPage: (state) => {
      state.isSignUp_LoginPageOpen = false;
    },
    openVerifyPage: (state) => {
      state.isVerifyPage = true;
    },
    closeVerifyPage: (state) => {
      state.isVerifyPage = false;
    },
    openSignUpPage: (state) => {
      state.isSignupPage = true;
    },
    closeSignUpPage: (state) => {
      state.isSignupPage = false;
    },
  },
});

export const {
  openLoginPage,
  closeLoginPage,
  openVerifyPage,
  closeVerifyPage,
  openSignUpPage,
  closeSignUpPage,
  openDropDown,
  closeDropDown,
  openSignUp_LoginPage,
  closeSignUp_LoginPage,
} = modalSlice.actions;

export const selectModals = (state) => state.modal;

export default modalSlice.reducer;
