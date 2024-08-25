import React from "react";
import HostPageHeader from "../components/hosthomes/hostHomeHeader";
import EstimateEarnings from "../components/hosthomes/estimateEearnings";
import AirbnbSetupInfo from "../components/hosthomes/airbnbSetupInfo";
const HostHomes = () => {
  const total = 30;
  const [nights, setNights] = React.useState(7);
  const [pricePerNight, setPricePerNight] = React.useState(43);
  const handleSliderChange = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setNights(value); // Adjust the price based on the slider's position
  };

  return (
    <div className="flex flex-col   ">
      <HostPageHeader />
      <EstimateEarnings
        nights={nights}
        pricePerNight={pricePerNight}
        handleSliderChange={handleSliderChange}
      />
      <AirbnbSetupInfo />
    </div>
  );
};
export default HostHomes;
