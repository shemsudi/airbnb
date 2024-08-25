import React from "react";

const AirbnbSetupInfo = () => {
  return (
    <div className=" flex flex-col items-start  lg:items-center  lg:px-40 mb-40">
      <h1 className="py-8 px-5 text-2xl lg:text-4xl font-medium tracking-wide">
        Airbnb it easily with Airbnb Setup
      </h1>
      <img
        className=""
        src="https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq"
        alt="shemsu"
      />
      <div className="flex px-5 flex-col lg:flex-row lg:gap-4 gap-6  mt-6 ">
        <div className="flex  flex-col gap-2 ">
          <h1 className="font-semibold text-sm">
            One-to-one guidance from a Superhost
          </h1>
          <small className="text-gray-600">
            We’ll match you with a Superhost in your area, who’ll guide you from
            your first question to your first guest—by phone, video call, or
            chat.
          </small>
        </div>
        <div className="flex  flex-col gap-2">
          <h1 className="font-semibold text-sm">
            An experienced guest for your first booking
          </h1>
          <small className="text-gray-600">
            For your first booking, you can choose to welcome an experienced
            guest who has at least three stays and a good track record on
            Airbnb.
          </small>
        </div>
        <div className="flex  flex-col gap-2">
          <h1 className="font-semibold text-sm">
            Specialized support from Airbnb
          </h1>
          <small className="text-gray-600">
            New Hosts get one-tap access to specially trained Community Support
            agents who can help with everything from account issues to billing
            support.
          </small>
        </div>
      </div>
    </div>
  );
};

export default AirbnbSetupInfo;
