// src/components/Step1.js

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUp_LoginPage } from "../redux/ModalReducer.js";
import { sendMessage } from "../redux/action.js";
import { delay } from "../controller/delay.js";
import {
  selectCurrentError,
  selectLoading,
  setErrors,
} from "../redux/AuthReducer.js";
const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+251", country: "Ethiopia" },
  // Add more country codes as needed
];

const Step1 = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+251");
  const [isShrinking, setIsShrinking] = useState(false);
  const dispatch = useDispatch();
  const signupModalref = useRef(null);
  const errors = useSelector(selectCurrentError) || {};
  const loading = useSelector(selectLoading);
  console.log(loading);

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
        <button
          data-modal-hide="default-modal"
          onClick={() => handleCloseModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
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
            <div className=" flex flex-col border border-gray-300 rounded-md">
              <label
                htmlFor="countryCode"
                className=" text-sm font-medium text-gray-500 pl-2"
              >
                Country Code
              </label>
              <select
                id="countryCode"
                name="countryCode"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="text-md font-roboto pl-1 pr-1 bg-white focus:outline-none focus:ring-0"
                required
              >
                {countryCodes.map((country) => (
                  <option className="" key={country.code} value={country.code}>
                    {country.country} ({country.code})
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col  pl-2 border border-t-0 border-gray-300 rounded-md rounded-l-none 	">
              <label
                htmlFor="phoneNumber"
                className={`text-gray-500 text-sm ${
                  errors.phoneNumber ? "text-red-700" : ""
                }`}
              >
                Phone number
              </label>
              <div className="flex">
                <span className="mr-2">{countryCode}</span>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full focus:outline-none focus:ring-0"
                />
              </div>
            </div>
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
        <div className="">
          <button
            type="submit"
            className="w-full flex justify-between bg-white text-black p-3 mt-3  rounded-md border border-black"
          >
            <svg
              className="w-4 h-4 self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
            <div>sign with facebook</div>
            <div></div>
          </button>
          <button
            onClick={signWithGoogle}
            type="submit"
            className="w-full flex justify-between bg-white text-black p-3 mt-4 rounded-md border border-black"
          >
            <svg
              className="w-4 h-4 self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>

            <div>sign with google</div>
            <div></div>
          </button>
          <button
            type="submit"
            className="w-full flex justify-between bg-white text-black p-3 mt-4 rounded-md border border-black"
          >
            <svg
              className="w-4 h-4 self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>

            <div>sign with Apple</div>
            <div></div>
          </button>
          <button
            type="submit"
            className="w-full flex justify-between bg-white text-black p-3 mt-4 rounded-md border border-black"
          >
            <svg
              className="w-4 h-4 self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>

            <div>sign with Email</div>
            <div></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
