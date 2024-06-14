import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUpPage, selectModals } from "../redux/ModalReducer.js";

import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [token, setToken] = useState("");
  const verifyModalref = useRef(null);
  const completeModalref = useRef(null);

  const dispatch = useDispatch();
  const { isSignUpPageOpen } = useSelector(selectModals);

  console.log(step);

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    const formData = { token, name, email, birthday };
    try {
      const response = await fetch(
        "http://localhost:3000/complete-registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        dispatch(closeSignUpPage());

        console.log("Registration successful");
      } else {
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error, "hello");
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    const formData = { token, enteredOtp: otp };

    try {
      const response = await fetch("http://localhost:3000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        if (!data.isUserExist) {
          setStep(3); // Proceed to the final step if OTP is verified
        } else {
          dispatch(closeSignUpPage());
        }
      } else {
        console.error("Error:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
        const data = await response.json();
        setToken(data.token);
        setStep(2);
      } else {
        console.error("Error:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const setShowSignupage = () => {
    dispatch(closeSignUpPage());
  };

  return (
    isSignUpPageOpen && (
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-60 z-10`}
      >
        {step === 1 && (
          <Step1
            setPhoneNumber={setPhoneNumber}
            setCountryCode={setCountryCode}
            setStep={setStep}
            setToken={setToken}
            setShowSignupage={setShowSignupage}
          />
        )}
        {step === 2 && <Step2 setStep={setStep} phoneNumber countryCode />}
        {step === 3 && <Step3 setStep={setStep} phoneNumber countryCode />}
        {/* {step === 1 && <Login />}
          {step === 2 && (
            <div ref={verifyModalref} className="m-4">
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
          )}
          {step === 3 && (
            <div ref={completeModalref}>
              <form onSubmit={handleRegistrationSubmit}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                />
                <input
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  placeholder="Birthday"
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <button type="submit">Register</button>
              </form>
            </div> */}
        {/* )} */}
      </div>
    )
  );
};

export default Signup;
