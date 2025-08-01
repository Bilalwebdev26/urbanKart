import { Eye } from "lucide-react";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const WishList = () => {
  const wishlist = [
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
  const deleteFromWishlist = ()=>{}
  if (wishlist.length === 0) {
    return (
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
            Start adding your favorite products to your wishlist and never lose
            track of what you love!
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
    );
  }
  return (
    <div className="poppins-font">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">
          Wishlist(<span className="font-normal">{wishlist.length}</span>)
        </h2>
        <button className="bg-slate-950 text-white px-3 py-1 lg:px-5 lg:py-2 border-2 rounded-md text-sm hover:scale-95 transition-all lg:cursor-pointer hover:bg-black/80">
          Move All To Cart
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 space-y-4 my-6">
        {/* Products */}
        {wishlist.map((prod, index) => (
          <div
            className=" w-45 h-55 md:w-60 md:h-65 md:mr-2 rounded-lg shadow-lg"
            key={index}
          >
            {/* image */}
            <div className="overflow-hidden rounded-lg relative h-40 md:h-50">
              <img
                src={prod.image}
                alt=""
                className="rounded-lg transition-all duration-300 hover:scale-110"
              />
              {/* discount */}
              {prod.percentOff && (
                <div className="text-[10px] absolute top-2 bg-red-600 p-1 rounded text-white left-2">
                  -{prod.percentOff} OFF
                </div>
              )}
              {/* remove  */}
              <div onClick={deleteFromWishlist} className="absolute right-2 top-2 bg-white h-7 w-7 rounded-full flex items-center justify-center">
                <FaTrashAlt className="h-4 w-4" />
              </div>
              {/* add to cart */}
              <div className=" absolute bottom-0 bg-black w-full text-white flex items-center justify-center gap-2 px-2 py-2">
                <FaCartPlus />
                <h3>Add To Cart</h3>
              </div>
            </div>
            {/* content */}
            <div className="p-2">
              <h2 className="text-black font-semibold text-sm">{prod.name}</h2>
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
    </div>
  );
};

export default WishList;
