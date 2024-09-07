import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdateLastPage, setStructure } from "../../redux/HostReducer";
import HouseIcon from "../../components/icons/houseIcon";
import FooterNavigation from "./footerNavigation.jsx";
import axios from "axios";
import HostHeader from "./hostHeader.jsx";

const HomeSturcture = () => {
  const types = [
    "House",
    "Apartment",
    "Barn",
    "Bed & breakfast",
    "Boat",
    "Cabin",
    "Camper/RV",
    "Casa particular",
    "Castle",
    "Cave",
    "Container",
    "Cycladic home",
    "Dammuso",
    "Dome",
    "Earth home",
    "Farm",
    "GuestHouse",
    "Hotel",
    "Houseboat",
    "Kizhan",
    "Minsu",
    "Riad",
    "Ryokan",
    "Shepherd's hat",
    "Tent",
    "Tiny home",
    "Tower",
    "Treehouse",
    "Trullo",
    "Windmill",
    "Yurt",
  ];
  const host = useSelector((state) => state.host.host);
  const [typeOfPlace, setTypeOfPlace] = useState("House");
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
    dispatch(UpdateLastPage({ uuid: host.uuid, lastPage: "PrivacyType" }));
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
        <h1 className="text-2xl font-semibold pb-3 pt-2">
          Which of these best describes your places?{" "}
        </h1>
        <div className=" grid grid-cols-1 min-[390px]:grid-cols-2 min-[720px]:grid-cols-3 gap-2 ">
          {types.map((type) => (
            <button
              key={type}
              className={`flex flex-col min-w-44 justify-start border  p-2 rounded-lg ${
                typeOfPlace === type ? "border-black" : "hover:border-black"
              }`}
              onClick={() => setTypeOfPlace(type)}
            >
              <HouseIcon />
              <p className="text-sm">{type}</p>
            </button>
          ))}
        </div>
      </div>
      <FooterNavigation
        onBack={backToStructurePage}
        onNext={NavigateToPrivacyTypePage}
      />
    </div>
  );
};

export default HomeSturcture;
