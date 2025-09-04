// import React from "react";
// import { FaRegHeart } from "react-icons/fa";
// import { IoEyeOutline } from "react-icons/io5";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import Stars from "../Common/Stars";
// const ProductsList = ({ products, scrollRef }) => {
//   console.log("list : ", products);
//   return (
//     <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
//       <div className="flex gap-4 pb-4">
//         {products?.map((product) => (
//           <div
//             className="min-w-[180px] md:min-w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             key={product._id}
//           >
//             <div className="">
//               <div className="relative h-48 overflow-hidden bg-gray-50 rounded-t-lg">
//                 <img
//                   src={product.images[0].url}
//                   alt={product.name}
//                   className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute top-14 right-2 bg-white rounded-full p-1 cursor-pointer transition-all duration-150 hover:scale-110 border">
//                   <div className="">
//                     <Dialog>
//                       <DialogTrigger>
//                         <IoEyeOutline />
//                       </DialogTrigger>
//                       <div className="">
//                         <DialogContent>
//                           <div className="flex flex-col md:flex-row gap-2">
//                             <img
//                               src={product.images[0].url}
//                               alt={product.name}
//                               className="w-full h-full md:w-60 md:h-60  mt-2 object-cover object-center hover:scale-105 transition-transform duration-300"
//                             />
//                             <div className="mt-2">
//                               <DialogHeader>
//                                 <div className="text-start ">
//                                   <DialogTitle>{product.name}</DialogTitle>
//                                 </div>
//                                 <DialogDescription className="text-start line-clamp-3">
//                                   {product.desc || "Fallback description..."}
//                                 </DialogDescription>

//                                 {/* <div className="">
//                                     {product.color.map((c,index)=>(
//                                       <button className="" key={index}>
//                                        {c}
//                                       </button>
//                                     ))}
//                                   </div> */}
//                                 <div className="">
//                                   <button className="bg-black text-white px-2 py-1">
//                                     Add to Cart
//                                   </button>
//                                 </div>
//                               </DialogHeader>
//                             </div>
//                           </div>
//                         </DialogContent>
//                       </div>
//                     </Dialog>
//                   </div>
//                 </div>
//                 <div className="absolute top-4 right-2 bg-white rounded-full p-1 cursor-pointer transition-all duration-150 hover:scale-110 border">
//                   <FaRegHeart />
//                 </div>
//                 {product.percentOff !== undefined && (
//                   <div className="absolute top-4 left-4 bg-red-600 text-white p-1 text-sm rounded">
//                     -{product.percentOff}% OFF
//                   </div>
//                 )}
//               </div>
//               <div className="p-4 poppins-font">
//                 <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-1">
//                   {product.name}
//                 </h3>
//                 <div className="flex gap-4 items-center mb-2">
//                   <p className="text-red-500 text-lg font-medium">
//                     ${product.price}
//                   </p>
//                   {product.percentOff !== undefined && (
//                     <p className="line-through text-sm text-gray-500 font-light">
//                       $
//                       {Math.round(
//                         product.price / (1 - product.percentOff / 100)
//                       )}
//                     </p>
//                   )}
//                 </div>
//                 <div className="flex gap-2 items-center text-sm text-gray-600">
//                    <Stars stars={product.rating} />
//                   <p>({product.numReviews})</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsList;

import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Stars from "../Common/Stars";
import { CarTaxiFront } from "lucide-react";
import { FaBucket } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductsList = ({ products, scrollRef, loading }) => {
  console.log("list : ", products);
  const [prod, setProd] = useState({
    size: "S",
    color: "",
  });
  // Skeleton Loader
  const SkeletonCard = () => (
    <div className="min-w-[180px] md:min-w-[250px] bg-white rounded-lg shadow-md animate-pulse">
      <div className="relative h-48 bg-gray-200 rounded-t-lg"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="flex gap-2">
          <div className="h-4 bg-gray-200 rounded w-6"></div>
          <div className="h-4 bg-gray-200 rounded w-10"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 pb-4">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          : products?.map((product) => (
              <div
                className="min-w-[180px] md:min-w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                key={product._id}
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-50 rounded-t-lg">
                    <img
                      src={product.images[0].url}
                      alt={product.name}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />

                    {/* Eye Button */}
                    <div className="absolute top-14 right-2 bg-white rounded-full p-1 cursor-pointer transition-all duration-150 hover:scale-110 border">
                      <Dialog>
                        <DialogTrigger>
                          <IoEyeOutline />
                        </DialogTrigger>
                        <DialogContent>
                          <div className="flex flex-col md:flex-row gap-2">
                            <img
                              src={product.images[0].url}
                              alt={product.name}
                              className="w-full h-full md:w-60 md:h-60 mt-2 object-cover object-center hover:scale-105 transition-transform duration-300"
                            />
                            <div className="mt-2">
                              <DialogHeader>
                                <DialogTitle className={"text-start"}>
                                  {product.name}
                                </DialogTitle>
                                <DialogDescription className="text-start line-clamp-3">
                                  {product.desc}
                                </DialogDescription>
                                <div className="space-x-1 text-start flex items-center mt-2">
                                  <span className="text-sm text-gray-800">
                                    Colors:
                                  </span>
                                  {product.color.map((c, index) => (
                                    <button
                                      key={index}
                                      className="w-5 h-5  border-1 border-black"
                                      style={{ backgroundColor: c }}
                                    ></button>
                                  ))}
                                </div>
                                <div className="space-x-1 text-start flex items-center mb-2">
                                  <span className="text-sm text-gray-800">
                                    Sizes:
                                  </span>
                                  {product.size.map((c, index) => (
                                    <button
                                      key={index}
                                      className="px-2 py-1 border-2 border-black"
                                    >
                                      {c}
                                    </button>
                                  ))}
                                </div>

                                {/* Color buttons */}
                                <button className="flex items-center justify-center gap-2 bg-black w-full px-2 py-1 text-white rounded md:cursor-pointer transition-all hover:scale-95 duration-150">
                                  <span>
                                    <FaBucket />
                                  </span>
                                  <p>Add To Cart</p>
                                </button>
                                <Link
                                  className="text-sm underline"
                                  to={`/product/${product._id}`}
                                >
                                  See More About Product
                                </Link>
                              </DialogHeader>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    {/* Heart Icon */}
                    <div className="absolute top-4 right-2 bg-white rounded-full p-1 cursor-pointer transition-all duration-150 hover:scale-110 border">
                      <FaRegHeart />
                    </div>

                    {/* Discount Tag */}
                    {product.percentOff !== undefined && (
                      <div className="absolute top-2 left-4 bg-red-600 text-white p-1 text-xs rounded">
                        -{product.percentOff}% OFF
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-2 md:p-4 poppins-font">
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex gap-4 items-center">
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
                    <div className="space-x-2 text-start flex items-center mb-1">
                      <span className="text-xs text-gray-800">Colors:</span>
                      {product.color.map((c, index) => (
                        <button
                          key={index}
                          className="w-3 h-3  border-1 border-black"
                          style={{ backgroundColor: c }}
                        ></button>
                      ))}
                    </div>
                    <div className="space-x-2 text-start flex items-center mb-1">
                      <span className="text-xs text-gray-800">Sizes:</span>
                      {product.size.map((c, index) => (
                        <button
                          key={index}
                          className="px-2 py-1 text-xs border-1 border-black"
                          onClick={() => setProd()}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center gap-2 bg-black w-full px-2 py-1 text-white rounded md:cursor-pointer transition-all hover:scale-95 duration-150">
                        <span>
                          <FaBucket />
                        </span>
                        <p>Add To Cart</p>
                      </button>
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
