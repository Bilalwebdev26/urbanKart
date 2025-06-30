import React from "react";
import headphone from "../../assets/stereo.png";
const SingleBanner = () => {
  const banner = {
    name: "Categories",
    desc: "Enhance Your Music Experience",
    path: "/",
    image: headphone,
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-900 to-black w-full flex p-1 lg:p-4 poppins-font">
        {/* Left Conetent side
           <div className="text-white w-[50%]">
            <h3 className='text-green-400 font-semibold'>{banner.name}</h3>
            <p className='font-bold text-2xl'>{banner.desc}</p>
            <button className=''>Buy Now</button>
           </div>
         {/* Right Conetent side }   
           <div className="w-[50%]">
            <img src={banner.image} alt={banner.name} className=' object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'/>
           </div>
      </div> */}
        {/* Left Content Side */}
        <div className="w-[60%] lg:w-1/2  flex flex-col justify-center space-y-6 px-2 ">
          <h3 className="text-red-500 font-semibold text-lg tracking-wide">
            {banner.name}
          </h3>
          <p className="font-bold text-[16px] md:text-4xl leading-tight text-white line-clamp-2 lg:line-clamp-3">
            {banner.desc}
          </p>
          <button className="text-sm lg:text-lg bg-red-500 hover:bg-red-700 text-white font-semibold px-2 py-2 lg:py-3 lg:px-8 rounded shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-fit">
            Buy Now
          </button>
        </div>

        {/* Right Content Side */}
        {/* <div className="w-1/2 flex items-center justify-center p-8">
          <img
            src={banner.image}
            alt={banner.name}
            className="w-full h-80 bg-red-500 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:scale-105 transition-transform duration-300"
          />
        </div> */}
        <div className="w-[40%] lg:w-1/2 flex items-center justify-center relative h-48 md:h-80 overflow-hidden">
          <img
            src={banner.image}
            alt={banner.name}
            className="w-full h-48 md:h-80 lg:h-max-h-full object-contain drop-shadow-[0_0_20px_rgba(255,128,128,0.9)] hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="w-full h-[2px] bg-gray-200 my-7"></div>
    </div>
  );
};

export default SingleBanner;
