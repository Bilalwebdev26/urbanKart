import { userProfile } from "@/redux/Client/auth.store";
import {
  deleteAllProductsFromWishlist,
  deleteProductFromWishlist,
  getWishListProducts,
} from "@/redux/Client/wishlist.store";
import { Eye, Loader } from "lucide-react";
import React, { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import UserLoading from "../Common/UserLoading";
import { toast } from "react-hot-toast";

const WishList = () => {
  const wishlists = [
    {
      _id: 1,
      name: "PS5 Launch",
      title: "PlayStation 5 - Limited Edition",
      desc: "Experience next-gen gaming.",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      link: "/products/ps5-limited",
    },
    {
      _id: 2,
      name: "DualSense Vibes",
      title: "Immersive DualSense Controller",
      desc: "Feel the game like never before.",
      percentOff: 33,
      price: 120,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      link: "/products/dualsense",
    },
    {
      _id: 3,
      name: "Next-Gen Power",
      title: "4K Gaming Redefined",
      desc: "Ultra-HD 4K graphics & 120FPS.",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
      link: "/products/4k-console",
    },
    {
      _id: 4,
      name: "PS5 Bundle",
      title: "Holiday PS5 Bundle Offer",
      desc: "Exclusive PS5 bundle with accessories.",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
      link: "/products/ps5-bundle",
    },
    {
      _id: 5,
      name: "PS5 Bundle",
      title: "Holiday PS5 Bundle Offer",
      desc: "Exclusive PS5 bundle with accessories.",
      price: 220,
      percentOff: 28,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
      link: "/products/ps5-bundle",
    },
  ];
  const dispatch = useDispatch();
  const { wishListProducts: wishlist, loading } = useSelector(
    (state) => state.wishlist
  );
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getWishListProducts());
    dispatch(userProfile());
  }, [dispatch, wishlist.length]);
  console.log("Wishlist.jsx : ", wishlist);
  const deleteFromWishlist = async (id) => {
    await dispatch(deleteProductFromWishlist(id));
    dispatch(getWishListProducts());
  };
  const removeAllFromWishlist = () => {
    if (wishlist.length > 0) {
      toast((t) => (
        <span className="flex flex-col gap-2">
          <p>Are you sure you want to remove all wishlist items?</p>
          <div className="flex gap-2">
            {/* Yes Button */}
            <button
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              onClick={() => {
                dispatch(deleteAllProductsFromWishlist()); // 🔥 delete all action
                toast.dismiss(t.id); // close toast
                toast.success("All items removed from wishlist!"); // success message
              }}
            >
              Yes
            </button>

            {/* No Button */}
            <button
              className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
              onClick={() => toast.dismiss(t.id)} // ❌ cancel
            >
              No
            </button>
          </div>
        </span>
      ));
    }
  };

  if (authLoading) {
    return <UserLoading />;
  }
  return (
    <div className="poppins-font">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">
          Wishlist(<span className="font-normal">{wishlist.length}</span>)
        </h2>
        {wishlist.length > 0 && (
          <div className="">
            <button className="bg-slate-950 text-white px-3 py-1 lg:px-5 lg:py-2 border-2 rounded-md text-sm hover:scale-95 transition-all lg:cursor-pointer hover:bg-black/80">
              Move All To Cart
            </button>
            <button
              onClick={() => removeAllFromWishlist()}
              className="bg-slate-950 text-white px-3 py-1 lg:px-5 lg:py-2 border-2 rounded-md text-sm hover:scale-95 transition-all lg:cursor-pointer hover:bg-black/80"
            >
              Remove All
            </button>
          </div>
        )}
      </div>

      {/* Loading state */}
      {!user ? (
        <>
          <div className="flex flex-col items-center justify-center min-h-[500px] px-4 py-16 bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Lock Icon */}
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center shadow-2xl border border-gray-600">
                <svg
                  className="w-10 h-10 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-20"></div>
            </div>

            {/* Main Content */}
            <div className="text-center max-w-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Access Required
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Login to see your wishlist products and manage your saved items.
              </p>

              {/* Login Button */}
              <button
                onClick={() => (window.location.href = "/signin")}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-red-500/30"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Login Now
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="mt-12 flex space-x-4 opacity-40">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </>
      ) : loading ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  {/* Main Image Skeleton */}
                  <div className="relative h-48 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]">
                    {/* Image placeholder icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Top right corner accent */}
                  </div>

                  {/* Content Area */}
                  <div className="p-4 space-y-3">
                    {/* Title Lines */}
                    <div className="space-y-2">
                      <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded animate-shimmer bg-[length:200%_100%]"></div>
                      <div
                        className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded animate-shimmer bg-[length:200%_100%] w-3/4"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-4">
                      <div
                        className="h-10 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg animate-shimmer bg-[length:200%_100%]"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Floating loading indicator */}
                  <div className="absolute top-2 left-2 flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <div
                      className="w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>

                  {/* Shimmer overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer-slide"></div>
                </div>
              ))}
          </div>

          <style>{`
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }

            @keyframes shimmer-slide {
              0% {
                transform: translateX(-100%) skewX(-12deg);
              }
              100% {
                transform: translateX(200%) skewX(-12deg);
              }
            }

            .animate-shimmer {
              animation: shimmer 2s infinite;
            }

            .animate-shimmer-slide {
              animation: shimmer-slide 2s infinite;
            }
          `}</style>
        </>
      ) : wishlist.length === 0 ? (
        <>
          <div className="flex flex-col items-center justify-center min-h-[500px] px-4 py-16 poppins-font">
            {/* Heart Icon */}
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-red-100 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-12 h-12 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              {/* Floating dots for decoration */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-300 rounded-full opacity-40"></div>
            </div>

            {/* Main Content */}
            <div className="text-center max-w-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Your Wishlist is Empty
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Start adding your favorite products to your wishlist and never
                lose track of what you love!
              </p>

              {/* Call to Action Button */}
              <button
                onClick={() => (window.location.href = "/products")}
                className="inline-flex items-center px-8 py-3 bg-black text-white font-semibold rounded-md hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Browse Products
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="mt-16 flex space-x-4 opacity-30">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 space-y-4 my-6">
          {Array.isArray(wishlist) &&
            wishlist.map((prod, index) => (
              <div
                className="w-45 h-55 md:w-60 md:h-65 md:mr-2 rounded-lg shadow-lg"
                key={index}
              >
                {/* image */}
                <div className="overflow-hidden rounded-lg relative h-40 md:h-50">
                  <img
                    src={prod.images[0].url}
                    alt="side image"
                    className="rounded-lg transition-all duration-300 hover:scale-110"
                  />
                  {prod.percentOff && (
                    <div className="text-[10px] absolute top-2 bg-red-600 p-1 rounded text-white left-2">
                      -{prod.percentOff} OFF
                    </div>
                  )}
                  <div
                    onClick={() => deleteFromWishlist(prod._id)}
                    className="absolute right-2 top-2 bg-white h-7 w-7 rounded-full flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <Loader className="size-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        <FaTrashAlt className="h-4 w-4" />
                      </>
                    )}
                  </div>
                  <div className="absolute bottom-0 bg-black w-full text-white flex items-center justify-center gap-2 px-2 py-2 text-xs md:text-sm">
                    <FaCartPlus />
                    <h3>Add To Cart</h3>
                  </div>
                </div>

                {/* content */}
                <div className="p-2">
                  <h2 className="text-black font-semibold text-xs md:text-sm line-clamp-1">
                    {prod.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <p className="text-red-500 text-sm font-semibold">
                      {prod.percentOff
                        ? (
                            prod.price -
                            (prod.price * prod.percentOff) / 100
                          ).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })
                        : prod?.price?.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                    </p>
                    {prod.percentOff && (
                      <p className="text-gray-500 text-sm line-through">
                        {prod?.price?.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
