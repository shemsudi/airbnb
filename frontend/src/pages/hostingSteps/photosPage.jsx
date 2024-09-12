import React from "react";
import HostHeader from "./hostHeader";
import FooterNavigation from "./footerNavigation";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import AddPhotos from "../../components/modals/addPhotos";

const PhotosPage = () => {
  const host = useSelector((state) => state.host.host);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const onNext = () => {
    console.log("Next");
  };
  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/amenities`);
  };

  return (
    <div className="h-screen flex flex-col">
      <HostHeader />
      <div className="flex-1 mx-5 md:mx-14 flex justify-center ">
        <div className="flex  flex-col  md:min-w-[500px] md:min-h-[500px] gap-10">
          <div className="flex flex-col gap-1 max-md:mt-6">
            <h1 className="text-2xl font-semibold">
              Add some photos of your house
            </h1>
            <small className="text-gray-500">
              You'll need 5 photos to get started. You can add more or make
              changes later{" "}
            </small>
          </div>
          <div className="flex flex-col justify-center mb-4 rounded-lg items-center gap-6 h-4/5 bg-gray-50 border border-dashed border-gray-700">
            <img
              className="w-40 h-40"
              src="https://a0.muscache.com/im/pictures/mediaverse/mys-amenities-n8/original/c83b2a87-3be4-43c9-ad47-12dd2aee24c4.jpeg"
              alt=""
            />
            <button
              onClick={() => setIsOpen(true)}
              className="px-3 py-1 border border-black bg-white rounded-lg"
            >
              Add photos
            </button>
          </div>
        </div>
      </div>
      <FooterNavigation step={2} pos={2} onBack={onBack} onNext={onNext} />
      {isOpen && <AddPhotos isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default PhotosPage;
