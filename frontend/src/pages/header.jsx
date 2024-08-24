import Search from "../components/search";
import ProfileModal from "../components/profileDropdown";
import SearchBar from "./searchBar";
import Logo from "../assets/logos";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ atTop }) => {
  const [selectedOption, setSelectedOption] = useState("stays");
  const option = [
    { key: "stays", label: "Stays" },
    { key: "experiences", label: "Experiences" },
  ];
  return (
    <div className="flex flex-col z-50">
      <header className="flex px-12 py-4 justify-between items-center">
        <Logo />
        {!atTop ? (
          <Search />
        ) : (
          <div className="flex gap-5  ">
            {option.map((option) => (
              <h1
                key={option.key}
                className={`cursor-pointer px-3 py-1 rounded-full transition-colors duration-300 ${
                  selectedOption === option.key
                    ? "text-black"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedOption(option.key)}
              >
                {option.label}
              </h1>
            ))}
          </div>
        )}

        <div className="flex gap-3 items-center">
          <div>
            <Link to={"host/homes"}>Airbnb your home</Link>
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
      {atTop ? <SearchBar selectedOption={selectedOption} /> : <div></div>}

      <div className="mt-3 -z-50">
        <hr />
      </div>
    </div>
  );
};

export default Header;
