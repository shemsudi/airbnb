import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSignUp_LoginPage,
  openDropDown,
  closeDropDown,
  selectModals,
} from "../redux/ModalReducer.js";
import ProfileModal from "./ProfileModal.jsx";
import Signup from "./signup.jsx";

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

  const showSignupPage = () => {
    dispatch(openSignUp_LoginPage());
    dispatch(closeDropDown());
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className=" border flex gap-3 rounded-3xl py-2 px-3 items-center shadow-md"
        onClick={toggleDropdown}
      >
        <svg
          xmlns=" http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" showmodal w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="showmodal w-8 h-8 text-white bg-black rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>
      {isDropDownOpen && <ProfileModal showSignupPage={showSignupPage} />}

      {isSignUp_LoginPageOpen && <Signup />}
    </div>
  );
};

export default ProfileDropDown;
