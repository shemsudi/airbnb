import React from "react";

export const Logo = () => {
  return (
    <div className="flex gap-2 group justify-center items-center cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 -rotate-90 text-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
        />
      </svg>
      <h1 className="font-bold text-primary text-2xl">airbnb</h1>
    </div>
  );
};

export default Logo;
