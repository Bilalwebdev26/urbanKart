// import React from 'react'

// const NotFound = () => {
//   return (
//     <div>NotFound</div>
//   )
// }

// export default NotFound
import React from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    // In a real app, this would use history.back()
    console.log("Go back");
  };

  return (
    <div className=" bg-white flex items-center justify-center p-4">
      <div className="text-center max-w-2xl ">
        {/* Large 404 Text */}
        <div className="mb-2">
          <h1 className="text-9xl md:text-[12rem] font-bold text-red-500 opacity-90 leading-none">
            404
          </h1>
          <div className="text-red-400 text-lg md:text-xl font-medium tracking-widest uppercase">
            Error
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Page Not Found
          </h2>
          <p className="text-black text-xs md:text-lg lg:text-xl leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex -row gap-4 justify-center items-center">
          <button
            onClick={handleGoHome}
            className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-3 py-2  md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 group"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Go Home
          </button>

          <button
            onClick={handleGoBack}
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2  md:px-8 md:py-3 rounded-lg font-semibold border border-gray-600 hover:border-red-500 transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
