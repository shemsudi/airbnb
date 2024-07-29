// src/components/Step3.js

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSignUpPage } from "../redux/ModalReducer";
import { setCredentials } from "../redux/AuthReducer";
// import { setErrors } from "../redux/errorReducer";
import { Form } from "react-router-dom";
import axios from "axios";

const Step3 = (props) => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [optOutMarketing, setOptOutMarketing] = useState(false); // New state for the checkbox

  const [errors, setErrors] = useState({});
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
    const fullPhoneNumber = props.countryCode + props.phoneNumber;

    const formData = { phoneNumber: fullPhoneNumber, name, email, birthday };

    try {
      const response = await axios.post(
        "http://localhost:3000/complete-registration",
        formData
      );
      if (response.status === 201) {
        const { user, token } = response.data;
        dispatch(setCredentials({ user, accessToken: token }));
        dispatch(closeSignUpPage());
        console.log("succesfully registered");
      } else {
        dispatch(setErrors(response.errors));
        console.error("Registration failed:", response.errors);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        // dispatch(setErrors(error.response.data));
        setErrors(error.response.data);
        console.log(error.response.data);
      } else {
        console.error("Error:", error);
      }
    }
  };
  function backToStep2() {
    props.setStep(2);
  }
  return (
    <div
      ref={completeModalref}
      className=" relative w-1/3 h-5/6 top-1/2 left-1/2 rounded-xl border shadow-md bg-white -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between p-3 mb-1">
          <button onClick={backToStep2}>
            <svg
              className="w-5 h-5 self-center border rounded-full border-gray-500 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <div>Finsh singning up</div>
          <div></div>
        </div>
        <hr />
        <div className="flex flex-col p-3    overflow-y-scroll">
          <form
            className="flex flex-col"
            onSubmit={handleRegistrationSubmit}
            noValidate
          >
            <div className="mb-3">Legal name</div>
            <div className="flex flex-col border border-gray-300 rounded-md p-1">
              <label htmlFor="firstName" className="text-sm text-gray-500">
                First name on Id
              </label>
              <input
                className="focus:outline-none focus:ring-0"
                id="firstName"
                name="firstName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name"
              />
            </div>
            <div className="flex flex-col border border-t-0  border-gray-300 rounded-md rounded-l-none  p-1 mb-3">
              <label htmlFor="firstName" className="text-sm text-gray-500">
                Last name on Id
              </label>
              <input
                className="focus:outline-none focus:ring-0"
                id="lastName"
                name="lastName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Last name"
              />
            </div>

            <div className="mb-2">Date of Birth</div>
            <div className="flex flex-col border border-gray-300 rounded-md p-1">
              <label htmlFor="birthday" className="text-sm text-gray-500">
                Birthday{" "}
              </label>
              <input
                className="focus:outline-none focus:ring-0"
                id="birthday"
                name="birthday"
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                placeholder="Birthday"
              />
            </div>
            <p className="text-sm text-gray-500 mb-4">
              To sign up, you need to be at least 18. Your birthday won’t be
              shared with other people who use Airbnb.
            </p>
            <div className="mb-2">Contact info</div>
            <div className="flex flex-col border border-gray-300 rounded-md p-1">
              <label htmlFor="email" className="text-sm text-gray-500">
                Email
              </label>
              <input
                className="focus:outline-none focus:ring-0"
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="text-sm text-gray-500 mb-4">
              We'll email you trip confirmations and receipts.
            </div>
            <div className=" flex  mb-4">
              <p className="text-sm  text-gray-700">
                By selecting Agree and continue, I agree to Airbnb’s{" "}
                <span>
                  <Link className="underline text-blue-500">
                    Terms of Service,
                  </Link>
                  <Link className="underline text-blue-500">
                    Payments Terms of Service
                  </Link>
                  , and
                  <Link className="underline text-blue-500">
                    Nondiscrimination Policy
                  </Link>{" "}
                  and acknowledge the{" "}
                  <Link className="underline text-blue-500">
                    Privacy Policy
                  </Link>
                </span>
                .
              </p>
            </div>

            <button className="bg-pink-600 p-2 rounded-xl mb-3 " type="submit">
              Agree and Continue
            </button>
          </form>
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
