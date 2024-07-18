import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./AuthReducer";
import modalReducer from "./ModalReducer";
import errorReducer from "./errorReducer";

const store = configureStore({
  reducer: {
    auth: userReducer,
    modal: modalReducer,
    error: errorReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

export default store;
