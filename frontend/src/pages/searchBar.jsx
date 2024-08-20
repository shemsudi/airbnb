import React from "react";

const SearchBar = () => {
  return (
    <div
      className={` flex justify-between self-center  border p-2  rounded-full shadow-md `}
    >
      <div className="flex flex-col mx-4 ">
        <h1 className="text-sm">Where</h1>
        <input
          className="focus:ring-0 focus:outline-none w-40"
          type="text"
          placeholder="serach destination"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-sm">Check in</h1>
        <input
          className="focus:ring-0 focus:outline-none  w-40"
          type="text"
          placeholder="Add dates"
        />
      </div>
      <div className="flex flex-col  ">
        <h1 className="text-sm">Check out</h1>
        <input
          className="focus:ring-0 focus:outline-none  w-40"
          type="text"
          placeholder="Add dates"
        />
      </div>
      <div className="flex flex-col  ">
        <h1 className="text-sm">Who</h1>
        <input
          className="focus:ring-0 focus:outline-none  w-40"
          type="text"
          placeholder="Add guests"
        />
      </div>

      <button className="bg-primary rounded-3xl text-white p-1">
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
  );
};

export default SearchBar;
