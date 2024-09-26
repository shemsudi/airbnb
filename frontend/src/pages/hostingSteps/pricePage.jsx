import React, { useState } from "react";
import HostHeader from "./hostHeader";
import FooterNavigation from "./footerNavigation";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const PricePage = () => {
  const host = useSelector((state) => state.host.host);
  const [price, setPrice] = useState(host.price || "23");
  const serviceFee = Math.round(price * 0.15);
  const [isShowMore, setIsShowMore] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/visibility`);
  };
  const onNext = async () => {
    const response = await axios.post("http://localhost:3000/host/price", {
      uuid: host.uuid,
      price: host.price,
    });
    if (response.status === 200) {
      navigate(`/became-a-host/${host.uuid}/title`);
    }
  };
  const handlePriceChange = (event) => {
    const inputValue = event.target.value;

    // Remove the dollar sign and parse the remaining string to a number
    const numericValue = inputValue.replace(/[^0-9.]/g, "");

    // Update the state with the numeric value
    setPrice(numericValue);
  };
  return (
    <div className="h-screen flex flex-col">
      <HostHeader />
      <div className="flex-1 m-4 flex justify-center items-center">
        <div className="flex flex-col justify-center items-start md:items-center md:min-w-[500px] ">
          <h1 className="text-2xl font-semibold">Now, set your price</h1>
          <small className="text-gray-600">You can change it anytime</small>
          <div className="flex flex-col justify-center items-center mt-4 py-4">
            <input
              className="text-center text-7xl  focus:outline-none font-bold"
              onChange={handlePriceChange}
              type="text"
              value={"$" + price}
            />
            {!isShowMore ? (
              <div className="flex flex-col gap-10 items-center">
                <button onClick={() => setIsShowMore(true)}>
                  Guest prices before taxes ${serviceFee + parseInt(price)}
                </button>
                <button className="border text-sm rounded-full p-2">
                  {" "}
                  similar listings $54 -$80
                </button>
                <Link className="text-sm underline">
                  {" "}
                  Learn about more pricing
                </Link>
              </div>
            ) : (
              <div className="mt-4 flex flex-col">
                <div className=" flex flex-col border rounded-lg border-gray-400 p-2 gap-2 ">
                  <div className="flex justify-between gap-10">
                    {" "}
                    <small>Base price</small>
                    <small>${price}</small>
                  </div>
                  <div className="flex gap-10 justify-between pb-2 border-b-2">
                    {" "}
                    <small>Guest service fee</small>
                    <small>${serviceFee}</small>
                  </div>
                  <div className="flex justify-between gap-10">
                    {" "}
                    <small className="font-medium">
                      Guest prices before taxes ${serviceFee + parseInt(price)}
                    </small>
                  </div>
                </div>
                <div className="flex justify-between border rounded-lg  border-gray-400 mt-4 p-2 gap-10 w-full">
                  <small>Guest service fee</small>
                  <small>${price - 1}</small>
                </div>

                <button
                  className="text-sm mt-4  "
                  onClick={() => setIsShowMore(false)}
                >
                  show less
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <FooterNavigation onBack={onBack} onNext={onNext} step={3} pos={3} />
    </div>
  );
};

export default PricePage;
