// src/components/Step3.js

import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUpPage, openLoginPage } from "../../redux/ModalReducer";
// import { setErrors } from "../redux/errorReducer";
import { registerUser } from "../../redux/action";
import {
  selectCurrentError,
  selectLoading,
  setErrors,
} from "../../redux/AuthReducer";

//custom components
import Button from "../buttons/button";
import BackIcon from "../icons/backIcon";
import RegisterForm from "../forms/registerForm";
const Step3 = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [optOutMarketing, setOptOutMarketing] = useState(false); // New state for the checkbox
  const errors = useSelector(selectCurrentError) || {};
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const completeModalref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        completeModalref.current &&
        !completeModalref.current.contains(event.target)
      ) {
        props.setStep(1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    const fullPhoneNumber = props.countryCode + props.phoneNumber;

    const formData = {
      phoneNumber: fullPhoneNumber,
      firstName,
      lastName,
      email,
      birthday,
      optOutMarketing,
    };

    try {
      dispatch(registerUser(formData));
    } catch (error) {
      dispatch(setErrors(error));
    }
  };
  function backToStep2() {
    dispatch(closeSignUpPage());
    dispatch(openLoginPage());
  }
  return (
    <div
      ref={completeModalref}
      className=" relative max-w-xl  h-5/6 top-1/2 left-1/2 rounded-xl border shadow-md bg-white -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between p-3 mb-1">
          <Button onClick={backToStep2} children={<BackIcon />}></Button>
          <div>Finsh singning up</div>
          <div></div>
        </div>
        <hr />
        <div className="flex flex-col p-3    overflow-y-scroll">
          <RegisterForm
            handleRegistrationSubmit={handleRegistrationSubmit}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            birthday={birthday}
            setBirthday={setBirthday}
            errors={errors}
            loading={loading}
          />
          <hr />
          <div className="mt-3 text-sm text-gray-700 mb-3">
            Airbnb will send you members-only deals, inspiration, marketing
            emails, and push notifications. You can opt out of receiving these
            at any time in your account settings or directly from the marketing
            notification.
          </div>
          <div className="flex items-center mb-4">
            <input
              id="optOutMarketing"
              name="optOutMarketing"
              type="checkbox"
              checked={optOutMarketing}
              onChange={(e) => setOptOutMarketing(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="optOutMarketing" className="text-sm text-gray-700">
              I don’t want to receive marketing messages from Airbnb.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
