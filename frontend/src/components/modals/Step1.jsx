// src/components/Step1.js

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUp_LoginPage } from "../../redux/ModalReducer.js";
import { sendMessage } from "../../redux/action.js";
import {
  selectCurrentError,
  selectLoading,
  setErrors,
} from "../../redux/AuthReducer.js";
//custom components
import CloseIcon from "../icons/closeIcon.jsx";
import Button from "../buttons/button.jsx";
import CountrySelect from "../countrySelect.jsx";
import PhoneNumberInput from "../phoneNumberInput.jsx";
import SocialSignInButtons from "../socialSignInButtons.jsx";

const Step1 = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+251");
  const [isShrinking, setIsShrinking] = useState(false);
  const dispatch = useDispatch();
  const signupModalref = useRef(null);
  const errors = useSelector(selectCurrentError) || {};
  const loading = useSelector(selectLoading);

  function handleCloseModal() {
    dispatch(closeSignUp_LoginPage());
    dispatch(setErrors({}));
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        signupModalref.current &&
        !signupModalref.current.contains(event.target)
      ) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsShrinking(true);
    props.setPhoneNumber(phoneNumber);
    props.setCountryCode(countryCode);
    const formData = {
      phoneNumber,
      countryCode,
    };
    setTimeout(() => {
      setIsShrinking(false);
    }, 200);

    try {
      await dispatch(sendMessage(formData)).unwrap();
    } catch (error) {
      setErrors(error);
    }
  };

  const signWithGoogle = async () => {
    try {
      window.location.href = "http://localhost:3000/auth/google";
    } catch {
      console.error("Error during Google Sign-In:", error);
    }
  };

  return (
    <div
      ref={signupModalref}
      className=" relative flex flex-col max-w-md h-5/6 top-1/2 left-1/2 rounded-xl border shadow-md bg-white -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex justify-between p-4">
        <Button
          className={""}
          onClick={handleCloseModal}
          children={<CloseIcon />}
        />

        <p>Log in or sign up</p>
        <div></div>
      </div>
      <hr />
      <div className="p-4 flex flex-col overflow-y-scroll ">
        <p className="mb-4 font-roboto text-2xl ">Welcome to Airbnb</p>
        {errors.longPhoneNumber && (
          <div className="flex gap-3  mb-4 border border-gray-300  p-2 rounded-xl">
            <svg
              className="w-14 h-12 fill-red-800 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
            <div className="flex flex-col">
              <h1>Let's try that again</h1>
              <p className=" text-sm text-gray-500">{errors.longPhoneNumber}</p>
            </div>
          </div>
        )}{" "}
        <div className="">
          <Form onSubmit={handleSubmit}>
            <CountrySelect
              countryCode={countryCode}
              setCountryCode={setCountryCode}
            />
            <PhoneNumberInput
              countryCode={countryCode}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              errors={errors}
            />

            {errors.phoneNumber && (
              <div className="flex mb-4">
                <svg
                  className="w-3 h-3 self-center fill-red-800 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
                <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
              </div>
            )}
            {errors.invalidPhoneNumber && (
              <div className=" flex gap-3 text-gray-500 text-sm m-2 border border-gray-300 p-2 rounded-xl">
                <svg
                  className="w-5 h-5 self-center fill-"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg>

                <p>{errors.invalidPhoneNumber}</p>
              </div>
            )}

            <div
              className={`mb-5 text-sm ${errors.phoneNumber ? "hidden" : ""} `}
            >
              <p className="pl-1 mt-1  ">
                We’ll call or text you to confirm your number. Standard message
                and data rates apply.{" "}
                <Link to={"/privacy"} className="underline">
                  Privacy Policy
                </Link>
              </p>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={` w-full bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-md ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }   ${isShrinking ? "transform scale-90" : ""}`}
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
        <div className="text-center mt-3">OR</div>
        <SocialSignInButtons signWithGoogle={signWithGoogle} />
      </div>
    </div>
  );
};

export default Step1;
