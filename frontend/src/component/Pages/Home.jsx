import React, { useState } from "react";
import Banner from "../Common/Banner";
import SalePoducts from "../Product/SalePoducts";
import Category from "../Common/Category";
import BestSellingProducts from "../Product/BestSellingProducts";
import SingleBanner from "../Common/SingleBanner";
import ExploreProducts from "../Product/ExploreProducts";
import NewArrivals from "../Product/NewArrivals";
import WebFeature from "../Common/WebFeature";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      <Banner />
      {/* Today Products */}
      <SalePoducts />
      {/* Category */}
      <Category />
      {/* Best Selling Products */}
      <BestSellingProducts />
      {/* Banner */}
      <SingleBanner />
      {/* Explore Products */}
      <ExploreProducts />
      {/* New Arrivals Products */}
      <NewArrivals />
      {/* Features of web  */}
      <WebFeature />
      {/*  */}
      <div
        onClick={scrollTop}
        className="bg-black h-12 w-12 lg:h-20 lg:w-20 flex items-center justify-center rounded-full cursor-pointer"
      >
        <button>
          <FaArrowUp className="text-white w-8 h-8 lg:w-10 lg:h-10 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Home;
