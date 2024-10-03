import React from "react";
import Header from "./pages/header";
import NavigateTom3 from "./pages/navigation";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const Root = () => {
  const [atTop, setAtTop] = useState(true);

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

  return (
    <div className="relative h-full ">
      <div className="sticky top-0 z-50  bg-white">
        <Header atTop={atTop} />
        <NavigateTom3 />
      </div>
      <div className="overflow-y-auto ">
        <Outlet className="overflow-y-auto" />
      </div>
    </div>
  );
};

export default Root;
