// src/components/Step1.js

import React, { useState, useRef, useEffect } from "react";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSignUpPage, selectModals } from "../redux/ModalReducer.js";
import axios from "axios";

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
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const signupModalref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        signupModalref.current &&
        !signupModalref.current.contains(event.target)
      ) {
        props.setShowSignupage();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.setPhoneNumber(phoneNumber);
    props.setCountryCode(countryCode);
    const formData = {
      phoneNumber,
      countryCode,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        formData
      );
      if (response.status === 200) {
        props.setStep(2);
      }
    } catch (error) {
      setErrors(error.response.data);
      console.log(error.response.data);
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
      className=" relative flex flex-col overflow-y-scroll w-2/5 h-5/6 top-1/2 left-1/2 rounded-xl border shadow-md bg-white -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex justify-between p-4">
        <button
          data-modal-hide="default-modal"
          onClick={() => dispatch(closeSignUpPage())}
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
      <div className="p-4 flex flex-col">
        <p className="mb-4 font-roboto text-2xl ">Welcome to Airbnb</p>
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
                className="text-md font-roboto pl-1 bg-white"
                required
              >
                {countryCodes.map((country) => (
                  <option className="" key={country.code} value={country.code}>
                    {country.country} ({country.code})
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4 flex flex-col  pl-2 border border-t-0 border-gray-300 rounded-md rounded-l-none 	">
              <label htmlFor="phoneNumber" className="text-gray-500">
                phone number
              </label>
              <div className="flex">
                <span className="mr-2">{countryCode}</span>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md "
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
        <div className="text-center">OR</div>
        <div className="m-3">
          <button
            onClick={signWithGoogle}
            type="submit"
            className="w-full bg-white text-black p-2 mt-4 rounded-md border border-black"
          >
            sign with google
          </button>
          <button
            type="submit"
            className="w-full bg-white text-black p-2 mt-4 rounded-md border border-black"
          >
            sign with facebook
          </button>
          <button
            type="submit"
            className="w-full bg-white text-black p-2 mt-4 rounded-md border border-black"
          >
            sign with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
