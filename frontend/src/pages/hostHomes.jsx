import React from "react";
import HostPageHeader from "../components/hosthomes/hostHomeHeader";
const HostHomes = () => {
  const total = 30;
  const [nights, setNights] = React.useState(13);
  const [pricePerNight, setPricePerNight] = React.useState(43);
  const handleSliderChange = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setNights(value); // Adjust the price based on the slider's position
  };

  return (
    <div className="flex flex-col   ">
      <HostPageHeader />
      <div className=" px-10 py-5 lg:px-40 lg:py-16">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-10 ">
            <h1 className="text-primary font-roboto font-bold text-4xl">
              Airbnb it.
            </h1>
            <h1 className="font-medium  text-4xl font-roboto">
              You could earn
            </h1>
            <div className="text-4xl font-medium mt-2 ">
              ${(nights * pricePerNight).toFixed(0)}
            </div>
            <small className="mt-3">
              <span className=" underline hover:cursor-pointer">
                {nights} nights
              </span>{" "}
              at an estimated ${pricePerNight} night
            </small>
            <div className="w-full mt-6">
              <input
                type="range"
                min="0"
                max="30"
                value={nights}
                onChange={handleSliderChange}
                className="w-full accent-black"
              />
            </div>
            <div className="underline text-sm text-gray-500 mt-8">
              Learn how we estimate your earnings
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-green-300 rounded-xl">
            <iframe
              className="h-96 w-full rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.014858185892!2d-122.41941848468195!3d37.77492977975982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806b293e4b23%3A0x9d6eebad2e8c3f5e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1623758365957!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>{" "}
          </div>
        </div>
      </div>

      {/* <img
        src="https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq"
        alt="shemsu"
      /> */}
    </div>
  );
};
export default HostHomes;
