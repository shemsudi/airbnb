import React from "react";
import { Link } from "react-router-dom";
const FooterLinkList = ({ title, links }) => (
  <div className="sm:w-full w-1/3">
    <nav>
      <ul className="flex flex-col gap-1">
        <li>
          <h1 className="text-sm">{title}</h1>
        </li>
        {links.map((link, index) => (
          <li key={index}>
            <Link className="text-xs hover:underline opacity-90" to={link.href}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default FooterLinkList;
