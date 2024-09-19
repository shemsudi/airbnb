import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setStructure } from "../../redux/HostReducer";
import HouseIcon from "../../components/icons/houseIcon";
import FooterNavigation from "./footerNavigation.jsx";
import axios from "axios";
import HostHeader from "./hostHeader.jsx";
import { types } from "../../utils/types.jsx";

const HomeSturcture = () => {
  const host = useSelector((state) => state.host.host);
  const previouslyChoosed = host.structure ? host.structure : "";
  const [typeOfPlace, setTypeOfPlace] = useState(previouslyChoosed);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backToStructurePage = () => {
    navigate(`/became-a-host/${host.uuid}/about-your-place`);
  };
  const NavigateToPrivacyTypePage = async () => {
    const response = await axios.post("http://localhost:3000/host/structure", {
      uuid: host.uuid,
      structure: typeOfPlace,
      lastPage: "PrivacyType",
    });
    dispatch(setStructure({ uuid: host.uuid, structure: typeOfPlace }));
    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    const updatedHost = {
      ...currentHost,
      lastPage: "PrivacyType",
      structure: typeOfPlace,
    };
    localStorage.setItem("currentHost", JSON.stringify(updatedHost));
    navigate(`/became-a-host/${host.uuid}/privacyType`);
  };
  return (
    <div className=" flex flex-col h-screen">
      <HostHeader />
      <div className="flex-1 flex flex-col min-[720px]:items-center px-4  min-[720px]:px-10  overflow-y-auto">
        {" "}
        <h1 className="text-2xl  font-medium pb-3 pt-4">
          Which of these best describes your places?{" "}
        </h1>
        <div className=" grid grid-cols-1 min-[390px]:grid-cols-2 min-[720px]:grid-cols-3 gap-2 mb-8 ">
          {types.map(({ type, icon }) => (
            <button
              key={type}
              className={`flex flex-col active:scale-95 active:duration-100 min-w-44 justify-start border  p-2 rounded-lg ${
                typeOfPlace === type
                  ? "outline outline-2"
                  : "hover:outline outline-2"
              }`}
              onClick={() => setTypeOfPlace(type)}
            >
              {icon || <HouseIcon />}
              <p className="text-sm">{type}</p>
            </button>
          ))}
        </div>
      </div>
      <FooterNavigation
        step={1}
        pos={1}
        onBack={backToStructurePage}
        onNext={NavigateToPrivacyTypePage}
      />
    </div>
  );
};

export default HomeSturcture;
