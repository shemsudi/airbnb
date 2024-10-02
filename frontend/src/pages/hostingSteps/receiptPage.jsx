import React from "react";
import HostHeader from "./hostHeader";
import FooterNavigation from "./footerNavigation";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ReceiptPage = () => {
  const host = useSelector((state) => state.host.host);
  return (
    <div className="h-screen flex flex-col">
      <HostHeader />
      <div className="grow flex justify-center items-center">
        <div className="flex flex-col w-[500px]">
          <h1 className="text-4xl font-medium">Review your Listing</h1>
          <p className="text-neutral-600 mt-4">
            Here's what we'll show to guests. Make sure everything looks good.
          </p>
          <div className="flex w-full gap-4">
            <div className="flex flex-col w-1/2 p-2 shadow-lg rounded-lg">
              {" "}
              <img className="" src={host.photos[0]} alt="" />
              <div className="flex justify-between">
                <small>{host.title}</small>
                <small>
                  New <FontAwesomeIcon icon={faStar} />{" "}
                </small>
              </div>
              <small>{host.price}</small>
            </div>
          </div>
        </div>
      </div>
      <FooterNavigation />
    </div>
  );
};

export default ReceiptPage;
