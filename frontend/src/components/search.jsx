import React from "react";

const Search = (props) => {
  return (
    <div className="flex gap-2 border rounded-full py-2 px-4 shadow-md translate-x-8">
      <div className="flex self-center">Anywhere</div>
      <div className="border-r-2"></div>
      <div className="flex self-center">Any week</div>
      <div className="border-r-2"></div>
      <div className="flex self-center">Add guests</div>
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

export default Search;
