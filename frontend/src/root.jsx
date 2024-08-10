import React from "react";
import Header from "./pages/header";
import NavigateTom3 from "./pages/navigation";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "./redux/AuthReducer";
import { jwtDecode } from "jwt-decode";

const Root = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decode = jwtDecode(token);
      dispatch(setCredentials(decode));
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
