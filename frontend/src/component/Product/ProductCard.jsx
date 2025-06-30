import React from "react";
import { Heart, Eye, ShoppingCart } from "lucide-react";

const ProductsCard = ({ list, scrollRef }) => {
  // Products ko 2 rows mein divide karna
  const chunkSize = Math.ceil(list.length / 2);
  const firstRow = list.slice(0, chunkSize);
  const secondRow = list.slice(chunkSize);

  const ProductCard = ({ product }) => (
    <div className="min-w-[190px] md:min-w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden bg-gray-50 rounded-t-lg">
        <img
          src={product.images[0].url}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />

        {/* Action Buttons */}
        <div className="absolute top-4 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white rounded-full p-2 cursor-pointer hover:scale-110 transition-transform duration-150 shadow-md">
            <Heart size={16} className="text-gray-600" />
          </div>
          <div className="bg-white rounded-full p-2 cursor-pointer hover:scale-110 transition-transform duration-150 shadow-md">
            <Eye size={16} className="text-gray-600" />
          </div>
        </div>

        {/* Discount Badge */}
        {product.percentOff !== undefined && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 text-xs rounded font-medium">
            -{product.percentOff}% OFF
          </div>
        )}

        {/* Add to Cart Button - Shows on Hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full flex items-center justify-center gap-2 text-sm font-medium">
            <ShoppingCart size={16} />
            Add To Cart
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 h-10">
          {product.name}
        </h3>

        <div className="flex gap-3 items-center mb-2">
          <p className="text-red-500 text-lg font-bold">${product.price}</p>
          {product.percentOff !== undefined && (
            <p className="line-through text-sm text-gray-400 font-light">
              ${Math.round(product.price / (1 - product.percentOff / 100))}
            </p>
          )}
        </div>

        <div className="flex gap-2 items-center text-sm">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <span className="text-gray-500">({product.numReviews})</span>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
      <div className="flex flex-col gap-4 pb-4">
        {/* First Row */}
        <div className="flex gap-4">
          {firstRow.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* Second Row */}
        {secondRow.length > 0 && (
          <div className="flex gap-4">
            {secondRow.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductsCard