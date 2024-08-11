import React from "react";
import Header from "./pages/header";
import NavigateTom3 from "./pages/navigation";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials, logOut } from "./redux/AuthReducer";
import { jwtDecode } from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

const Root = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(setCredentials(decoded));

      const currentTime = Date.now() / 1000;
      const timeRemaining = decoded.exp - currentTime;
      console.log(timeRemaining);
      setTimeout(() => {
        localStorage.removeItem("jwtToken");
        dispatch(logOut());
        setAuthToken(false);
      }, timeRemaining * 1000);
    }
  }, [dispatch]);
  return (
    <div className="relative">
      <div className="sticky top-0 z-50 ">
        <Header />
        <NavigateTom3 />
      </div>
      <div className="block  no-scrollbar">
        <Outlet className="" />
      </div>{" "}
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
