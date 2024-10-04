import React, { useState } from "react";
import HostHeader from "./hostHeader";
import FooterNavigation from "./footerNavigation";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateLegalInfo } from "../../redux/hostActions";

const LegalPage = () => {
  const host = useSelector((state) => state.host.host);

  const [hostingType, setHostingType] = useState(
    host.legalInfo?.hostingType || ""
  );
  const [securityCameras, setSecurityCameras] = useState(
    host.legalInfo?.securityCameras?.isAvailable || false
  );
  const [noiseMonitors, setNoiseMonitors] = useState(
    host.legalInfo?.noiseMonitors || false
  );
  const [weapons, setWeapons] = useState(host.legalInfo?.weapons || false);

  const handleChange = (e) => {
    setHostingType(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    switch (name) {
      case "securityCameras":
        setSecurityCameras(checked);
        break;
      case "noiseMonitors":
        setNoiseMonitors(checked);
        break;
      case "weapons":
        setWeapons(checked);
        break;
      default:
        break;
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/discount`);
  };
  const onNext = async () => {
    const legalInfo = {
      hostingType,
      securityCameras: { isAvailable: securityCameras, description: "" },
      noiseMonitors,
      weapons,
    };
    console.log(legalInfo);
    dispatch(updateLegalInfo({ uuid: host.uuid, legalInfo }));

    navigate(`/became-a-host/${host.uuid}/receipt`);
  };

  return (
    <div className="h-screen flex flex-col">
      <HostHeader />
      <div className="grow flex  justify-center items-centerp-2 ">
        <div className="flex flex-col justify-center w-[500px] gap-4 p-2">
          <h1 className="text-2xl font-medium">Just one last Step!</h1>
          <p className=" font-medium">How are you hosting on Airbnb?</p>
          <div className="space-x-2 hover:cursor-pointer">
            <input
              className="accent-black "
              type="radio"
              id="individual"
              name="hosting-type"
              value="individual"
              checked={hostingType === "individual"}
              onChange={handleChange}
            />
            <label className="text-gray-900" htmlFor="individual">
              I'm hosting as a private individual
            </label>
          </div>
          <div className="space-x-2">
            <input
              className="accent-black fill-black"
              type="radio"
              id="business"
              name="hosting-type"
              value="business"
              checked={hostingType === "business"}
              onChange={handleChange}
            />

            <label className="text-gray-900" htmlFor="business">
              I'm hosting as a business
            </label>
          </div>
          <h2 className="font-medium"> Does your place have any of these?</h2>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p>Exterior security cameras</p>
              <input
                type="checkbox"
                className="accent-black"
                name="securityCameras"
                checked={securityCameras}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="flex justify-between">
              <p>Noise decibel monitors</p>
              <input
                type="checkbox"
                className="accent-black"
                name="noiseMonitors"
                checked={noiseMonitors}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="flex justify-between">
              <p>Weapons</p>
              <input
                name="weapons"
                type="checkbox"
                className="accent-black"
                checked={weapons}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
          <hr />
          <div className="pt-6">
            <h1 className=" font-semibold text-neutral-600">
              Important things to know
            </h1>
            <p className="text-neutral-600 text-sm">
              Security cameras that monitor indoor spaces are not allowed even
              if they're turned off. All exterior security cameras must be
              disclosed.
            </p>
            <p className="text-neutral-600 mt-3 text-sm">
              Be sure to comply with your{" "}
              <Link className="underline" to={""}>
                locallaws
              </Link>{" "}
              and review Airbnb's{" "}
              <Link className="underline" to={""}>
                anti-discrimination policy
              </Link>{" "}
              and{" "}
              <Link className="underline" to={""}>
                guest and Host fees.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <FooterNavigation onBack={onBack} onNext={onNext} step={3} pos={5} />
    </div>
  );
};

export default LegalPage;
