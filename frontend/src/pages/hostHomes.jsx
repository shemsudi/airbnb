import React from "react";
import HostPageHeader from "../components/hosthomes/hostHomeHeader";
import EstimateEarnings from "../components/hosthomes/estimateEearnings";
import AirbnbSetupInfo from "../components/hosthomes/airbnbSetupInfo";
import HostPromotionSection from "../components/hosthomes/hostPromotionSection";
import CheckIcon from "../components/icons/correctIcon";
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
      <HostPromotionSection />
      <div className="xl:px-80 lg:px-40 md:px-20 px-5 w-full flex flex-col justify-center items-center mb-24">
        <img
          className="w-40 "
          src="https://a0.muscache.com/im/pictures/cecbf134-6674-410f-9345-603716048771.jpg?im_w=480&im_q=highq"
          alt=""
        />
        <h1 className="font-medium text-4xl mb-6">
          Airbnb it with top‑to‑bottom protection
        </h1>
        <table className="w-full">
          <thead className="mt-4">
            <tr className="border-b-2">
              <th className="w-96"> </th>
              <th>Airbnb</th>
              <th> Competitors</th>
            </tr>
          </thead>
          <tbody className="gap-4">
            <tr>
              <th className="text-start"> Guest Identity Identification</th>
              <td className="text-center ">
                {" "}
                <CheckIcon />
              </td>
              <td></td>
            </tr>
            <tr className="border-b-2 border-spacing-4">
              <td className="text-justify text-sm ">
                Our comprehensive verification system checks details such as
                name, address, government ID and more to confirm the identity of
                guests who book on Airbnb.
              </td>
            </tr>
            <tr>
              <th className="text-start"> Reservation screening</th>
              <td></td>
              <td></td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default HostHomes;
