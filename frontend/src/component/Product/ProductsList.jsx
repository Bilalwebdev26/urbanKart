// import React from "react";

// const ProductsList = ({ list }) => {
//   return (
//     <div className="overflow-x-auto scrollbar-hide">
//       {list.map((product) => (
//         <div
//           className="max-w-[20%] bg-red-200 mb-10"
//           key={product._id}
//         >
//           <div className="ha">
//             <div className="relative h-48 overflow-hidden bg-gray-50">
//               <img
//                 src={product.images[0].url}
//                 alt="name"
//                 className="w-full flex items-center justify-center h-full object-cover object-center"
//               />
//             </div>
//             <div className="bg-gray-200 poppins-font">
//               <h3 className="text-[12px] font-semibold">{product.name}</h3>
//               <div className="flex gap-4 items-center">
//                 <p className="text-red-500 text-md font-medium">
//                   ${product.price}
//                 </p>
//                 <p className="line-through text-sm text-gray-500 font-light">
//                   ${product.price}
//                 </p>
//               </div>
//               <div className="flex gap-2">
//                 <p>Ratting Stars</p>
//                 <p>({product.numReviews})</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductsList;
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
const ProductsList = ({ list, scrollRef }) => {
  return (
    <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 pb-4">
        {list.map((product) => (
          <div
            className="min-w-[180px] md:min-w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            key={product._id}
          >
            <div className="">
              <div className="relative h-48 overflow-hidden bg-gray-50 rounded-t-lg">
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-14 right-2 bg-white rounded-full p-1 cursor-pointer transition-all duration-150 hover:scale-110 border">
                  <IoEyeOutline />
                </div>
                <div className="absolute top-4 right-2 bg-white rounded-full p-1 cursor-pointer transition-all duration-150 hover:scale-110 border">
                  <FaRegHeart />
                </div>
                {product.percentOff !== undefined && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white p-1 text-sm rounded">
                    -{product.percentOff}% OFF
                  </div>
                )}
              </div>
              <div className="p-4 poppins-font">
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <div className="flex gap-4 items-center mb-2">
                  <p className="text-red-500 text-lg font-medium">
                    ${product.price}
                  </p>
                  {product.percentOff !== undefined && (
                    <p className="line-through text-sm text-gray-500 font-light">
                      $
                      {Math.round(
                        product.price / (1 - product.percentOff / 100)
                      )}
                    </p>
                  )}
                </div>
                <div className="flex gap-2 items-center text-sm text-gray-600">
                  <p>⭐⭐⭐⭐⭐</p>
                  <p>({product.numReviews})</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
