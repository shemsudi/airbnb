import React from "react";
const EmptyState = ({ onClick }) => (
  <div className="flex flex-col justify-center items-center gap-6 h-4/5 bg-gray-50 border border-dashed border-gray-700 rounded-lg">
    <img
      className="w-40 h-40"
      src="https://a0.muscache.com/im/pictures/mediaverse/mys-amenities-n8/original/c83b2a87-3be4-43c9-ad47-12dd2aee24c4.jpeg"
      alt="Empty state"
    />
    <button
      onClick={onClick}
      className="px-3 py-1 mb-4 border border-black bg-white rounded-lg"
    >
      Add photos
    </button>
  </div>
);
export default EmptyState;
