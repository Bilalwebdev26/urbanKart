import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Stars from "../Common/Stars";
import { Heart, ShoppingCart } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { Truck } from "lucide-react";
import axios from "axios";
import LoadingSpinner from "../Common/PorductLoading";
import { BiBasket } from "react-icons/bi";

const ProductId = () => {
  //productById
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState();
  const [productImage, setProductIamge] = useState(null);
  const [sizeP, setSize] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const productById = async () => {
      console.log("Use effect working");
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/product/${id}`
        );
        console.log("Here api hit:", res);
        setProduct(res.data.product);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    if (id) {
      productById();
    }
  }, [id]);
  //product img ke liye
  useEffect(() => {
    if (product?.images?.length > 0) {
      setProductIamge(product.images[0].url);
    }
    if (product?.size?.length > 0) {
      setSize(product.size[0]);
    }
  }, [product]);
  console.log(productImage);
  console.log(product);
  // const product = {
  //   name: "Slim Fit Men's T-Shirt",
  //   desc: "A comfortable and stylish slim-fit t-shirt for daily wear.A comfortable and stylish slim-fit t-shirt for daily wear.A comfortable and stylish slim-fit t-shirt for daily wear.A comfortable and stylish slim-fit t-shirt for daily wear.",
  //   price: 29.99,
  //   percentOff: 10,
  //   checkStock: true,
  //   units: 120,
  //   sku: "TSHIRT-MEN-SLIM-BLK001",
  //   color: ["Black", "White", "Navy"],
  //   size: ["M", "L", "XL"],
  //   category: "Men's Fashion",
  //   brand: "UrbanWear",
  //   reviews: [
  //     {
  //       user: "john_doe",
  //       comment: "Great fit and very comfortable.",
  //       rating: 5,
  //       createdAt: "2025-06-01T12:00:00Z",
  //     },
  //     {
  //       user: "mark92",
  //       comment: "Color fades a bit after wash.",
  //       rating: 3,
  //       createdAt: "2025-06-15T08:30:00Z",
  //     },
  //   ],
  //   rating: 3.8,
  //   numReviews: 2,
  //   tags: ["tshirt", "slimfit", "menswear"],
  //   soldUnits: 350,
  //   isFeatured: true,
  //   images: [
  //     {
  //       url: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
  //       altText: "Front view of slim fit black t-shirt",
  //     },
  //     {
  //       url: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
  //       altText: "Back view of slim fit black t-shirt",
  //     },
  //     {
  //       url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
  //       altText: "Front view of slim fit black t-shirt",
  //     },
  //     {
  //       url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
  //       altText: "Back view of slim fit black t-shirt",
  //     },
  //   ],
  //   isFlashSale: true,
  //   saleStartDate: "2025-07-01T00:00:00Z",
  //   saleEndData: "2025-07-10T23:59:59Z",
  //   _id: 1,
  // };

  const [colorP, setColor] = useState();
  const [quantity, setQuantity] = useState(Number(1));
  const [addWish, setAddWish] = useState(false);
  const handleAddQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleSubQuantity = () => {
    if (quantity === 1) {
      return 1;
    }
    setQuantity((prev) => prev - 1);
  };
  const AddInWishlist = () => {
    setAddWish(!addWish);
    if (addWish === false) {
      toast.success("Add in your wishlist.", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    }
    if (addWish === true) {
      toast.success("Remove from your wishlist.", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    }
  };
  const setHandleColor = (col) => {
    setColor(col);
  };
  if (loading) {
    return <LoadingSpinner />;
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
                <ShoppingCart className="size-5"/>
                <span className="text-sm">Add To Cart</span>
              </button>
              <button className="bg-black flex items-center gap-2 lg:hidden text-white px-4  lg:h-10 h-9 rounded-sm py-1 text-center cursor-pointer hover:scale-95 transition-all duration-200">
                <ShoppingCart className="size-5"/>
              </button>
                {/* <button className="bg-black text-white text-xs px-2 lg:px-4 lg:h-10 h-9 rounded-sm py-1 text-center cursor-pointer hover:scale-95 transition-all duration-200">
                  Add to Cart
                </button> */}
              </div>

              {/* Wishlist */}
              <div className="border w-10 h-9 rounded-sm flex items-center justify-center">
                <Heart
                  onClick={AddInWishlist}
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
    </div>
  );
};

export default ProductId;
