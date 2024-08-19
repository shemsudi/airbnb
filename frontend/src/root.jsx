import React from "react";
import Header from "./pages/header";
import NavigateTom3 from "./pages/navigation";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials, logOut } from "./redux/AuthReducer";
import { jwtDecode } from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

const Root = () => {
  const [atTop, setAtTop] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="relative h-full ">
      <div className="sticky top-0 z-50  bg-white">
        <Header atTop={atTop} />
        <NavigateTom3 />
      </div>
      <div className="overflow-y-auto ">
        <Outlet className="overflow-y-auto" />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
