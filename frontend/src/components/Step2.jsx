// src/components/Step2.js

import React, { useRef, useState, useEffect } from "react";
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../redux/AuthReducer";
import { closeSignUpPage } from "../redux/ModalReducer.js";
import axios from "axios";
// import { setStep } from "../redux/SignupReducer"; // Assuming you have a SignupReducer managing step state

const Step2 = (props) => {
  const user = useSelector((state) => state.auth.user);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const verifyModalref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        verifyModalref.current &&
        !verifyModalref.current.contains(event.target)
      ) {
        props.setStep(1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(props.countryCode, props.phoneNumber);
    const fullPhoneNumber = props.countryCode + props.phoneNumber;
    const formData = { phoneNumber: fullPhoneNumber, enteredOtp: otp };
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:3000/verify",
        formData
      );
      if (!response.data.isUserExist) {
        props.setStep(3); // Proceed to the final step if OTP is verified
      } else {
        const { user, token } = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        dispatch(setCredentials({ user, accessToken: token }));
        dispatch(closeSignUpPage());
      }
    } catch (error) {
      console.log("shemsu");
    }
  };

  return (
    <div
      ref={verifyModalref}
      className=" relative overflow-y-scroll w-2/5 h-5/6 top-1/2 left-1/2 rounded-xl border shadow-md bg-white -translate-x-1/2 -translate-y-1/2"
    >
      <div className="m-4">
        <h1 className="center">Enter the code</h1>
        <Form onSubmit={verifyOtp}>
          <div className="mb-4 flex items-center">
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
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
  );
};

export default Step2;
