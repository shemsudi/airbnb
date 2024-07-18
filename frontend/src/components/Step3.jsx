// src/components/Step3.js

import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSignUpPage } from "../redux/ModalReducer";
import { setCredentials } from "../redux/AuthReducer";
import { setErrors } from "../redux/errorReducer";
import { Form } from "react-router-dom";
import { resolveComponent } from "vue";

const Step3 = (props) => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const completeModalref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        completeModalref.current &&
        !completeModalref.current.contains(event.target)
      ) {
        props.setStep(2);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    const fullPhoneNumber = props.phoneNumber + props.countryCode;

    const formData = { phoneNumber: fullPhoneNumber, name, email, birthday };

    // console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:3000/complete-registration",
        formData
      );
      if ((response.status = 201)) {
        const { user, token } = response.data;
        dispatch(setCredentials({ user, accessToken: token }));
        dispatch(closeSignUpPage());
        console.log("Registration successful");
      } else {
        useDispatch(setErrors(response.errors));
        console.error("Registration failed:", response.errors);
      }
    } catch (error) {
      useDispatch(setErrors(error));

      console.error("Error:", error);
    }
  };

  return (
    <div
      ref={completeModalref}
      className=" relative overflow-y-scroll w-2/5 h-5/6 top-1/2 left-1/2 rounded-xl border shadow-md bg-white -translate-x-1/2 -translate-y-1/2"
    >
      <div>
        <form onSubmit={handleRegistrationSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            placeholder="Birthday"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Step3;
