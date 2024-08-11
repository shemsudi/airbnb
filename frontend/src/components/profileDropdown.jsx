import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSignUp_LoginPage,
  openDropDown,
  closeDropDown,
  selectModals,
} from "../redux/ModalReducer.js";
import ProfileModal from "./modals/ProfileModal.jsx";
import MenuIcon from "./icons/menuIcon.jsx";
import ProfileIcon from "./icons/profileIcon.jsx";
import Signup from "./modals/signup.jsx";
const ProfileDropDown = (props) => {
  const dispatch = useDispatch();
  const { isSignUp_LoginPageOpen, isDropDownOpen } = useSelector(selectModals);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(closeDropDown());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    if (isDropDownOpen) {
      dispatch(closeDropDown());
    } else {
      dispatch(openDropDown());
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className=" border flex gap-3 rounded-3xl py-2 px-3 items-center shadow-md"
        onClick={toggleDropdown}
      >
        <MenuIcon />
        <ProfileIcon />
      </button>
      {isDropDownOpen && <ProfileModal />}

      {isSignUp_LoginPageOpen && <Signup />}
    </div>
  );
};

export default ProfileDropDown;
