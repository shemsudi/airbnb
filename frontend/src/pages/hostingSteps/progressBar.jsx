import React from "react";

const ProgressBar = ({ step, pos }) => {
  return (
    <div className="flex gap-2 h-1">
      <div className="bg-gray-300 w-full">
        <div
          className="bg-black h-full"
          style={{
            width:
              step > 1 ? "100%" : step === 1 ? `${(pos / 5) * 100}%` : "0%",
          }}
        ></div>
      </div>

      <div className="bg-gray-300 w-full">
        <div
          className="bg-black h-full"
          style={{
            width:
              step > 2 ? "100%" : step === 2 ? `${(pos / 5) * 100}%` : "0%",
          }}
        ></div>
      </div>

      <div className="bg-gray-300 w-full">
        <div
          className="bg-black h-full"
          style={{
            width:
              step > 3 ? "100%" : step === 3 ? `${(pos / 7) * 100}%` : "0%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
