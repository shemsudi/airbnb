import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./AuthReducer";
import modalReducer from "./ModalReducer";

const store = configureStore({
  reducer: {
    auth: userReducer,
    modal: modalReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

export default store;
