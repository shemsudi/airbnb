import React from "react";
import { Link } from "react-router-dom";
const HostPromotionSection = () => {
  return (
    <div className="xl:px-80 lg:px-40 md:px-20 px-5 w-full flex flex-col items-center mb-24">
      <h1 className="font-medium text-4xl">Need a place where you can host?</h1>
      <h1 className="font-medium text-4xl mb-6">
        Try Airbnb-friendly apartments
      </h1>
      <div className="flex gap-4 w-full items-center justify-center">
        <div className="flex flex-col items-center ">
          {" "}
          <img
            className="rounded-lg "
            src="https://a0.muscache.com/im/pictures/mediaverse/A4RE-PLP/original/88139d34-f308-43fc-908f-a07b893d794b.jpeg?im_w=1200&im_q=highq"
            alt=""
          />
          <h1 className="pt-1 text-sm">Nani</h1>
          <small className="text-xxl">Resident & Host Dallas, TX</small>
        </div>
        <div className="flex flex-col items-center ">
          <img
            className="rounded-lg "
            src="https://a0.muscache.com/im/pictures/mediaverse/A4RE-PLP/original/46faca6b-df8a-4b76-9d45-d8bac7151141.jpeg?im_w=1200&im_q=highq"
            alt=""
          />
          <h1 className="pt-1 text-sm">Jeffer and Amador</h1>
          <small className="text-xxl">Residents & Hosts San Diego, CA</small>
        </div>
        <div className="flex flex-col items-center ">
          <img
            className="rounded-lg"
            src="https://a0.muscache.com/im/pictures/mediaverse/A4RE-PLP/original/2dbad1eb-dc50-4ed4-b796-ebcf2b236139.jpeg?im_w=1200&im_q=highq"
            alt=""
          />
          <h1 className="pt-1 text-sm">Buddy</h1>
          <small className="text-xxl">Resident & Host Denver, CO</small>
        </div>
      </div>
      <div className="mt-8 text-base space-x-4 mb-8 text-center max-lg:px-10 ">
        We’ve partnered with apartment buildings across the US so you can rent a
        place to live and host on Airbnb part-time. The typical host earned{" "}
        <em className="font-bold">$3650/year </em>
        and hosted 28 nights. *
      </div>
      <small className=" text-xxs px-10 text-center">
        *The typical Host earnings amount represents the median amount of
        earnings for Hosts in US Airbnb-friendly apartment buildings between
        Jan1 - Dec 31, 2023, according to internal Airbnb data for revenue
        earned by Hosts.
      </small>
      <div className="px-4 py-1 border  border-black mt-6 rounded-lg">
        <Link
          className="w-full text-xs"
          to={"/airbnb-friendly/apartments/san-francisco-ca"}
        >
          {" "}
          Explore cities{" "}
        </Link>
      </div>
    </div>
  );
};

export default HostPromotionSection;
