import React from "react";
import { Link } from "react-router-dom";
import FooterNavigation from "./footerNavigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HostHeader from "./hostHeader";
import options from "../../utils/options";
import PlaceOptionButton from "./placedOption.jsx";

const PrivacyType = () => {
  const [typeOfPrivacy, setTypeOfPrivacy] = useState("");

  const handleSelect = (value) => {
    setTypeOfPrivacy(value);
  };
  const host = useSelector((state) => state.host.host);
  const navigate = useNavigate();
  const onNext = () => {
    navigate(`/became-a-host/${host.uuid}/location`);
  };
  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/structure`);
  };

  return (
    <div className="flex flex-col h-screen">
      <HostHeader />
      <div className="flex-1 justify-center items-center m-10">
        <div className="flex flex-col justify-center  items-center gap-3 w-[500px] mx-auto">
          <h1 className="text-2xl mb-5 text-start w-full">
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
      <FooterNavigation onBack={onBack} onNext={onNext} />
    </div>
  );
};

export default PrivacyType;
