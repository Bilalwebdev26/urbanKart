import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-100 bg-white">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
