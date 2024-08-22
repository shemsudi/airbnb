import React from "react";
import { useState } from "react";

const SearchBar = ({ selectedOption }) => {
  const [where, setWhere] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  return (
    <div
      className={` flex justify-between self-center  border rounded-full shadow-md max-w-3xl `}
    >
      <div className="flex group">
        <div className="input-container  group  hover:bg-gray-100">
          <h1 className="text-sm">Where</h1>
          <input
            className="search-input group-hover:bg-gray-100"
            type="text"
            placeholder="serach destination"
          />
        </div>
        <div className="border-r-2 my-3 group-hover:border-none"></div>
      </div>

      {selectedOption === "stays" ? (
        <div className="flex group">
          <div className="input-container group hover:bg-gray-100">
            <h1 className="text-sm">Check in</h1>
            <input
              className="search-input group-hover:bg-gray-100"
              type="text"
              name="dates"
              placeholder="Add dates"
            />
          </div>
          <div className="border-r-2 my-3 group-hover:border-none"></div>
        </div>
      ) : (
        <div className="flex group">
          <div className="input-container group hover:bg-gray-100">
            <h1 className="text-sm">Check in</h1>
            <input
              className="search-input group-hover:bg-gray-100"
              type="text"
              name="dates"
              placeholder="Add dates"
            />
          </div>
          <div className="border-r-2 my-3 group-hover:border-none"></div>
        </div>
      )}

      {selectedOption === "stays" && (
        <div className="flex group">
          <div className="input-container group hover:bg-gray-100">
            <h1 className="text-sm">Check out</h1>
            <input
              className="search-input group-hover:bg-gray-100"
              type="text"
              name="dates"
              placeholder="Add dates"
            />
          </div>
          <div className="border-r-2 my-3 group-hover:border-none"></div>
        </div>
      )}

      <div className="flex rounded-full justify-between group hover:bg-gray-100 ">
        <div className="flex flex-col pl-6 py-2  ">
          <h1 className="text-sm">Who</h1>
          <input
            className="search-input group-hover:bg-gray-100"
            type="text"
            placeholder="Add guests"
          />
        </div>
        <div className=" pr-2 self-center">
          <button className="bg-primary rounded-full p-2   text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
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
    </div>
  );
};

export default SearchBar;
