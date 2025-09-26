import { MessageSquareText } from "lucide-react";
import React from "react";

const ProductReview = () => {
  return (
    <div className="my-3">
      <div className="flex items-center justify-between poppins-font">
        <h1 className="font-semibold text-2xl">Product Reviews</h1>
        <div className="flex items-center justify-center gap-2">
          <button className="bg-red-500 rounded hover:scale-95 hover:bg-red-600 transition-all duration-150 text-white font-semibold flex text-base items-center justify-center gap-2 px-2 py-1">
            <MessageSquareText />
            <span>Add New</span>
          </button>
          <button className="bg-black text-white px-2 py-1 text-base rounded lg:cursor-pointer hover:bg-gray-900 duration-200 transition-all hover:scale-95">
            Show All
          </button>
        </div>
      </div>
      <div className="">
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProductReview;
