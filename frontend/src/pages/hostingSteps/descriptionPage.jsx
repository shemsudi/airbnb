import React from "react";
import HostHeader from "./hostHeader";
import FooterNavigation from "./footerNavigation";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { descriptionTypes } from "../../utils/types";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setDescriptions } from "../../redux/HostReducer";
import { updateDescription } from "../../redux/hostActions";
import { useEffect } from "react";

const DescriptionPage = () => {
  const host = useSelector((state) => state.host.host);
  const [step1, setStep1] = React.useState(true);
  const [description, setDescription] = React.useState(
    host.description ||
      "Make some memories at this unique and family-friendly place."
  );
  const count = description.length;
  const [selectedTypes, setSelectedTypes] = React.useState(
    host.highlights || []
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    if (currentHost && currentHost.description) {
      setDescription(currentHost.description);
      setSelectedTypes(currentHost.highlights);
    }
  }, []);

  const onBack = () => {
    if (!step1) {
      setStep1(true);
    } else {
      navigate(`/became-a-host/${host.uuid}/title`);
    }
  };
  const onNext = async () => {
    if (step1) {
      setStep1(false);
    } else {
      dispatch(
        updateDescription({
          uuid: host.uuid,
          description: description,
          highlights: selectedTypes,
        })
      );
      navigate(`/became-a-host/${host.uuid}/finish-setup`);
    }
  };
  return (
    <div className="h-screen flex flex-col">
      <HostHeader />
      <div className="flex-1 flex items-start justify-center md:items-center mt-4">
        {step1 ? (
          <div className="max-w-[500px] flex  flex-col justify-center mx-6  ">
            <h1 className="text-2xl">Next, let's describe your house</h1>
            <small className="text-gray-600">
              Choose up to 2 highlights. We'll use these to get your description
              started.
            </small>
            <div className="flex gap-2 flex-wrap my-4 mt-5">
              {descriptionTypes.map((description, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (selectedTypes.includes(description.type)) {
                      // Remove the type if it's already selected
                      setSelectedTypes(
                        selectedTypes.filter(
                          (type) => type !== description.type
                        )
                      );
                    } else {
                      if (selectedTypes.length === 2) {
                        // If 2 are already selected, remove the first and add the new one
                        setSelectedTypes([selectedTypes[1], description.type]);
                      } else {
                        // If less than 2 are selected, add the new type
                        setSelectedTypes([...selectedTypes, description.type]);
                      }
                    }
                  }}
                  className={`flex ${
                    selectedTypes.includes(description.type) &&
                    "bg-neutral-100 outline outline-1"
                  }  items-center p-2 border hover:cursor-pointer border-gray-300 rounded-2xl`}
                >
                  {description.icon}
                  <small>{description.type}</small>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="sm:min-w-[500px] flex  flex-col justify-center mx-6  ">
            <h1 className="text-2xl">Create your description</h1>
            <small className="text-gray-600">
              Share what makes your place special.
            </small>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-40 border border-gray-300 rounded-lg p-2 mt-4"
              value={description}
              maxLength={600}
            ></textarea>
            <small>{count}/600</small>
          </div>
        )}
      </div>
      <FooterNavigation onBack={onBack} onNext={onNext} step={2} pos={4} />
    </div>
  );
};
export default DescriptionPage;
