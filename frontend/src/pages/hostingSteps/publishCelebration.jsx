import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublishCelebration = () => {
  const userName = useSelector((state) => state.auth.user.name);

  const navigate = useNavigate();
  const navigateToHostHomes = () => {
    navigate("/host-homes");
  };

  return (
    <div className="h-screen flex flex-col md:flex-row ">
      <iframe
        className="w-full h-1/2 md:h-full md:w-1/2 object-cover"
        src="https://www.youtube.com/embed/evUfG3lrk5U"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="flex flex-col h-1/2 md:h-full md:justify-center md:items-center w-full  md:w-1/2 bg-black text-white divide-y-2">
        <div className="  w-full md:max-w-[400px] justify-start md:justify-center flex-1 flex flex-col p-5 md:mt-10  ">
          {" "}
          <h1 className="text-4xl font-roboto">Congratulations,</h1>
          <h1 className="text-4xl font-roboto">{userName}!</h1>
          <p className="mt-6 text-sm">
            {" "}
            From one Host to another—welcome aboard. Thank you for sharing your
            home and helping to create incredible experiences for our guests.
          </p>
          <img
            className="w-10 h-10 mt-4"
            src="https://a0.muscache.com/pictures/03077a3c-d04f-4136-999f-9b579772597d.jpg"
            alt=""
          />
          <span className="text-sm">Brian chesky, CEO</span>
        </div>
        <div className="p-4  w-full flex justify-normal md:justify-end ">
          <button
            onClick={navigateToHostHomes}
            className="p-2 max-md:w-full  bg-primary rounded-lg text-sm"
          >
            Let's get started
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default PublishCelebration;
