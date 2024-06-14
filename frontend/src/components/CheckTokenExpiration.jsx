// CheckTokenExpiration.js

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut, selectCurrentToken } from "../redux/AuthReducer";

const CheckTokenExpiration = () => {
  const accessToken = useSelector(selectCurrentToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!accessToken) return; // No need to check if there's no token

    const decodedToken = decodeToken(accessToken);
    if (!decodedToken.exp) return; // No expiration time found

    const expiresIn = decodedToken.exp * 1000 - Date.now(); // Calculate time until expiration
    const timeout = setTimeout(() => {
      dispatch(logOut());
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }, expiresIn);

    return () => clearTimeout(timeout); // Clear the timeout when component unmounts or accessToken changes
  }, [accessToken, dispatch]);

  return null;
};

const decodeToken = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export default CheckTokenExpiration;
