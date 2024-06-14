import Search from "../components/search";
import ProfileModal from "../components/profileDropdown";
import { useEffect, useState, useRef } from "react";
import SearchBar from "./searchBar";

const Header = () => {
  const [goingUp, setGoingUp] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY === 0) {
      setGoingUp(true);
    } else {
      setGoingUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="z-50">
      <header className="flex px-8 py-4 justify-between items-center">
        <a href="#" className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 -rotate-90 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          <h1 className="font-bold text-primary text-2xl">airbnb</h1>
        </a>
        {goingUp ? (
          <div className="flex gap-5">
            <h1>Stays</h1> <h1 className="text-blurred">Expreiences</h1>
            <h1 className="text-blurred">Online Expriences</h1>
          </div>
        ) : (
          <Search />
        )}

        <div className="flex gap-3 items-center">
          <div>
            <a href="#">Airbnb your home</a>
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </button>
          <ProfileModal />
        </div>
      </header>
      {goingUp ? <SearchBar /> : ""}

      <div className="mt-3 -z-50">
        <hr />
      </div>
    </div>
  );
};

export default Header;
