import React from "react";
import Header from "./pages/header";
import NavigateTom3 from "./pages/navigation";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const Root = (props) => {
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
