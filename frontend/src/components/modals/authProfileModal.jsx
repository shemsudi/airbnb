import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSignUp_LoginPage, closeDropDown } from "../../redux/ModalReducer";

const AuthProfileModal = (props) => {
  const dispatch = useDispatch();
  const showSignupPage = () => {
    dispatch(openSignUp_LoginPage());
    dispatch(closeDropDown());
  };

  return (
    <div
      className={`  rounded-2xl shadow-lg w-60 h-auto absolute top-14 right-3 border z-10 bg-white`}
    >
      <ul
        role="menu"
        className="flex flex-col justify-between  h-full mt-2 mb-2"
      >
        <li
          role="menuitem"
          className="w-full p-3 cursor-pointer hover:bg-gray-200"
          onClick={showSignupPage}
          tabIndex="0"
        >
          Login
        </li>
        <li
          role="menuitem"
          className="w-full p-3 cursor-pointer hover:bg-gray-200"
          onClick={showSignupPage}
          tabIndex="0"
        >
          Signup
        </li>

        <li role="menuitem" className="w-full p-3 c">
          {" "}
          <hr />
        </li>
        <li
          role="menuitem"
          className="w-full p-3 cursor-pointer hover:bg-gray-200"
        >
          <Link to={"/giftcards"}>Gift Cards</Link>
        </li>
        <li
          role="menuitem"
          className="w-full p-3 cursor-pointer hover:bg-gray-200"
        >
          <Link to={"/host/homes"}>Airpnb your home</Link>
        </li>
        <li
          role="menuitem"
          className="w-full p-3 cursor-pointer hover:bg-gray-200"
        >
          <Link to={"/help"}> Help Center</Link>
        </li>
      </ul>
    </div>
  );
};

export default AuthProfileModal;
