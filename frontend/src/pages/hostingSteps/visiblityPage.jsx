import React, { useState, useEffect } from "react";
import FooterNavigation from "./footerNavigation";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateVisibility } from "../../redux/hostActions";
import HostHeader from "./hostHeader";

const VisiblityPage = () => {
  const host = useSelector((state) => state.host.host);
  const [typeofGuest, setTypeofGuest] = useState(host.visibility || "anyone");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    if (currentHost && currentHost.visibility) {
      setTypeofGuest(currentHost.visibility);
    }
  }, []);
  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/instant-book`);
  };
  const onNext = async () => {
    dispatch(updateVisibility({ uuid: host.uuid, visibility: typeofGuest }));

    navigate(`/became-a-host/${host.uuid}/price`);
  };
  return (
    <div className="h-screen flex flex-col">
      <HostHeader />
      <div className="flex-1 flex items-start justify-center md:items-center mt-4">
        <div className="flex flex-col max-w-[500px] justify-center mx-4  gap-2">
          <h1 className="text-2xl font-semibold ">
            Choose who to welcome for your first reservation
          </h1>
          <small className="text-gray-600 text-start">
            After your first guest, anyone can book your place.{" "}
            <Link className="underline" to="https://www.google.com ">
              Learn more
            </Link>
          </small>
          <button
            onClick={() => setTypeofGuest("anyone")}
            className={`flex  ${
              typeofGuest === "anyone" && "outline outline-1 "
            } active:scale-95 active:duration-100 items-center p-3 gap-4 border rounded-lg w-full`}
          >
            <div
              className={`rounded-full h-4 w-4 border ${
                typeofGuest === "anyone" && "border-4"
              } border-black`}
            ></div>{" "}
            <div className="flex flex-col">
              <h1 className="text-sm text-start font-bold">Any airbnb guest</h1>
              <small className="text-gray-600 text-start">
                Get reservation faster when you welcome anyone from the Aribnb
                community{" "}
              </small>
            </div>
          </button>
          <button
            onClick={() => setTypeofGuest("experience")}
            className={`flex  ${
              typeofGuest === "experience" && "outline outline-1 "
            } active:scale-95 active:duration-100  items-center p-3 gap-4 border rounded-lg w-full`}
          >
            <div
              className={`rounded-full h-4 w-4 border ${
                typeofGuest === "experience" && "border-4"
              } border-black`}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-sm text-start font-bold">
                An experienced guest
              </h1>
              <small className="text-gray-600 text-start">
                For your first guest, welcome someone with a good track record
                on Airbnb who can offer tips for how to be a great Hos
              </small>
            </div>
          </button>
        </div>
      </div>{" "}
      <FooterNavigation onBack={onBack} onNext={onNext} step={3} pos={2} />
    </div>
  );
};
export default VisiblityPage;
