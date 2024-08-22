import React from "react";
import { useState } from "react";

const SearchBar = ({ selectedOption }) => {
  const [where, setWhere] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  return (
    <div
      className={` flex justify-between self-center  border p-2  rounded-full shadow-md max-w-3xl divide-x-2`}
    >
      <div className="flex flex-col pl-6  ">
        <h1 className="text-sm">Where</h1>
        <input
          className="focus:ring-0 focus:outline-none w-full "
          type="text"
          placeholder="serach destination"
        />
      </div>
      {selectedOption === "stays" ? (
        <div className="flex divide-x-2">
          <div className="flex flex-col  pl-6 ">
            <h1 className="text-sm">Check in</h1>
            <input
              className="focus:ring-0  w-full "
              type="text"
              placeholder="Add dates"
            />
          </div>
          <div className="flex flex-col pl-6  ">
            <h1 className="text-sm">Check out</h1>
            <input
              className="focus:ring-0  w-full "
              type="text"
              placeholder="Add dates"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col  pl-6 ">
          <h1 className="text-sm">When</h1>
          <input
            className="focus:ring-0  w-full "
            type="text"
            placeholder="Add dates"
          />
        </div>
      )}

      <div className="flex pl-6">
        <div className="flex flex-col   ">
          <h1 className="text-sm">Who</h1>
          <input
            className="focus:ring-0  w-full "
            type="text"
            placeholder="Add guests"
          />
        </div>

        <button className="bg-primary rounded-full text-white p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
