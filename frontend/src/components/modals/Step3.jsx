// src/components/Step3.js

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUpPage, openLoginPage } from "../../redux/ModalReducer";
// import { setErrors } from "../redux/errorReducer";
import { registerUser } from "../../redux/action";
import {
  selectCurrentError,
  selectLoading,
  setErrors,
} from "../../redux/AuthReducer";
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
            {errors.firstName && (
              <div className="flex gap-3  mb-4 border border-gray-300  p-2 rounded-xl">
                <svg
                  className="w-10 h-10 fill-red-800 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
                <div className="flex flex-col">
                  <h1>Let's try that again</h1>
                  <p className=" text-sm text-gray-500">{errors.firstName}</p>
                </div>
              </div>
            )}
            <div className="mb-3">Legal name</div>
            <div className="flex flex-col border border-gray-300 rounded-md p-1">
              <label
                htmlFor="firstName"
                className={`text-gray-500 text-sm ${
                  errors.firstName ? "text-red-700" : ""
                }`}
              >
                First name on id{" "}
              </label>
              <input
                className="focus:outline-none focus:ring-0"
                id="firstName"
                name="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />
            </div>
            <div className="flex flex-col border border-t-0  border-gray-300 rounded-md rounded-l-none  p-1 ">
              <label
                htmlFor="lastName"
                className={`text-gray-500 text-sm ${
                  errors.firstName && errors.lastName ? "text-red-700" : ""
                }`}
              >
                Last name on id{" "}
              </label>
              <input
                className="focus:outline-none focus:ring-0"
                id="lastName"
                name="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
              />
            </div>
            {errors.firstName && (
              <div className="flex mb-4">
                <svg
                  className="w-3 h-3 self-center fill-red-800 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              </div>
            )}

            <div className="mb-2 mt-3">Date of Birth</div>
            <div className="flex flex-col border border-gray-300 rounded-md p-1">
              <label
                htmlFor="birthday"
                className={`text-sm text-gray-500 ${
                  errors.birthday ? "text-red-500" : ""
                }  `}
              >
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
            {errors.birthday && (
              <div className="flex mb-4">
                <svg
                  className="w-5 h-5 self-start pt-1 fill-red-800 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
                <p className="text-red-500 text-sm">{errors.birthday}</p>
              </div>
            )}
            {!errors.birthday && (
              <p className="text-sm text-gray-500 mb-4">
                To sign up, you need to be at least 18. Your birthday won’t be
                shared with other people who use Airbnb.
              </p>
            )}
            <div className="mb-2">Contact info</div>
            <div className="flex flex-col border border-gray-300 rounded-md p-1">
              <label
                htmlFor="email"
                className={`text-sm text-gray-500 ${
                  errors.birthday ? "text-red-500" : ""
                }  `}
              >
                Email{" "}
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
            {errors.email && (
              <div className="flex mb-4">
                <svg
                  className="w-3 h-3 self-center fill-red-800 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
                <p className="text-red-500 text-sm">{errors.email}</p>
              </div>
            )}
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

            <button
              disabled={loading}
              className={` ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }bg-pink-600 p-2 rounded-xl mb-3 hover:bg-pink-700  `}
              type="submit"
            >
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
