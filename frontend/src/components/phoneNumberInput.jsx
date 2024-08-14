import React from "react";

const PhoneNumberInput = ({
  countryCode,
  errors,
  phoneNumber,
  setPhoneNumber,
}) => {
  return (
    <div className="flex flex-col  pl-2 border border-t-0 border-gray-300 rounded-md rounded-l-none 	">
      <label
        htmlFor="phoneNumber"
        className={`text-gray-500 text-sm ${
          errors.phoneNumber ? "text-red-700" : ""
        }`}
      >
        Phone number
      </label>
      <div className="flex">
        <span className="mr-2">{countryCode}</span>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
