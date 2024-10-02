import React from "react";
import Logo from "../assets/logos";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHost, clearHost } from "../redux/HostReducer";

const BecameAhost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    console.log("clicked");
    try {
      dispatch(clearHost());
      localStorage.removeItem("currentHost");
      const response = await axios.get(
        "http://localhost:3000/host/generate-uuid"
      ); //"http://localhost:3000/login"
      const data = response.data;

      dispatch(addHost(data));
      localStorage.setItem("currentHost", JSON.stringify(data));
      navigate(`/became-a-host/${data.uuid}/about-your-place`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-between px-12 pt-8 sticky top-0 left-0 bg-white">
        <Link to={"/host/homes"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-label="Airbnb homepage"
            role="img"
            focusable="false"
            className=" w-7 h-7"
          >
            <path d="M16 1c2 0 3.46.96 4.75 3.27l.53 1.02a424.58 424.58 0 0 1 7.1 14.84l.15.35c.67 1.6.9 2.48.96 3.4v.41l.01.23c0 4.06-2.88 6.48-6.36 6.48-2.22 0-4.55-1.26-6.7-3.39l-.26-.26-.17-.17h-.02l-.17.18c-2.05 2.1-4.27 3.42-6.42 3.62l-.28.01-.26.01c-3.48 0-6.36-2.42-6.36-6.48v-.47c.03-.93.23-1.77.83-3.24l.22-.53c.97-2.3 6.08-12.98 7.7-16.03C12.55 1.96 14 1 16 1zm0 2c-1.24 0-2.05.54-2.99 2.21l-.52 1a422.57 422.57 0 0 0-7.03 14.7l-.35.84a6.86 6.86 0 0 0-.6 2.24l-.01.33v.2C4.5 27.4 6.41 29 8.86 29c1.77 0 3.87-1.24 5.83-3.35-2.3-2.94-3.86-6.45-3.86-8.91 0-2.92 1.94-5.39 5.18-5.42 3.22.03 5.16 2.5 5.16 5.42 0 2.45-1.56 5.96-3.86 8.9 1.97 2.13 4.06 3.36 5.83 3.36 2.45 0 4.36-1.6 4.36-4.48v-.4a7.07 7.07 0 0 0-.72-2.63l-.25-.6C25.47 18.41 20.54 8.12 19 5.23 18.05 3.53 17.24 3 16 3zm.01 10.32c-2.01.02-3.18 1.51-3.18 3.42 0 1.8 1.18 4.58 2.96 7.04l.2.29.18-.24c1.73-2.38 2.9-5.06 3-6.87v-.22c0-1.9-1.17-3.4-3.16-3.42z"></path>
          </svg>
        </Link>
        <button className=" border py-1 px-3 rounded-2xl border-gray-300 hover:border-gray-800">
          Exit
        </button>
      </div>
      <div className="flex flex-1 flex-col w-full md:flex-row px-5 md:px-32 gap-4 md:gap-2 overflow-y-scroll ">
        <div className="flex items-center w-full box-border md:w-1/2 text-2xl  md:text-5xl md:pl-4  md:pr-32 font-semibold">
          {" "}
          It's easy to get started on Airbnb{" "}
        </div>
        <div className="flex flex-col box-border w-full md:w-1/2 pl-0 md:pl-10 h-full">
          <div className="flex pt-6 md:pb-10 gap-2  border-b-2">
            <div className="font-bold">1</div>{" "}
            <div className=" flex flex-col">
              <h1 className="font-semibold">Tell us about your place</h1>
              <p className="text-gray-600">
                Share some basic info, like where it is and how many guests can
                stay.
              </p>
            </div>
            <div className="flex items-center">
              <img
                height={"112px"}
                width={"112px"}
                src="https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex pt-6  md:pb-10 gap-2  border-b-2 ">
            <div className="font-bold">2</div>{" "}
            <div className=" flex flex-col ">
              <h1 className="font-semibold">Make it stand out</h1>
              <p className="text-gray-600">
                Add 5 or more photos plus a title and description—we’ll help you
                out.
              </p>
            </div>
            <div className="flex items-center">
              <img
                height={"112px"}
                width={"112px"}
                src="https://a0.muscache.com/4ea/air/v2/pictures/bfc0bc89-58cb-4525-a26e-7b23b750ee00.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex pt-6 md:pb-10 gap-2 ">
            <div className="font-bold">3</div>{" "}
            <div className=" flex flex-col">
              <h1 className="font-semibold">Finish up and publish</h1>
              <p className="text-gray-600">
                Choose a starting price, verify a few details, then publish your
                listing.
              </p>
            </div>
            <div className="flex items-center">
              <img
                height={"112px"}
                width={"112px"}
                src="https://a0.muscache.com/4ea/air/v2/pictures/c0634c73-9109-4710-8968-3e927df1191c.jpg"
                alt=""
              />
            </div>
          </div>
          <div> </div>
          <div> </div>
        </div>
      </div>

      <div className="border-t-4  w-full  sticky bottom-0 left-0 z-100 bg-white px-6  py-3 border-gray-200">
        <div className=" w-full flex justify-end items-center ">
          <button
            onClick={handleClick}
            className="  rounded-md hover:transform hover:scale-95  bg-primary text-white px-6 py-2 max-md:w-full"
          >
            {" "}
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};
export default BecameAhost;
