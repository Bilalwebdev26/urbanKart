import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stars from "../Common/Stars";
import { Heart, ShoppingCart } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { Truck } from "lucide-react";
import axios from "axios";
import LoadingSpinner from "../Common/PorductLoading";
import { BiBasket } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductInWishlist,
  deleteProductFromWishlist,
  getWishListProducts,
} from "@/redux/Client/wishlist.store";
import {
  fetchProductById,
  fetchSimillarProducts,
} from "@/redux/Client/product.store";
import ProductsList from "./ProductsList";

const ProductId = () => {
  //productById
  const { id } = useParams();
  console.log("Id : ", id);
  const dispatch = useDispatch();
  const { wishListProducts: wishlist } = useSelector((state) => state.wishlist);
  const { user } = useSelector((state) => state.auth);
  // const {
  //   productId: product,
  //   loading,
  //   error,
  // } = useSelector((state) => state.product);
  // const { simillarProducts, loading: productLoading } = useSelector(
  //   (state) => state.product
  // );
  const {
    productId: product,
    loading,
    error,
    simillarProducts,
    loading: productLoading,
  } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProductById(id));
    dispatch(fetchSimillarProducts(id));
  }, [dispatch, id]);
  console.log("Fetch Simillar : ", simillarProducts);
  console.log("WishList wait: ", wishlist);
  console.log("Product Id wait: ", product);
  const addWish = wishlist.some((wish) => wish._id === id);
  console.log("True/False ", addWish);
  useEffect(() => {
    dispatch(getWishListProducts());
  }, [dispatch, wishlist?.length]);
  // const [product, setProduct] = useState();
  // const [loading, setLoading] = useState(true);
  const [productImage, setProductIamge] = useState(null);
  const [sizeP, setSize] = useState(null);
  const scrollRef = useRef();
  const navigate = useNavigate();
  // useEffect(() => {
  //   const productById = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${import.meta.env.VITE_BACKEND_URL}/api/v1/product/${id}`
  //       );
  //       console.log("Here api hit:", res);
  //       setProduct(res.data.product);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching product:", error);
  //       setLoading(false);
  //     }
  //   };

  //   if (id) {
  //     productById();
  //   }
  // }, [id]);
  //product img ke liye
  useEffect(() => {
    if (product?.images?.length > 0) {
      setProductIamge(product.images[0].url);
    }
    if (product?.size?.length > 0) {
      setSize(product.size[0]);
    }
  }, [product]);

  const [colorP, setColor] = useState();
  const [quantity, setQuantity] = useState(Number(1));
  const handleAddQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleSubQuantity = () => {
    if (quantity === 1) {
      return 1;
    }
    setQuantity((prev) => prev - 1);
  };
  const AddInWishlist = async (id) => {
    if (user) {
      if (addWish === false) {
        //await dispatch(addProductInWishlist(id));
        await toast.promise(dispatch(addProductInWishlist(id)), {
          loading: "Adding to wishlist...",
          success: <b className="text-green-700">Added to wishlist!</b>,
          error: <b>Could not add product.</b>,
        });
      }
      if (addWish === true) {
        //await dispatch(deleteProductFromWishlist(id));
        // await toast.promise(dispatch(deleteProductFromWishlist(product._id)), {
        //   loading: "Removing from wishlist...",
        //   success: <b>Removed from wishlist!</b>,
        //   error: <b>Could not remove product.</b>,
        // });
        await toast.promise(
          dispatch(deleteProductFromWishlist(id)),
          {
            loading: "Removing from wishlist...",
            success: <b>Removed from wishlist!</b>,
            error: <b>Could not remove product.</b>,
          },
          {
            success: {
              style: {
                border: "1px solid #FF0000",
                // padding: "16px",
                color: "#FF0000",
              },
              iconTheme: {
                primary: "#FF0000", // ✅ tick ka color
                secondary: "#FFFAEE", // ✅ background circle ka color
              },
            },
          }
        );

        // toast.success("Remove from your wishlist.", {
        //   style: {
        //     border: "1px solid #713200",
        //     padding: "16px",
        //     color: "#713200",
        //   },
        //   iconTheme: {
        //     primary: "#713200",
        //     secondary: "#FFFAEE",
        //   },
        // });
      }
      dispatch(getWishListProducts());
    } else {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-slide-in-right" : "animate-slide-out-right"
          } md:max-w-md md:w-full w-82 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
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
  const setHandleColor = (col) => {
    setColor(col);
  };
  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="w-full">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex shadow-sm lg:flex-row flex-col">
        {/*---------------------------------- Image Part--------------------------- */}
        {/* ----------------------------------------------- */}
        <div className="w-full lg:w-1/2 lg:h-[400px]">
          <div className="flex h-full">
            {/* Left side thumbnails - take full height and divide space equally */}
            <div className="hidden lg:flex flex-col space-y-2 mr-3 h-full">
              {product?.images?.map((prod, index) => (
                <div className="w-20 h-20" key={index}>
                  <img
                    onClick={() => setProductIamge(prod.url)}
                    src={prod?.url}
                    alt={prod.altText}
                    className={`border-2 rounded w-full h-full object-cover cursor-pointer transition-all ${
                      productImage === prod.url
                        ? "border-red-500"
                        : "border-black"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Right side main image */}
            <div className="flex-1 h-full">
              <img
                src={productImage}
                alt="Main Product"
                className="w-full h-full object-contain rounded"
              />
            </div>
          </div>
          <div className="w-full lg:hidden">
            <div className="flex items-center justify-center lg:hidden space-x-2 ">
              {product?.images?.map((prod, index) => (
                <div className="w-15 md:w-20 h-15 md:h-20 mt-1" key={index}>
                  <img
                    onClick={() => setProductIamge(prod.url)}
                    src={prod?.url}
                    alt={prod.altText}
                    className={`border-2 rounded w-full h-full object-cover cursor-pointer transition-all ${
                      productImage === prod.url
                        ? "border-red-500"
                        : "border-black"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*--------------------------------- Main Content--------------------------- */}
        <div className="mt-1 p-2 w-full lg:w-1/2">
          <div className="poppins-font">
            <h2 className="text-xl font-semibold line-clamp-1 ">
              {product?.name}
            </h2>
            <div className="flex items-center space-x-2">
              {/* Stars */}
              <div className="">
                <Stars stars={product.rating} />
              </div>
              <span className="text-xs text-gray-600">
                ({product.numReviews} Reviews)
              </span>
              <span className="text-gray-500">|</span>
              <span
                className={`${
                  product.checkStock ? "text-green-500" : "text-red-500"
                } text-xs`}
              >
                {product.checkStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <div className="my-3">
              <p className="text-2xl">
                {product?.price?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            <div className="">
              <p className="text-xs text-justify">{product.desc}</p>
            </div>
            <div className="border border-b border-gray-400 mt-6 mb-2"></div>
            <div className="flex mb-2">
              <span className="mr-3 text-sm">colors : </span>
              <div className="space-x-2 flex items-center">
                {product.color?.map((col, index) => (
                  <button
                    onClick={() => setHandleColor(col)}
                    className={`inline-block w-8 h-8  rounded-full cursor-pointer border-2 ${
                      col === colorP ? "border-3 border-black" : ""
                    }`}
                    key={index}
                    style={{ backgroundColor: col }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-3 text-sm">sizes : </span>
              <div className="space-x-2 flex items-center">
                {product.size?.map((s, index) => (
                  <button
                    onClick={() => setSize(s)}
                    className={`${
                      s === sizeP
                        ? "bg-black text-white"
                        : "border-2 border-gray-300"
                    } cursor-pointer text-center text-sm   rounded-sm p-1`}
                    key={index}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center  space-x-2 mb-2">
              {/* Quantity */}
              <div className="flex items-center border rounded-sm">
                {/* Minus Button */}
                <button
                  onClick={handleSubQuantity}
                  className="border w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center cursor-pointer"
                >
                  -
                </button>

                {/* Quantity Display */}
                <span className="w-15 h-8 lg:w-16 lg:h-10 flex items-center justify-center border-x">
                  {quantity}
                </span>

                {/* Plus Button */}
                <button
                  onClick={handleAddQuantity}
                  className="border w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-black text-white border-black cursor-pointer"
                >
                  +
                </button>
              </div>
              {/* Buy Button */}

              <button className="bg-black text-white px-4  lg:h-10 h-9 rounded-sm py-1 text-center cursor-pointer hover:scale-95 transition-all duration-200">
                Buy Now
              </button>
              <div className="">
                <button className="bg-black hidden lg:flex items-center gap-2 text-white px-2  lg:h-10 h-9 rounded-sm py-1 text-center cursor-pointer hover:scale-95 transition-all duration-200">
                  <ShoppingCart className="size-5" />
                  <span className="text-sm">Add To Cart</span>
                </button>
                <button className="bg-black flex items-center gap-2 lg:hidden text-white px-4  lg:h-10 h-9 rounded-sm py-1 text-center cursor-pointer hover:scale-95 transition-all duration-200">
                  <ShoppingCart className="size-5" />
                </button>
                {/* <button className="bg-black text-white text-xs px-2 lg:px-4 lg:h-10 h-9 rounded-sm py-1 text-center cursor-pointer hover:scale-95 transition-all duration-200">
                  Add to Cart
                </button> */}
              </div>

              {/* Wishlist */}
              <div className="border w-10 h-9 rounded-sm flex items-center justify-center">
                <Heart
                  onClick={() => AddInWishlist(product._id)}
                  className={`size-7 lg:cursor-pointer ${
                    addWish ? "fill-red-500 text-red-300" : ""
                  }`}
                />
              </div>
            </div>
            {/* Delivery */}
            <div className="w-full">
              <div className="border flex space-x-4 items-center justify-start px-6 py-2">
                <Truck className="size-9" />
                <div className="">
                  <h3 className="text-base font-semibold">Free Delivery</h3>
                  <p className="text-sm">
                    Enter your Postal code for free delivery.
                  </p>
                </div>
              </div>
              {/* <div className="border"></div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Product list */}
      <div className="flex items-center gap-2 mt-4 mb-8">
        <div className="w-4 h-8 bg-red-500 rounded-[2px]" />
        <h3 className="text-red-500 text-sm poppins-font font-semibold">
          Simillar Products
        </h3>
      </div>
      <ProductsList
        products={simillarProducts}
        scrollRef={scrollRef}
        loading={productLoading}
      />
    </div>
  );
};

export default ProductId;
