import React from "react";
import { FaRegHandPointLeft } from "react-icons/fa";
const CategorySlider = ({ list, scrollRef }) => {
  return (
    <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 py-4">
        {/* {list.map((category, index) => (
        <div className="" key={index}>
          <div className="border min-w-[200px] p-3 flex items-center justify-center">
                <FaRegHandPointLeft className=""/>
                {category.name}
          </div>
        </div>
      ))} */}
        {list.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div key={category.id} className="group cursor-pointer">
              <div
                className={`
                  relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl 
                  transform hover:-translate-y-1 transition-all duration-300
                  ${category.bgColor} border border-gray-200
                  min-h-[200px] w-[119px] md:w-[200px] p-6 flex flex-col items-center justify-center
                  hover:border-gray-300
                `}
              >
                {/* Background Gradient Effect */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-br ${category.gradient} 
                    opacity-0 group-hover:opacity-10 transition-opacity duration-300
                  `}
                ></div>

                {/* Icon Container */}
                <div
                  className={`
                    relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${category.gradient}
                    flex items-center justify-center mb-4 
                    group-hover:scale-110 transition-transform duration-300
                    shadow-lg
                  `}
                >
                  <IconComponent className="text-2xl text-white" />
                </div>

                {/* Category Name */}
                <h3
                  className="
                    relative z-10 text-lg font-semibold text-gray-800 text-center
                    group-hover:text-gray-900 transition-colors duration-300
                    leading-tight
                  "
                >
                  {category.name}
                </h3>

                {/* Hover Arrow */}
                <div
                  className="
                    absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300
                  "
                >
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySlider;
