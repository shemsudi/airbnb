import React, { useEffect } from "react";
import HostHeader from "./hostHeader";
import FooterNavigation from "./footerNavigation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAmenitiesState } from "../../redux/HostReducer";

import {
  amenitiesItems,
  uniqueAmenitiesItems,
  safetyAmenitiesItems,
} from "../../utils/types";
import axios from "axios";
import { updateAmenities } from "../../redux/hostActions";
const AmenitiesPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const host = useSelector((state) => state.host.host);
  const [amenities, setAmenites] = useState(host.amenities || []);
  const [uniqueAmenities, setUniqueAmenities] = useState(
    host.uniqueAmenities || []
  );
  const [safetyAmenities, setSafetyAmenities] = useState(
    host.safetyAmenities || []
  );
  useEffect(() => {
    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    if (currentHost && currentHost.amenities) {
      setAmenites(currentHost.amenities);
      setUniqueAmenities(currentHost.uniqueAmenities);
      setSafetyAmenities(currentHost.safetyAmenities);
    }
  }, []);

  const onNext = async () => {
    dispatch(
      updateAmenities({
        uuid: host.uuid,
        amenities: amenities,
        uniqueAmenities: uniqueAmenities,
        safetyAmenities: safetyAmenities,
      })
    );

    navigate(`/became-a-host/${host.uuid}/photos`);
  };
  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/stand-out`);
  };

  const HandleSelectedAmenities = (type) => {
    if (amenities.includes(type)) {
      setAmenites(amenities.filter((selected) => selected != type));
    } else {
      setAmenites([...amenities, type]);
    }
  };
  const HandleSelectedUniqueAmenities = (type) => {
    if (uniqueAmenities.includes(type)) {
      setUniqueAmenities(
        uniqueAmenities.filter((selected) => selected != type)
      );
    } else {
      setUniqueAmenities([...uniqueAmenities, type]);
    }
  };
  const HandleSelectedSafetyAmenities = (type) => {
    if (safetyAmenities.includes(type)) {
      setSafetyAmenities(
        safetyAmenities.filter((selected) => selected != type)
      );
    } else {
      setSafetyAmenities([...safetyAmenities, type]);
    }
  };
  return (
    <div className="h-full flex flex-col">
      <HostHeader />
      <div className="flex-1 mx-4 md:mx-10 flex  justify-center ">
        <div className="flex flex-col gap-6   mt-2 md:max-w-[500px]">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold">
              Tell guests what your place has to offer
            </h1>
            <small className="text-gray-500">
              You can add more amenities after you publish your listing.
            </small>
          </div>
          <h2>what about these guest favorites?</h2>
          <div className=" grid grid-cols-1 min-[390px]:grid-cols-2 min-[720px]:grid-cols-3 gap-2 ">
            {amenitiesItems.map(({ type, icon }) => (
              <button
                key={type}
                className={`flex flex-col active:scale-95 active:duration-100 justify-between items-start border p-2 rounded-lg ${
                  amenities.includes(type) && "outline outline-2 bg-neutral-100"
                } hover:outline  hover:outline-2`}
                onClick={() => HandleSelectedAmenities(type)}
              >
                {icon}
                <p className="text-start text-sm">{type}</p>
              </button>
            ))}
          </div>
          <h1>Do you have any standout amenities?</h1>
          <div className=" grid grid-cols-1 min-[390px]:grid-cols-2 min-[720px]:grid-cols-3 gap-2 ">
            {uniqueAmenitiesItems.map(({ type, icon }) => (
              <button
                key={type}
                className={`flex flex-col justify-between active:scale-95 active:duration-100 items-start border p-2 rounded-lg ${
                  uniqueAmenities.includes(type) &&
                  "outline outline-2 bg-neutral-100"
                } hover:outline  hover:outline-2`}
                onClick={() => HandleSelectedUniqueAmenities(type)}
              >
                {icon}
                <p className="text-start text-sm">{type}</p>
              </button>
            ))}
          </div>
          <h1>Do you have any of these safety items?</h1>
          <div className=" grid grid-cols-1 min-[390px]:grid-cols-2 min-[720px]:grid-cols-3 gap-2 mb-6 ">
            {safetyAmenitiesItems.map(({ type, icon }) => (
              <button
                key={type}
                className={`flex flex-col justify-between active:scale-95 active:duration-100 items-start border p-2 rounded-lg ${
                  safetyAmenities.includes(type) &&
                  "outline outline-2 bg-neutral-100"
                } hover:outline  hover:outline-2`}
                onClick={() => HandleSelectedSafetyAmenities(type)}
              >
                {icon}
                <p className="text-start text-sm">{type}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <FooterNavigation step={2} pos={1} onBack={onBack} onNext={onNext} />
    </div>
  );
};
export default AmenitiesPage;
