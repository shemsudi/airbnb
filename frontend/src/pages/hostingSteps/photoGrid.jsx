import React from "react";
import CloseIcon from "../../components/icons/closeIcon";

const PhotoGrid = ({ files, removeImage, setIsOpen }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {files.map((file, index) => (
        <div
          key={index}
          className={`relative rounded-lg ${
            index === 0 && "col-span-2"
          } overflow-hidden`}
        >
          <img src={file} alt="shemsu" className="w-full h-full object-cover" />
          <button
            onClick={() => removeImage(index)}
            className="absolute top-1 right-1 bg-white p-1 rounded-full"
          >
            <CloseIcon />
          </button>
        </div>
      ))}
      <button
        onClick={() => setIsOpen(true)}
        className="h-36 rounded-lg border border-dashed border-gray-500 flex items-center justify-center"
      >
        add more
      </button>
    </div>
  );
};
export default PhotoGrid;
