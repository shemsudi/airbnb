import React, { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials, logOut } from "./redux/AuthReducer";
import { jwtDecode } from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setHost } from "./redux/HostReducer";
import Signup from "./components/modals/signup";
const AuthContext = createContext();
import { useSelector } from "react-redux";
import { selectModals } from "./redux/ModalReducer";
export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { isSignUp_LoginPageOpen } = useSelector(selectModals);
  console.log(isSignUp_LoginPageOpen);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    dispatch(setHost(currentHost));
    if (currentHost) {
      dispatch(setHost(currentHost));
    }
    if (token) {
      setAuthToken(token);
      const decoded = jwtDecode(token);
      dispatch(setCredentials(decoded));

      const currentTime = Date.now() / 1000;
      const timeRemaining = decoded.exp - currentTime;

      setTimeout(() => {
        localStorage.removeItem("jwtToken");
        dispatch(logOut());
        setAuthToken(false);
      }, timeRemaining * 1000);
    }
  }, [dispatch]);

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
