import React, { useRef, useEffect } from "react";

const AddPhotos = (props) => {
  const { isOpen, setIsOpen } = props;
  const photoAdd = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (photoAdd.current && !photoAdd.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);
  return (
    <div
      className={`fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-60 z-10`}
    >
      <div
        ref={photoAdd}
        className="relative  max-w-md h-3/6 bg-white flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>
    </div>
  );
};
export default AddPhotos;
