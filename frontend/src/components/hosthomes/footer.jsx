import React from "react";
import { Link } from "react-router-dom";
import FaceBookIcon from "../icons/faceBookIcon";
import InstagramIcon from "../icons/instagramIcon";
import TwitterIcon from "../icons/twitterIcon";
import WorldIcon from "../icons/worldIcon";
import YourPrivacyIcon from "../icons/yourPrivacyIcon";
import FooterLinkList from "./footerLInkList";

const Footer = () => (
  <footer className="border-t-2 sm:px-5 md:px-20 lg:px-40 mb-20 w-full px-5">
    <div className="flex flex-col sm:flex-row w-full py-6 gap-4 border-b-2">
      <FooterLinkList
        title="Support"
        links={[
          { href: "/help", text: "Help Center" },
          { href: "/help", text: "Get Help with a safety issue" },
          { href: "/help", text: "AirCover" },
          { href: "/help", text: "Anti-discrimination" },
          { href: "/help", text: "Disability support" },
          { href: "/help", text: "Cancellation options" },
          { href: "/help", text: "Report neighborhood concern" },
        ]}
      />
      <FooterLinkList
        title="Hosting"
        links={[
          { href: "/help", text: "Airbnb your home" },
          { href: "/help", text: "AirCover for Hosts" },
          { href: "/help", text: "Hosting resources" },
          { href: "/help", text: "Community forum" },
          { href: "/help", text: "Hosting responsibly" },
          { href: "/help", text: "Airbnb-friendly apartments" },
          { href: "/help", text: "Join a free Hosting class" },
        ]}
      />
      <FooterLinkList
        title="Airbnb"
        links={[
          { href: "/help", text: "NewsRoom" },
          { href: "/help", text: "NewsFeatures" },
          { href: "/help", text: "Careers" },
          { href: "/help", text: "Investors" },
          { href: "/help", text: "GiftCards" },
          { href: "/help", text: "Airbnb.org emergency stays" },
        ]}
      />
    </div>
    <div className="w-full flex flex-col-reverse items-start sm:items-center justify-between xl:flex-row py-4 gap-4">
      <div className="flex flex-col items-start sm:items-center xl:flex-row gap-2">
        <div className="text-sm">© 2024 Airbnb, Inc.</div>
        <div>
          <ol className="flex gap-2 items-center">
            <li>
              <Link to={""} className="hover:underline text-sm">
                Terms
              </Link>{" "}
              ·
            </li>
            <li>
              <Link to={""} className="hover:underline text-sm">
                Sitemap
              </Link>{" "}
              ·
            </li>
            <li>
              <Link to={""} className="hover:underline text-sm">
                Privacy
              </Link>{" "}
              ·
            </li>
            <li>
              <Link to={""} className="hover:underline text-sm flex gap-2">
                Your Privacy Choices <YourPrivacyIcon />
              </Link>
            </li>
          </ol>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <button className="flex items-center gap-2 group hover:cursor-pointer">
          <WorldIcon />{" "}
          <h1 className="text-sm hover:underline group-hover:cursor-pointer">
            English(US)
          </h1>
        </button>
        <button className="text-sm">
          <span>$</span> <span className="hover:underline">USD</span>
        </button>
        <ul className="flex gap-3">
          <li>
            <Link className="hover:cursor-pointer" to={""}>
              <FaceBookIcon />
            </Link>
          </li>
          <li>
            <Link className="hover:cursor-pointer" to={""}>
              <TwitterIcon />
            </Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to={""}>
              <InstagramIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
