import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../../redux/action.js";
import { closeVerifyPage, openLoginPage } from "../../redux/ModalReducer.js";
// redux
import {
  selectCurrentError,
  selectLoading,
  setErrors,
} from "../../redux/AuthReducer.js";
//custom components
import CloseIcon from "../icons/closeIcon.jsx";
import Button from "../buttons/button.jsx";
import BackIcon from "../icons/backIcon.jsx";

const Step2 = (props) => {
  // const user = useSelector((state) => state.auth.user);
  const [otp, setOtp] = useState("");
  const errors = useSelector(selectCurrentError) || {};
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const verifyModalref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        verifyModalref.current &&
        !verifyModalref.current.contains(event.target)
      ) {
        backToStep1();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    console.log(props.countryCode, props.phoneNumber);
    const fullPhoneNumber = props.countryCode + props.phoneNumber;
    const formData = { phoneNumber: fullPhoneNumber, enteredOtp: otp };
    console.log(formData);

    try {
      await dispatch(verifyOtp(formData));
    } catch (error) {
      setErrors(error);
    }
  };
  function backToStep1() {
    dispatch(closeVerifyPage());
    dispatch(openLoginPage());
    dispatch(setErrors({}));
  }

  return (
    <div
      ref={verifyModalref}
      className=" relative   w-1/3 top-1/2 left-1/2 rounded-xl border shadow-md bg-white -translate-x-1/2 -translate-y-1/2"
    >
      <div className=" flex flex-col">
        <div className="flex p-3 justify-between ">
          <Button onClick={backToStep1} children={<BackIcon />}></Button>

          <div>Confirm your Number</div>
          <div></div>
        </div>
        <hr />
        <div className="flex flex-col p-3">
          <p className="text-sm m-2">
            Enter the code we sent over SMS to{" "}
            {props.countryCode + " " + props.phoneNumber}:
          </p>

          <Form>
            <div className="mb-4 flex flex-col items-start">
              <input
                type="text"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-3 w-40 ml-2 p-2  border border-gray-300 rounded-md"
                maxLength={6}
              />
              {errors.Otp && (
                <div className="text-red-500 text-sm p-2 ">{errors.Otp}</div>
              )}
            </div>
          </Form>
        </div>

        <hr />
        <div className="flex m-1   justify-between p-3">
          <Link onClick={backToStep1} className="underline self-center">
            More Options
          </Link>
          <button
            className=" bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-xl  "
            onClick={handleVerifyOtp}
          >
            continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
