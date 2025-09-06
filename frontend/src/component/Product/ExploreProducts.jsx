import React, { useEffect, useRef } from "react";
import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSellingForEachCategory } from "@/redux/Client/product.store";

const ExploreProducts = () => {
  const scrollRef = useRef(null);
  const{bestEachCategory:products,loading}=useSelector((state)=>state.product)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchBestSellingForEachCategory())
  },[dispatch])
  const moveLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -420, // scroll 300px to left
        behavior: "smooth",
      });
    }
  };
  const moveRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 420, // scroll 300px to right
        behavior: "smooth",
      });
    }
  };
  const showProducts = ()=>{}
  // const products = [
  //   {
  //     _id: "1",
  //     name: "Premium Wireless Headphones",
  //     price: 299,
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  //       },
  //     ],
  //     percentOff: 27,
  //     numReviews: 128,
  //   },
  //   {
  //     _id: "2",
  //     name: "Smart Watch Pro",
  //     price: 199,
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
  //       },
  //     ],
  //     percentOff: 37,
  //     numReviews: 89,
  //   },
  //   {
  //     _id: "3",
  //     name: "Gaming Mechanical Keyboard",
  //     price: 149,
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
  //       },
  //     ],
  //     percentOff: 25,
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
  //     _id: "7",
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
  //   {
  //     _id: "8",
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
          Our Products
        </h3>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="poppins-font font-bold text-[15px] lg:text-2xl mt-2">
          Best Products For Each Category
        </h2>
        <div className="flex gap-4 items-center justify-center p-3">
          {/* Left Hand Icon */}
          <div
            onClick={moveLeft}
            className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
          >
            <FaRegHandPointLeft className="text-gray-700 text-lg" />
          </div>

          {/* Right Hand Icon */}
          <div
            onClick={moveRight}
            className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
          >
            <FaRegHandPointRight className="text-gray-700 text-lg" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ProductCard list={products} scrollRef={scrollRef} loading={loading}/>
      </div>
       <div className="flex items-center justify-center">
        <button
          onClick={showProducts}
          className="bg-red-500 px-4 py-2 text-white poppins-font mt-3 rounded font-semibold"
        >
          Show All Products
        </button>
      </div>
      <br />
      <div className="w-full h-[2px] bg-gray-200 my-7"></div>
    </div>
  );
};

export default ExploreProducts;
