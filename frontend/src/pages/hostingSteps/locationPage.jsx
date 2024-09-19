import React from "react";
import HostHeader from "./hostHeader";
import FooterNavigation from "./footerNavigation";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LocationPage = () => {
  const host = useSelector((state) => state.host.host);
  const navigate = useNavigate();
  const onNext = () => {
    navigate(`/became-a-host/${host.uuid}/floor-plan`);
  };
  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/privacyType`);
  };
  return (
    <div className="h-screen flex flex-col">
      <HostHeader />
      <div className="flex-1"></div>
      <FooterNavigation step={1} pos={3} onBack={onBack} onNext={onNext} />
    </div>
  );
};

export default LocationPage;
