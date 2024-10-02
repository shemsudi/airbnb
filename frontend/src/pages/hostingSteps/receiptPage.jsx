import React from "react";
import HostHeader from "./hostHeader";
import FooterNavigation from "./footerNavigation";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const ReceiptPage = () => {
  const navigate = useNavigate();
  const host = useSelector((state) => state.host.host);
  const firstImage = host?.photos?.length > 0 ? host.photos[0] : null;
  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/legal`);
  };
  const onNext = () => {
    navigate(`/became-a-host/${host.uuid}/publish-celebration`);
  };

  return (
    <div className="h-screen flex flex-col">
      <HostHeader />
      <div className="grow flex justify-center items-center p-3">
        <div className="flex flex-col max-w-[650px]">
          <h1 className="text-4xl font-medium">Review your listing</h1>
          <p className="text-neutral-600 mt-4 mb-8">
            Here's what we'll show to guests. Make sure everything looks good.
          </p>
          <div className="flex flex-col sm:flex-row w-full gap-8">
            <div className="flex flex-col relative w-full  sm:w-2/5 p-2 shadow-lg rounded-lg">
              {" "}
              <img
                className="rounded-lg grow object-cover hover:cursor-pointer"
                src={firstImage}
                alt=""
              />
              <div className=" absolute top-4 left-4 bg-white rounded-md  p-1">
                Show preview
              </div>
              <div className="flex justify-between mt-2">
                <small>{host.title}</small>
                <small>
                  New <FontAwesomeIcon icon={faStar} />{" "}
                </small>
              </div>
              <small>
                $ <span className="font-bold">{host.price}</span> night
              </small>
            </div>
            <div className="flex flex-col w-full  sm:w-3/5  gap-4">
              <h1 className="text-xl">What's next?</h1>
              <div className="flex gap-3">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M25 30H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h5a5 5 0 0 1 8 0h5a5 5 0 0 1 5 5v18a5 5 0 0 1-5 5zM7 4a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-6.11l-.29-.5a3 3 0 0 0-5.2 0l-.29.5zm17.41 8L23 10.59l-9.5 9.5-4.5-4.5L7.59 17l5.91 5.91zM16 6a1 1 0 1 0-1-1 1 1 0 0 0 1 1z" />
                </svg>
                <div className="flex flex-col">
                  <h1 className="text-lg">Confirm a few details and publish</h1>
                  <small className="text-gray-600">
                    We’ll let you know if you need to verify your identity or
                    register with the local government.
                  </small>
                </div>
              </div>
              <div className="flex gap-3">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M11.67 0v1.67h8.66V0h2v1.67h6a2 2 0 0 1 2 1.85v16.07a2 2 0 0 1-.46 1.28l-.12.13L21 29.75a2 2 0 0 1-1.24.58H6.67a5 5 0 0 1-5-4.78V3.67a2 2 0 0 1 1.85-2h6.15V0zm16.66 11.67H3.67v13.66a3 3 0 0 0 2.82 3h11.18v-5.66a5 5 0 0 1 4.78-5h5.88zm-.08 8h-5.58a3 3 0 0 0-3 2.82v5.76zm-18.58-16h-6v6h24.66v-6h-6v1.66h-2V3.67h-8.66v1.66h-2z" />
                </svg>
                <div className="flex flex-col">
                  <h1 className="text-lg">Set up your calendar</h1>
                  <small className="text-gray-600">
                    Choose which dates your listing is available. It will be
                    visible 24 hours after you publish.
                  </small>
                </div>
              </div>
              <div className="flex gap-3">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M20.8 4.8a4.54 4.54 0 0 1 6.57 6.24l-.16.17L9 29.4a2 2 0 0 1-1.24.58L7.6 30H2v-5.59a2 2 0 0 1 .47-1.28l.12-.13zM19 9.4l-15 15V28h3.59l15-15zm6.8-3.2a2.54 2.54 0 0 0-3.46-.13l-.13.13L20.4 8 24 11.59l1.8-1.8c.94-.94.98-2.45.12-3.45z" />{" "}
                </svg>
                <div className="flex flex-col">
                  <h1 className="text-lg">Adjust your settings</h1>
                  <small className="text-gray-600">
                    Set house rules, select a cancellation policy, choose how
                    guests book, and more.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterNavigation onBack={onBack} onNext={onNext} step={3} pos={6} />
    </div>
  );
};

export default ReceiptPage;
