import React from "react";
import { Link } from "react-router-dom";
import FooterNavigation from "./footerNavigation";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import HostHeader from "./hostHeader";
import options from "../../utils/options";
import PlaceOptionButton from "./placedOption.jsx";
import { setPrivacyType, UpdateLastPage } from "../../redux/HostReducer.js";
import ProgressBar from "./progressBar.jsx";
import axios from "axios";
const PrivacyType = () => {
  const host = useSelector((state) => state.host.host);
  const previouslyChoosed = host.privacyType ? host.privacyType : "";
  console.log(previouslyChoosed);

  const [typeOfPrivacy, setTypeOfPrivacy] = useState(previouslyChoosed);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelect = (value) => {
    setTypeOfPrivacy(value);
  };

  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/structure`);
  };

  const onNext = async () => {
    const response = await axios.post(
      "http://localhost:3000/host/privacyType",
      {
        uuid: host.uuid,
        privacyType: typeOfPrivacy,
      }
    );

    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    const updatedHost = {
      ...currentHost,
      lastPage: "location",
      privacyType: typeOfPrivacy,
    };
    localStorage.setItem("currentHost", JSON.stringify(updatedHost));

    dispatch(setPrivacyType({ uuid: host.uuid, privacyType: typeOfPrivacy }));
    dispatch(UpdateLastPage({ uuid: host.uuid, lastPage: "location" }));
    navigate(`/became-a-host/${host.uuid}/location`);
  };

  return (
    <div className="flex flex-col h-screen">
      <HostHeader />
      <div className="flex-1  mx-2 my-5 min-[580px]:m-10 flex justify-center">
        <div className="flex flex-col justify-start mt-6  items-center gap-3 min-[580px]:justify-center  min-[580px]:w-[500px]">
          <h1 className="text-3xl mb-5 text-start font-roboto w-full">
            What type of place will guests have?
          </h1>
          {options.map((option) => (
            <PlaceOptionButton
              key={option.value}
              title={option.title}
              description={option.description}
              value={option.value}
              typeOfPrivacy={typeOfPrivacy}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
      <ProgressBar step={1} pos={2} />

      <FooterNavigation onBack={onBack} onNext={onNext} />
    </div>
  );
};

export default PrivacyType;
