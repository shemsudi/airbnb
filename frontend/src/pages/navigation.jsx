import React from "react";
import { Link, NavLink } from "react-router-dom";
import items from "../assets/items";

const NavigateTom3 = (props) => {
  return (
    <nav className="w-full px-12 no-scrollbar overflow-x-auto shadow-sm">
      <ul className="pt-2 flex gap-8">
        {items.map((item, index) => (
          <li
            className="min-w-max box-border opacity-70 hover:opacity-100   "
            key={index}
          >
            <NavLink
              to={`/${item.name ? item.name : item}`}
              className={` flex flex-col focus:border-black items-center pb-1 border-b-2 border-transparent  hover:border-gray-300`}
            >
              <div>
                <img
                  src={`${item.image ? item.image : items[0].image}`}
                  className="w-6 h-6 "
                  alt={item.name || "item image"}
                />
              </div>

              <span className="text-black">{item.name || item}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigateTom3;
