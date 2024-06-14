import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavigateTom3 = (props) => {
  const items = [
    {
      name: "Icons",
      image:
        "https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png",
    },
    {
      name: "Amazing pools",
      image:
        "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    },
    ,
    {
      name: "Tropical",
      image:
        "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    },
    {
      name: "Top cities",
      image:
        "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    },
    {
      name: "New",
      image:
        "	https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
    },
    {
      name: "National parks",
      image:
        "	https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
    },
    {
      name: "Rooms  ",
      image:
        "		https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    },
    {
      name: "Lake front",
      image:
        "		https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    },
    {
      name: "Design",
      image:
        "	https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    },
    {
      name: "Trending",
      image:
        "	https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    },

    "Camping",
    "Mansions",
    "Islands",
    "OMG!",
    "Caves",
    "Amazing Views",
    "Earth homes",
    "Tiny homes",
    "Grand pianos",
    "Luxe",
  ];

  return (
    <div className="w-full no-scrollbar overflow-x-auto">
      <ul className="px-3 pt-2 flex ">
        {items.map((item, index) => (
          <li
            className="px-5 before:pb-2 box-border min-w-max opacity-70 hover:opacity-100 hover:border-b-2 hover:border-gray after:border-black after:opacity-100 after:border-b-2 "
            key={index}
          >
            <NavLink to={`/${item.name ? item.name : item}`} className="">
              <div className="flex justify-center items-center  ">
                <img
                  src={`${item.image ? item.image : items[0].image}`}
                  className="w-6 h-6 pb-1"
                  alt=""
                />
              </div>

              <span className="text-black">{item.name ? item.name : item}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigateTom3;
