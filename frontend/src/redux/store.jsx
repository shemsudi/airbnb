import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./AuthReducer";
import modalReducer from "./ModalReducer";
import hostReducer from "./HostReducer";

const store = configureStore({
  reducer: {
    auth: userReducer,
    modal: modalReducer,
    host: hostReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

export default store;
