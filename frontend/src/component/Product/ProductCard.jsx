import React, { useEffect } from "react";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import { FaBucket } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "@/redux/Client/auth.store";
import {
  addProductInWishlist,
  deleteProductFromWishlist,
  getWishListProducts,
} from "@/redux/Client/wishlist.store";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";

const ProductsCard = ({ list, scrollRef, loading }) => {
  const dispatch = useDispatch();
  //get wishlist products
  const { wishListProducts: wishlist } = useSelector((state) => state.wishlist);
  const { user } = useSelector((state) => state.auth);
  const toggleWishlist = async (product) => {
    if (user) {
      const inWishlist =
        Array.isArray(wishlist) &&
        wishlist.find((wish) => wish._id === product._id);
      if (inWishlist) {
        // 🔻 delete case with toast.promise
        await toast.promise(dispatch(deleteProductFromWishlist(product._id)), {
          loading: "Removing from wishlist...",
          success: <b>Removed from wishlist!</b>,
          error: <b>Could not remove product.</b>,
        });
      } else {
        // 🔺 add case with toast.promise
        await toast.promise(dispatch(addProductInWishlist(product._id)), {
          loading: "Adding to wishlist...",
          success: <b>Added to wishlist!</b>,
          error: <b>Could not add product.</b>,
        });
      }
      // ✅ Refresh wishlist from backend
      dispatch(getWishListProducts());
    } else {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-slide-in-right" : "animate-slide-out-right"
          } md:max-w-md md:w-full w-80 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-2 lg:p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                  alt="login required"
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm md:text-base font-medium text-gray-900">
                  Login Required
                </p>
                <div className="hidden md:flex">
                  <p className=" md:mt-1 text-xs md:text-sm text-gray-500">
                    Log in now to save your favorite items in your wishlist.
                  </p>
                </div>
                <p className="md:hidden flex md:mt-1 text-xs md:text-sm text-gray-500">
                  Login to update wishlist Products.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            {/* Login Button */}
            <button
              onClick={() => {
                toast.dismiss(t.id);
                navigate("/signin");
              }}
              className="w-full border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
            {/* Close Button */}
            <button
              onClick={() => toast.dismiss(t.id)}
              className="hidden lg:flex w-full border bg-gradient-to-t to-[#36D1DC] from-[#5B86E5] rounded-r-lg text-white border-transparent rounded-none p-4  items-center justify-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    }
  };
  useEffect(() => {
    dispatch(userProfile());
    dispatch(getWishListProducts());
  }, [dispatch, wishlist?.length]);
  // Products ko 2 rows mein divide karna
  const chunkSize = Math.ceil(list.length / 2);
  const firstRow = list.slice(0, chunkSize);
  const secondRow = list.slice(chunkSize);

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

  const ProductCard = ({ product }) => {
    const inWishlist =
      Array.isArray(wishlist) &&
      wishlist.find((wish) => wish._id === product._id);
    return (
      <div className="min-w-[190px] md:min-w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative h-48 overflow-hidden bg-gray-50 rounded-t-lg">
          <img
            src={product.images[0].url}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />

          {/* Action Buttons */}
          <div className="absolute top-4 right-2 flex flex-col gap-2 transition-opacity duration-300">
            <div
              onClick={() => toggleWishlist(product)}
              className="bg-white rounded-full p-2 cursor-pointer hover:scale-110 transition-transform duration-150 shadow-md"
            >
              {inWishlist ? (
                <FaHeart className="text-red-600" />
              ) : (
                <FaRegHeart className="text-gray-500" />
              )}
              {/* <Heart
                size={16}
                className={`${inWishlist ? "" : ""}text-gray-600 `}
              /> */}
            </div>
            {/* <div className="bg-white rounded-full p-2 cursor-pointer hover:scale-110 transition-transform duration-150 shadow-md"> */}
            <div className="">
              <Dialog>
                <div className="absolute top-14 right-0">
                  {/* bg-white rounded-full p-1 cursor-pointer transition-all duration-150 hover:scale-110 border */}
                  {/* <DialogTrigger>
                          <span className="w-5 h-5 bg-white">
                            <IoEyeOutline  className=" w-5 h-5 bg-white rounded-full"/>
                          </span>
                        </DialogTrigger> */}
                  <DialogTrigger>
                    <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                      <Eye className="w-5 h-5 text-gray-600" />
                    </span>
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
                </div>
              </Dialog>
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
          <Link to={`/product/${product._id}`}>
            <h3 className="text-sm font-semibold text-gray-800  line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <div className="flex gap-3 items-center">
            <p className="text-red-500 text-lg font-bold">${product.price}</p>
            {product.percentOff !== undefined && (
              <p className="line-through text-sm text-gray-400 font-light">
                ${Math.round(product.price / (1 - product.percentOff / 100))}
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
          <div className="flex gap-2 items-center text-sm">
            <button className="flex items-center justify-center gap-2 bg-black w-full px-2 py-1 text-white rounded md:cursor-pointer transition-all hover:scale-95 duration-150">
              <span>
                <FaBucket />
              </span>
              <p>Add To Cart</p>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
      <div className="flex flex-col gap-4 pb-4">
        {loading ? (
          <div className="">
            <div className="flex flex-row gap-4">
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
            </div>
            <div className="flex flex-row gap-4">
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
            </div>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};
export default ProductsCard;
