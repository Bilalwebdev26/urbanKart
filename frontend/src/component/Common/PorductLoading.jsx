import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex shadow-sm lg:flex-row flex-col animate-pulse">
      {/* Image Part */}
      <div className="w-full lg:w-1/2 lg:h-[400px]">
        <div className="flex h-full">
          {/* Thumbnails (desktop only) */}
          <div className="hidden lg:flex flex-col space-y-2 mr-3 h-full">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="w-20 h-20 bg-gray-200 rounded"></div>
              ))}
          </div>

          {/* Main image (always visible) */}
          <div className="flex-1 h-full w-full bg-gray-200 rounded"></div>
        </div>

        {/* Mobile thumbnails */}
        <div className="">
          <div className="flex-1 h-full w-full lg:hidden bg-gray-200 rounded"></div>
          <div className="w-full flex items-center justify-center space-x-2 mt-2 lg:hidden">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="w-16 h-16 bg-gray-200 rounded"></div>
              ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-1 p-2 w-full lg:w-1/2 space-y-3">
        <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
        <div className="h-7 w-28 bg-gray-200 rounded"></div>
        <div className="h-20 w-full bg-gray-200 rounded"></div>

        {/* Colors */}
        <div className="flex space-x-2">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-8 h-8 bg-gray-200 rounded-full"></div>
            ))}
        </div>

        {/* Sizes */}
        <div className="flex space-x-2">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-10 h-8 bg-gray-200 rounded"></div>
            ))}
        </div>

        {/* Quantity + buttons */}
        <div className="flex space-x-2">
          <div className="w-28 h-10 bg-gray-200 rounded"></div>
          <div className="w-20 h-10 bg-gray-200 rounded"></div>
          <div className="w-24 h-10 bg-gray-200 rounded"></div>
          <div className="w-10 h-10 bg-gray-200 rounded"></div>
        </div>

        {/* Delivery */}
        <div className="border flex space-x-4 items-center px-6 py-2">
          <div className="w-12 h-12 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
            <div className="h-3 w-40 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
