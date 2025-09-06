import React, { useEffect, useRef } from "react";
import ProductsList from "./ProductsList";
import { GiLipstick } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import { IoFootballOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSellingProducts } from "@/redux/Client/product.store";

const BestSellingProducts = () => {
  const dispatch = useDispatch();
  const scrollref = useRef();
  const { bestSellingProducts: products, loading } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(fetchBestSellingProducts());
  }, [dispatch]);
  console.log("Best Selling : ",products)
  // const products = [
  //   {
  //     _id: "3",
  //     name: "Gaming Mechanical Keyboard",
  //     price: 149,
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
  //       },
  //     ],
  //     //   percentOff: 25,
  //     numReviews: 234,
  //   },
  //   {
  //     _id: "4",
  //     name: "Ultra HD 4K Monitor",
  //     price: 449,
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
  //       },
  //     ],
  //     percentOff: 30,
  //     numReviews: 156,
  //   },
  //   {
  //     _id: "5",
  //     name: "Bluetooth Speaker",
  //     price: 89,
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
  //       },
  //     ],
  //     percentOff: 33,
  //     numReviews: 67,
  //   },
  //   {
  //     _id: "6",
  //     name: "Wireless Mouse",
  //     price: 59,
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
  //       },
  //     ],
  //     percentOff: 28,
  //     numReviews: 45,
  //   },
  // ];
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-8 bg-red-500 rounded-[2px]" />
        <h3 className="text-red-500 text-sm poppins-font font-semibold">
          This Month
        </h3>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="poppins-font font-bold text-lg md:text-2xl mt-2">
          Best Selling Products
        </h2>
        <button className="cursor-pointer hover:bg-red-700 transition-all duration-200 bg-red-500 px-2 py-1 md:px-4 md:py-2 text-white poppins-font mt-3 rounded font-semibold">
          View All
        </button>
      </div>
      <div className="flex items-center justify-center mt-4 md:mt-6">
        <ProductsList products={products.bestproducts} scrollRef={scrollref} loading={loading} />
      </div>
      <div className="w-full h-[2px] bg-gray-200 my-6"></div>
    </div>
  );
};

export default BestSellingProducts;
