import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FooterNavigation from "./footerNavigation";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import HostHeader from "./hostHeader";
import options from "../../utils/options";
import PlaceOptionButton from "./placedOption.jsx";
import { updatePrivacyType } from "../../redux/hostActions.js";
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
  useEffect(() => {
    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    if (currentHost && currentHost.privacyType) {
      setTypeOfPrivacy(currentHost.privacyType);
    }
  }, []);

  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/structure`);
  };

  const onNext = async () => {
    dispatch(
      updatePrivacyType({ uuid: host.uuid, privacyType: typeOfPrivacy })
    );
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

      <FooterNavigation step={1} pos={2} onBack={onBack} onNext={onNext} />
    </div>
  );
};

export default PrivacyType;
