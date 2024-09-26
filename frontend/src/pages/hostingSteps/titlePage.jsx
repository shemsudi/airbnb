import React, { useState } from "react";
import HostHeader from "./hostHeader";
import FooterNavigation from "./footerNavigation";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTitle } from "../../redux/HostReducer";
import axios from "axios";

const TitlePage = () => {
  const host = useSelector((state) => state.host.host);
  const [title, setTitle] = useState(host.title || "");
  const count = title.length;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/photos`);
  };
  const onNext = async () => {
    const response = await axios.post("http://localhost:3000/host/title", {
      title,
      uuid: host.uuid,
    });
    dispatch(addTitle({ title: title }));
    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    const updatedHost = {
      ...currentHost,
      title: title,
    };
    localStorage.setItem("currentHost", JSON.stringify(updatedHost));
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
            value={title}
            maxLength={32}
          ></textarea>
          <small>{count}/32</small>
        </div>
      </div>
      <FooterNavigation onBack={onBack} onNext={onNext} step={2} pos={3} />
    </div>
  );
};

export default TitlePage;
