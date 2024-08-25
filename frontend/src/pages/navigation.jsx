import React from "react";
import { Link, NavLink } from "react-router-dom";
import items from "../assets/items";

const NavigateTom3 = (props) => {
  return (
    <div className="w-full px-12 no-scrollbar overflow-x-auto shadow-sm">
      <ul className="pt-2 flex gap-8">
        {items.map((item, index) => (
          <li
            className="min-w-max opacity-70 hover:opacity-100 hover:border-b-2   hover:border-gray  "
            key={index}
          >
            <NavLink
              to={`/${item.name ? item.name : item}`}
              className="  flex flex-col align-center"
            >
              <div className="self-center">
                <img
                  src={`${item.image ? item.image : items[0].image}`}
                  className="w-6 h-6 "
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
