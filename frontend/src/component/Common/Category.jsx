import React, { useRef } from "react";
import CategorySlider from "../Layout/CategorySlider";
import { GiDress, GiClothes, GiLipstick } from "react-icons/gi";
import { MdPhoneIphone, MdPets } from "react-icons/md";
import { FaStethoscope, FaBaby } from "react-icons/fa";
import { IoHomeOutline, IoFootballOutline } from "react-icons/io5";
import { LuArrowBigLeftDash } from "react-icons/lu";
import { LuArrowBigRightDash } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "@/redux/Client/sideBar.store";

const Category = () => {
  const{setHam}= useSelector((state)=>state.sidebar)
  const dispatch = useDispatch()
  const scrollRef = useRef(null);
  const cat = [
    {
      id: 1,
      name: "Woman's Fashion",
      icon: GiDress,
      path: "/category/womens-fashion",
      gradient: "from-pink-400 to-purple-500",
      bgColor: "bg-pink-50 hover:bg-pink-100",
    },
    {
      id: 2,
      name: "Men's Fashion",
      icon: GiClothes,
      path: "/category/mens-fashion",
      gradient: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50 hover:bg-blue-100",
    },
    {
      id: 3,
      name: "Electronics",
      icon: MdPhoneIphone,
      path: "/category/electronics",
      gradient: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-50 hover:bg-gray-100",
    },
    {
      id: 4,
      name: "Home & Lifestyle",
      icon: IoHomeOutline,
      path: "/category/home-lifestyle",
      gradient: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50 hover:bg-green-100",
    },
    {
      id: 5,
      name: "Medicine",
      icon: FaStethoscope,
      path: "/category/medicine",
      gradient: "from-red-400 to-red-600",
      bgColor: "bg-red-50 hover:bg-red-100",
    },
    {
      id: 6,
      name: "Sports & Outdoor",
      icon: IoFootballOutline,
      path: "/category/sports-outdoor",
      gradient: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
    },
    {
      id: 7,
      name: "Baby's & Toys",
      icon: FaBaby,
      path: "/category/baby-toys",
      gradient: "from-yellow-400 to-amber-500",
      bgColor: "bg-yellow-50 hover:bg-yellow-100",
    },
    {
      id: 8,
      name: "Groceries & Pets",
      icon: MdPets,
      path: "/category/groceries-pets",
      gradient: "from-teal-400 to-cyan-500",
      bgColor: "bg-teal-50 hover:bg-teal-100",
    },
    {
      id: 9,
      name: "Health & Beauty",
      icon: GiLipstick,
      path: "/category/health-beauty",
      gradient: "from-rose-400 to-pink-500",
      bgColor: "bg-rose-50 hover:bg-rose-100",
    },
  ];
  const showCategories = ()=>{
    dispatch(toggleSideBar())
  }
  const moveLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -400, // scroll 300px to left
        behavior: "smooth",
      });
    }
  };

  const moveRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 400, // scroll 300px to right
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-8 bg-red-500 rounded-[2px]" />
        <h3 className="text-red-500 text-sm poppins-font font-semibold">
          Categories
        </h3>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="poppins-font font-bold text-lg md:text-2xl mt-2">
          Browse By Category
        </h2>
        <div className="flex gap-4 items-center justify-center p-3">
          {/* Left Hand Icon */}
          <div
            onClick={moveLeft}
            className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
          >
            <LuArrowBigLeftDash className="text-gray-700 text-lg" />
          </div>

          {/* Right Hand Icon */}
          <div
            onClick={moveRight}
            className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
          >
            <LuArrowBigRightDash className="text-gray-700 text-lg" />
          </div>
        </div>
      </div>
      <CategorySlider list={cat} scrollRef={scrollRef} />
      <div className="flex items-center justify-center">
        <button
          onClick={showCategories}
          className="bg-red-500 px-4 py-2 text-white poppins-font mt-3 rounded font-semibold"
        >
          Show All Categories
        </button>
      </div>
      <br />
      <div className="w-full h-[2px] bg-gray-200 mb-7"></div>
    </div>
  );
};

export default Category;
