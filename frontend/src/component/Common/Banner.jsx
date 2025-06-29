import React, { useState, useEffect } from 'react';
import { FaHandPointRight } from "react-icons/fa";
import banner1 from "../../assets/iphoneb.jpg"
import banner2 from "../../assets/stereo.png"
const Banner = () => {
  // Using placeholder images for demo
  const banners = [
    {
      id: 1,
      image: banner1,
      title: "iPhone 16 Pro Max",
      subtitle: "Up to 10% off Voucher",
      description: "Experience the ultimate in mobile technology",
      buttonText: "Shop Now",
      bgColor: "bg-gradient-to-r from-gray-900 to-black",
      textColor: "text-white"
    },
    {
      id: 2,
      image: banner2,
      title: "Enhance Your Music Experience",
      subtitle: "Best Selling Category",
      description: "Premium audio quality for music lovers",
      buttonText: "Explore Audio",
      bgColor: "bg-gradient-to-r from-purple-900 to-black",
      textColor: "text-white"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",
      title: "Women's Collection",
      subtitle: "Featured Women Collection",
      description: "Discover the latest fashion trends",
      buttonText: "Shop Collection",
      bgColor: "bg-gradient-to-r from-pink-900 to-black",
      textColor: "text-white"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length, isHovered]);

  return (
    <div 
      className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden mb-4 md:mb-6 shadow-lg md:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`min-w-full h-full flex items-center ${banner.bgColor} relative overflow-hidden`}
          >
            {/* Left Side - Content (50%) */}
            <div className={`w-1/2 h-full flex flex-col justify-center px-3 sm:px-4 md:px-8 lg:px-12 ${banner.textColor} z-10`}>
              <div className="space-y-1 sm:space-y-2 md:space-y-4">
                <p className="text-xs sm:text-sm lg:text-base font-medium opacity-90 uppercase tracking-wider">
                  {banner.subtitle}
                </p>
                <h2 className="text-sm sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  {banner.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-80 max-w-md hidden sm:block">
                  {banner.description}
                </p>
                <button className="mt-2 sm:mt-3 md:mt-6 bg-white flex items-center justify-center gap-2 text-black px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {banner.buttonText} 
                  <FaHandPointRight/>
                </button>
              </div>
            </div>

            {/* Right Side - Image (50%) */}
            <div className="w-1/2 h-full relative overflow-hidden">
              <img 
                src={banner.image} 
                alt={banner.title}
                className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700"
              />
              {/* Image Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 sm:w-12 md:w-20 h-8 sm:h-12 md:h-20 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-6 sm:w-10 md:w-16 h-6 sm:h-10 md:h-16 border border-white/10 rounded-full"></div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide(currentSlide === 0 ? banners.length - 1 : currentSlide - 1)}
        className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-1.5 sm:p-2 md:p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
      >
        <svg className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % banners.length)}
        className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-1.5 sm:p-2 md:p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
      >
        <svg className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator - Enhanced and Mobile Optimized */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 md:space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-4 sm:w-6 md:w-8 h-1.5 sm:h-2 md:h-3 bg-white rounded-full' 
                : 'w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 bg-white/50 rounded-full hover:bg-white/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / banners.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default Banner;