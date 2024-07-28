import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUpPage, selectModals } from "../redux/ModalReducer.js";

import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";

const Signup = () => {
  const [step, setStep] = useState(1);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+251");

  const dispatch = useDispatch();
  const { isSignUpPageOpen } = useSelector(selectModals);

  console.log(step);

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
            setShowSignupage={setShowSignupage}
          />
        )}
        {step === 2 && (
          <Step2
            setStep={setStep}
            phoneNumber={phoneNumber}
            countryCode={countryCode}
          />
        )}
        {step === 3 && (
          <Step3
            setStep={setStep}
            phoneNumber={phoneNumber}
            countryCode={countryCode}
          />
        )}
      </div>
    )
  );
};

export default Signup;
