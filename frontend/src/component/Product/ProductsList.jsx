import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
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
import { CarTaxiFront, Loader } from "lucide-react";
import { FaBucket } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductInWishlist,
  deleteProductFromWishlist,
  getWishListProducts,
} from "@/redux/Client/wishlist.store";
import toast from "react-hot-toast";
import { userProfile } from "@/redux/Client/auth.store";
import { addProductInCart } from "@/redux/Client/cart.store";

const ProductsList = ({ products, scrollRef, loading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [prod, setProd] = useState({
    size: "",
    color: "",
    productId: "",
  });
  const [loadingProductId, setLoadingProductId] = useState(null);
  const { wishListProducts: wishlist } = useSelector((state) => state.wishlist);
  const { user } = useSelector((state) => state.auth);
  const { cart, addcartLoading } = useSelector((state) => state.cart);
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
  // Skeleton Loader
  // const handleAddToCart = async(id) => {
  //   if (!user) {
  //     toast.error("Login Required");
  //     return;
  //   }

  //   if (prod.productId !== id) {
  //     toast.error("Please select this product's size & color");
  //     return;
  //   }
  //   if (!prod.color) {
  //     toast.error("Color required");
  //     return;
  //   }
  //   if (!prod.size) {
  //     toast.error("Size required");
  //     return;
  //   }
  //   setLoadingProductId(id)
  //   try{

  //     await dispatch(
  //       addProductInCart({
  //         size: prod.size,
  //         color: prod.color,
  //         quantity: 1,
  //         id,
  //       })
  //     );
  //   }finally{
  //     setProd({ size: "", color: "", productId: "" }); // reset after adding
  //     setLoadingProductId(null)
  //   }

  // };
  const handleAddToCart = async (id) => {
  if (!user) {
    toast.error("Login Required");
    return;
  }

  if (prod.productId !== id) {
    toast.error("Please select this product's size & color");
    return;
  }
  if (!prod.color) {
    toast.error("Color required");
    return;
  }
  if (!prod.size) {
    toast.error("Size required");
    return;
  }

  setLoadingProductId(id);

  try {
    await dispatch(
      addProductInCart({
        size: prod.size,
        color: prod.color,
        quantity: 1,
        id,
      })
    ).unwrap(); // agar redux toolkit asyncThunk use kar rahe ho to unwrap karna best hai
    toast.success("Product added to cart!");
  } catch (error) {
    toast.error("Failed to add product in cart!");
  } finally {
    setProd({ size: "", color: "", productId: "" });
    setLoadingProductId(null);
  }
};

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
          : products?.map((product) => {
              const inWishlist =
                Array.isArray(wishlist) &&
                wishlist.find((wish) => wish._id === product._id);
              return (
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
                      <Dialog>
                        <div className="absolute top-14 right-2">
                          {/* bg-white rounded-full p-1 cursor-pointer transition-all duration-150 hover:scale-110 border */}
                          {/* <DialogTrigger>
                          <span className="w-5 h-5 bg-white">
                            <IoEyeOutline  className=" w-5 h-5 bg-white rounded-full"/>
                          </span>
                        </DialogTrigger> */}
                          <DialogTrigger>
                            <span className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                              <IoEyeOutline className="w-5 h-5 text-black" />
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

                      {/* Heart Icon */}
                      <div
                        onClick={() => toggleWishlist(product)}
                        className="absolute top-4 right-2 bg-white rounded-full p-1 cursor-pointer transition-all duration-150 hover:scale-110 border"
                      >
                        {inWishlist ? (
                          <FaHeart className="text-red-600" />
                        ) : (
                          <FaRegHeart className="text-gray-500" />
                        )}
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
                      <Link to={`/product/${product._id}`}>
                        <h3 className="text-sm font-semibold hover:underline text-gray-800 line-clamp-1">
                          {product.name}
                        </h3>
                      </Link>
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
                            className={`w-7 h-7 rounded-full overflow-hidden ${
                              prod.productId === product._id && prod.color === c
                                ? "border-black border-2"
                                : "border-gray-400 border-1"
                            }`}
                            style={{ backgroundColor: c }}
                            onClick={() =>
                              setProd(
                                (prev) =>
                                  prev.productId === product._id
                                    ? { ...prev, color: c } // same product => update only color
                                    : {
                                        productId: product._id,
                                        color: c,
                                        size: "",
                                      } // new product => reset size
                              )
                            }
                          ></button>
                        ))}
                      </div>
                      <div className="space-x-2 text-start flex items-center mb-1">
                        <span className="text-xs text-gray-800">Sizes:</span>
                        {product.size.map((c, index) => (
                          <button
                            key={index}
                            className={`px-2 py-1 text-xs border-1 overflow-hidden border-black ${
                              prod.productId === product._id && c === prod.size
                                ? "bg-black text-white"
                                : ""
                            }`}
                            onClick={() =>
                              setProd(
                                (prev) =>
                                  prev.productId === product._id
                                    ? { ...prev, size: c } // same product => update only color
                                    : {
                                        productId: product._id,
                                        color: "",
                                        size: c,
                                      } // new product => reset size
                              )
                            }
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                      <div className="">
                        <button
                          onClick={() => handleAddToCart(product._id)}
                          className="flex items-center justify-center gap-2 bg-black w-full px-2 py-1 text-white rounded md:cursor-pointer transition-all hover:scale-95 duration-150"
                        >
                          {loadingProductId === product._id ? (
                            <Loader className="text-white size-6 text-center animate-spin" />
                          ) : (
                            <>
                              <span>
                                <FaBucket />
                              </span>
                              <p>Add To Cart</p>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ProductsList;
