// modalSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isDropDownOpen: false,
    isSignUp_LoginPageOpen: false,
    isLoginPageOpen: false,
    isVerifyPageOpen: false,
    isSignUpPageOpen: false,
  },
  reducers: {
    openSignUpPage: (state) => {
      state.isSignUpPageOpen = true;
    },
    closeSignUpPage: (state) => {
      state.isSignUpPageOpen = false;
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
