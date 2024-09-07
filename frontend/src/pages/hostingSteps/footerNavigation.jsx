import React from "react";

const FooterNavigation = ({ onBack, onNext }) => {
  return (
    <div className=" self-end w-full sticky bottom-0 left-0 z-100 bg-white px-6 py-3 ">
      <div className="w-full flex justify-between items-center">
        <button
          onClick={onBack}
          className="underline transform active:scale-95 opacity-80 hover:opacity-100"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="rounded-md transform active:scale-95 bg-black opacity-80 hover:opacity-100 text-white px-6 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FooterNavigation;
