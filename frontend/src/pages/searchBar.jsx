import React from "react";

const SearchBar = (props) => {
  return (
    <div className="flex justify-center transition ease-in duration-1000 ">
      <div className="flex border p-3 rounded-full shadow-md  gap-4 w-3/4 ">
        <div className="flex self-center w-1/3 ">Anywhere</div>
        <div className="border-r-2 "></div>
        <div className="flex self-center w-1/3">Any week</div>
        <div className="border-r-2"></div>
        <div className="flex self-center w-1/3">Add guests</div>
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
    </div>
  );
};

export default SearchBar;
