import React, { useState } from "react";
import HostHeader from "./hostHeader";
import FooterNavigation from "./footerNavigation";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const TitlePage = () => {
  const [title, setTitle] = useState("");
  const host = useSelector((state) => state.host.host);
  const navigate = useNavigate();
  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/photos`);
  };
  const onNext = async () => {
    const response = await axios.post("http://localhost:3000/host/title", {
      title,
      uuid: host.uuid,
    });
    if (response.status === 200) {
      navigate(`/became-a-host/${host.uuid}/description`);
    }
  };
  return (
    <div className="h-screen flex flex-col">
      <HostHeader />
      <div className="flex-1 px-10 flex justify-center">
        <div className="flex flex-col min-w-[480px]  justify-center">
          <h1 className="text-2xl font-base">
            {" "}
            Now, let's give your house a title{" "}
          </h1>
          <small className="text-gray-600">
            Short titles work best. Have fun with it—you can always change it
            later.
          </small>
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            className=" border border-gray-500 rounded-md p-2 mt-5 h-32"
            name=""
            id=""
          ></textarea>
        </div>
      </div>
      <FooterNavigation onBack={onBack} onNext={onNext} />
    </div>
  );
};

export default TitlePage;
