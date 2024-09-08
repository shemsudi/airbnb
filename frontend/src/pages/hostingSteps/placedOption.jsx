import React from "react";
import HouseIcon from "../../components/icons/houseIcon";

const PlaceOptionButton = ({
  title,
  description,
  value,
  typeOfPrivacy,
  onSelect,
}) => {
  const isSelected = typeOfPrivacy === value;

  return (
    <button
      onClick={() => onSelect(value)}
      className={`px-3 py-4 flex justify-between gap-3 border rounded-xl w-full 
        ${
          isSelected ? "outline outline-2" : "border-gray-300"
        } hover:outline outline-2`}
    >
      <div className="flex flex-col items-start w-full">
        <h1 className="font-semibold">{title}</h1>
        <p className="text-sm text-gray-600 text-start max-w-[350px]">
          {description}
        </p>
      </div>
      <div className="flex-shrink-0">
        <HouseIcon />
      </div>
    </button>
  );
};

export default PlaceOptionButton;
