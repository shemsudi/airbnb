import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginPage, selectModals } from "../redux/ModalReducer.js";
import { Form } from "react-router-dom";

const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+251", country: "Ethiopia" },

  // Add more country codes as needed
];

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const loginModalRef = useRef(null);
  const dispatch = useDispatch();
  const { isLoginPageOpen } = useSelector(selectModals);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginModalRef.current &&
        !loginModalRef.current.contains(event.target)
      ) {
        dispatch(closeLoginPage());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      phoneNumber,
      countryCode,
    };
    console.log(formData);

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      } else {
        console.error("Error:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-60 z-10 ">
      <div
        ref={loginModalRef}
        className="relative  overflow-y-scroll w-2/5 h-5/6 top-1/2 left-1/2 rounded-xl border shadow-md bg-white -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex justify-between p-4">
          <button
            data-modal-hide="default-modal"
            onClick={() => dispatch(closeLoginPage())}
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
          <span>Log in or sign up</span>
          <div></div>
        </div>
        <hr />

        <div className="p-4 font-bold">
          <h1 className="text-2xl">Welcome to Airbnb</h1>
        </div>
        <div className="p-4">
          <Form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="countryCode"
                className="block text-sm font-medium text-gray-700"
              >
                Country Code
              </label>
              <select
                id="countryCode"
                name="countryCode"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.country} ({country.code})
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4 flex items-center ">
              <span className="mr-2">{countryCode}</span>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onFocus={(e) => setCountryCode(countryCode)} // Ensure country code is displayed on focus
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
