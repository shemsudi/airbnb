import React, { useState } from "react";
import HostHeader from "./hostHeader";
import FooterNavigation from "./footerNavigation";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateDiscounts } from "../../redux/hostActions";
import { useEffect } from "react";
import { current } from "@reduxjs/toolkit";

const DiscountPage = () => {
  const host = useSelector((state) => state.host.host);
  const [weeklyDiscount, setWeeklyDiscount] = useState(
    host.discount?.weeklyDiscount || 8
  );
  const [monthlyDiscount, setMonthlyDiscount] = useState(
    host.discount?.monthlyDiscount || 10
  );
  const [isNewLPDiscountEnabled, setIsNewLPDiscountEnabled] = useState(true);
  const [isWeeklyDiscountEnabled, setIsWeeklyDiscountEnabled] = useState(true);
  const [isMonthlyDiscountEnabled, setIsMonthlyDiscountEnabled] =
    useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    if (currentHost && currentHost.discount) {
      setMonthlyDiscount(currentHost.discount.monthlyDiscount);
      setWeeklyDiscount(currentHost.discount.weeklyDiscount);
    }
  }, []);

  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/price`);
  };

  const onNext = async () => {
    const discountsToSend = {};
    if (isWeeklyDiscountEnabled) {
      discountsToSend.weeklyDiscount = weeklyDiscount;
    }
    if (isMonthlyDiscountEnabled) {
      discountsToSend.monthlyDiscount = monthlyDiscount;
    }
    if (isNewLPDiscountEnabled) {
      discountsToSend.newLPDiscount = 20;
    }

    dispatch(updateDiscounts({ uuid: host.uuid, discount: discountsToSend }));
    navigate(`/became-a-host/${host.uuid}/legal`);
  };

  return (
    <div className="h-screen flex flex-col">
      <HostHeader />
      <div className="grow flex justify-center items-center">
        <div className="flex  flex-col justify-center">
          <h1 className="text-3xl font-roboto">Add discounts</h1>
          <small className=" text-gray-600 text-sm">
            Help your place stand out to get booked faster and earn your first
            reviews.
          </small>

          <div className="flex p-4 bg-neutral-100 border rounded-lg mt-4 justify-between">
            <div className="flex gap-2 items-center">
              <span className="px-1">20%</span>
              <div className="flex flex-col pl-2">
                <h1>New listing promotion</h1>
                <small className="text-gray-600 text-xs">
                  Offer 20% off your first 3 bookings{" "}
                </small>
              </div>
            </div>
            <input
              checked={isNewLPDiscountEnabled}
              onChange={(e) => setIsNewLPDiscountEnabled(e.target.checked)}
              className="accent-black"
              type="checkbox"
            />
          </div>
          <div className="flex p-4 bg-neutral-100  border rounded-lg mt-4 justify-between">
            <div className="flex gap-2 items-center">
              <div className=" border  px-1 rounded-md bg-neutral-100 flex">
                <input
                  className="w-5 focus:outline-none "
                  max={100}
                  min={0}
                  type="number"
                  onChange={(e) => {
                    const numberValue = e.target.value;
                    if (
                      (numberValue >= 0 && numberValue <= 100) ||
                      numberValue === undefined
                    ) {
                      setWeeklyDiscount(numberValue);
                    }
                  }}
                  value={weeklyDiscount}
                />
                <span>%</span>
              </div>
              <div className="flex flex-col pl-2">
                <h1>Weekly discount</h1>
                <small className="text-gray-600 text-xs">
                  For stays of 7 nights or more
                </small>
              </div>
            </div>
            <input
              className="accent-black"
              onChange={(e) => setIsWeeklyDiscountEnabled(e.target.checked)}
              checked={isWeeklyDiscountEnabled}
              type="checkbox"
            />
          </div>
          <div className="flex p-4 bg-neutral-100  border rounded-lg mt-4 justify-between">
            <div className="flex gap-2 items-center">
              <div className=" border  px-1 rounded-md bg-neutral-100  flex">
                <input
                  className="w-5 focus:outline-none "
                  type="number"
                  onChange={(e) => {
                    const numberValue = e.target.value;
                    if (
                      (numberValue >= 0 && numberValue <= 100) ||
                      numberValue === undefined
                    ) {
                      setMonthlyDiscount(numberValue);
                    }
                  }}
                  value={monthlyDiscount}
                  min={0}
                  max={100}
                />
                <span>%</span>
              </div>{" "}
              <div className="flex flex-col pl-2">
                <h1>Monthly discount</h1>
                <small className="text-gray-600 text-xs">
                  For stays of 28 nights or more{" "}
                </small>
              </div>
            </div>
            <input
              onChange={(e) => setIsMonthlyDiscountEnabled(e.target.checked)}
              checked={isMonthlyDiscountEnabled}
              className="accent-black"
              type="checkbox"
            />
          </div>
        </div>
      </div>{" "}
      <FooterNavigation onNext={onNext} onBack={onBack} step={3} pos={4} />
    </div>
  );
};

export default DiscountPage;
