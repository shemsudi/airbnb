import React, { useState } from "react";
import { useSelector } from "react-redux";
import FooterNavigation from "./footerNavigation";
import HostHeader from "./hostHeader";
import InstantIcon from "../../components/icons/instantIcon";
import ChatIcon from "../../components/icons/chatIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setInstantBook } from "../../redux/HostReducer";
import { useEffect } from "react";
import { updateInstantBook } from "../../redux/hostActions";
const InstantBookPage = () => {
  const host = useSelector((state) => state.host.host);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(host.instantBook);
  const [instantBooking, setInstantBooking] = useState(
    host.instantBook || "instant"
  );

  useEffect(() => {
    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    if (currentHost && currentHost.instantBook) {
      setInstantBook(currentHost.instantBook);
    }
  }, []);
  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/finish-setup`);
  };
  const onNext = async () => {
    dispatch(
      updateInstantBook({ uuid: host.uuid, instantBook: instantBooking })
    );
    navigate(`/became-a-host/${host.uuid}/visibility`);
  };

  return (
    <div className=" h-screen flex flex-col">
      <HostHeader />
      <div className="flex-1 flex items-start justify-center md:items-center m-4">
        <div className="flex flex-col min-w-[500-px] justify-center items-center gap-2">
          <h1 className="text-2xl mb-4">
            Decide how you’ll confirm reservations
          </h1>
          <button
            onClick={() => setInstantBooking("instant")}
            className={`flex justify-between ${
              instantBooking === "instant" && "outline outline-1 bg-neutral-100"
            }  items-center p-3 border rounded-lg w-full`}
          >
            <div className="flex flex-col">
              <h1 className="text-sm text-start">Use Instant Book</h1>
              <small className="text-gray-600">
                Guests can book automatically
              </small>
            </div>
            <InstantIcon />
          </button>
          <button
            onClick={() => setInstantBooking("by-request")}
            className={`flex justify-between ${
              instantBooking === "by-request" &&
              "outline outline-1 bg-neutral-100"
            }  items-center p-3 border rounded-lg w-full`}
          >
            <div className="flex flex-col ">
              <h1 className="text-sm text-start">
                Approve or decline requests
              </h1>
              <small className="text-gray-600">
                Guests must ask if they can book.
              </small>
            </div>
            <ChatIcon />
          </button>
        </div>
      </div>{" "}
      <FooterNavigation onBack={onBack} onNext={onNext} step={3} pos={1} />
    </div>
  );
};
export default InstantBookPage;
