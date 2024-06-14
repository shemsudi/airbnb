// src/components/Step1.js

import React, { useState, useRef, useEffect } from "react";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";

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
  const [countryCode, setCountryCode] = useState("+1");
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
        const data = await response.json();
        props.setStep(2);
        console.log(data.token);
        props.setToken(data.token); // Set token in the parent component or Redux
      } else {
        console.error("Error:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      ref={signupModalref}
      className=" relative overflow-y-scroll w-2/5 h-5/6 top-1/2 left-1/2 rounded-xl border shadow-md bg-white -translate-x-1/2 -translate-y-1/2"
    >
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
      </div>{" "}
    </div>
  );
};

export default Step1;
