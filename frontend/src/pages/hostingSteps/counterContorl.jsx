import React from "react";

const CounterControl = ({ label, value, increment, decrement }) => {
  return (
    <div className="py-1 border-b">
      <div className="flex justify-between py-3">
        <p>{label}</p>
        <div className="flex gap-3">
          <button onClick={decrement}>
            <div className="border border-gray-700 w-6 h-6 rounded-full text-center">
              -
            </div>
          </button>
          <div>{value}</div>
          <button onClick={increment}>
            <div className="border border-gray-700 w-6 h-6 rounded-full text-center">
              +
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterControl;
