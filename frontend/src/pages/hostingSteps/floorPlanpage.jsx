import React, { useEffect, useState } from "react";
import HostHeader from "./hostHeader.jsx";
import ProgressBar from "./progressBar.jsx";
import FooterNavigation from "./footerNavigation.jsx";
import CounterControl from "./counterContorl.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateFloorPlan } from "../../redux/hostActions.js";

const FloorPlanPage = () => {
  const host = useSelector((state) => state.host.host);
  const previouslyChoosedGuests = host.guests ? host.guests : 2;
  const previouslyChoosedBedrooms = host.bedrooms ? host.bedrooms : 1;
  const previouslyChoosedBeds = host.beds ? host.beds : 1;
  const previouslyChoosedBathrooms = host.bathrooms ? host.bathrooms : 1;

  const [guests, setGuests] = useState(previouslyChoosedGuests);
  const [bedrooms, setBedrooms] = useState(previouslyChoosedBedrooms);
  const [beds, setBeds] = useState(previouslyChoosedBeds);
  const [bathrooms, setBathrooms] = useState(previouslyChoosedBathrooms);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    if (currentHost && currentHost.guests) {
      setGuests(currentHost.guests);
      setBedrooms(currentHost.bedrooms);
      setBeds(currentHost.beds);
      setBathrooms(currentHost.bathrooms);
    }
  }, []);

  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/location`);
  };
  const onNext = async () => {
    dispatch(
      updateFloorPlan({ uuid: host.uuid, guests, bedrooms, beds, bathrooms })
    );
    navigate(`/became-a-host/${host.uuid}/stand-out`);
  };

  return (
    <div className="h-screen flex flex-col">
      <HostHeader />
      <div className="flex-1 m-4  md:m-10 flex items-start justify-center md:items-center">
        <div className="flex flex-col mt-6 md:min-w-[500px]">
          <h1 className="text-2xl font-semibold w-full">
            Share some basics about your place
          </h1>
          <small className="text-gray-500 mb-3">
            You'll add more details later, like bed types
          </small>
          <div className="flex flex-col gap-3">
            <CounterControl
              label="Guests"
              value={guests}
              increment={() => setGuests(guests + 1)}
              decrement={() => guests > 1 && setGuests(guests - 1)}
            />
            <CounterControl
              label="Bedrooms"
              value={bedrooms}
              increment={() => setBedrooms(bedrooms + 1)}
              decrement={() => bedrooms > 1 && setBedrooms(bedrooms - 1)}
            />
            <CounterControl
              label="Beds"
              value={beds}
              increment={() => setBeds(beds + 1)}
              decrement={() => beds > 1 && setBeds(beds - 1)}
            />
            <CounterControl
              label="Bathrooms"
              value={bathrooms}
              increment={() => setBathrooms(bathrooms + 0.5)}
              decrement={() => bathrooms > 0 && setBathrooms(bathrooms - 0.5)}
            />
          </div>
        </div>
      </div>
      <FooterNavigation step={1} pos={4} onBack={onBack} onNext={onNext} />
    </div>
  );
};

export default FloorPlanPage;
