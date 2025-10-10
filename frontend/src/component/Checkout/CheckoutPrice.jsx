import { fetchCartProducts } from "@/redux/Client/cart.store.js";
import { shippingRates } from "@/redux/Client/shipping.store";
import { Check, CheckLine } from "lucide-react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PayPalButton from "../Payment/PayPalButton";

const CheckoutPrice = ({
  cart,
  loading,
  error,
  shipping,
  selectedPayment,
  setSelectedPayment,
  handlePlaceOrder
}) => {
  return (
    <div className="top-0 left-0 w-full bg-white z-50">
      <div className="border p-2 rounded-md">
        {loading ? (
          <div className="animate-pulse space-y-4">
            {/* Spinner */}
            <div className="flex justify-center items-center py-6">
              <div className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                <span className="text-gray-500 font-medium">
                  Loading your cart...
                </span>
              </div>
            </div>

            {/* Product Skeletons */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 bg-gray-300 rounded-md"></div>
                  <div className="flex flex-col gap-2">
                    <div className="h-3 w-28 bg-gray-300 rounded"></div>
                    <div className="h-3 w-20 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="h-4 w-12 bg-gray-300 rounded"></div>
              </div>
            ))}

            {/* Subtotal Skeleton */}
            <div className="h-[2px] w-full bg-gray-200 my-2"></div>
            <div className="flex items-center justify-between">
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </div>

            {/* Shipping Skeleton */}
            <div className="h-[2px] w-full bg-gray-200 my-2"></div>
            <div className="flex items-center justify-between">
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
              <div className="h-4 w-12 bg-gray-300 rounded"></div>
            </div>

            {/* Total Skeleton */}
            <div className="h-[2px] w-full bg-gray-200 my-2"></div>
            <div className="flex items-center justify-between">
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </div>

            {/* Payment Skeleton */}
            <div className="my-2 h-[2px] w-full bg-gray-200"></div>
            <div className="flex flex-col gap-2">
              <div className="h-3 w-32 bg-gray-300 rounded"></div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                <div className="h-3 w-20 bg-gray-300 rounded"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                <div className="h-3 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bilal">
            {Array.isArray(cart?.products) &&
              cart?.products.map((prod) => (
                <div className="" key={prod.productId}>
                  <div className="flex items-center justify-between space-y-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={prod.images}
                        alt={prod.name}
                        className="h-15 w-15 object-cover"
                      />
                      <h2 className="text-xs sm:text-sm hidden md:block font-semibold">
                        {prod.name.slice(0, 20)}..
                      </h2>
                      <h2 className="text-xs md:hidden font-semibold">
                        {prod.name.slice(0, 20)}..
                      </h2>
                    </div>
                    <div className="text-md font-bold flex items-center">
                      {prod.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                      <p>
                        <span className="text-red-500">×</span>
                        <span className="text-xs">{prod.quantity}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            {/* Subtotal */}
            <div className="my-1 h-[2px] w-full bg-gray-200"></div>
            <div className="flex items-center justify-between">
              <h2 className="text-md font-semibold">Subtotal </h2>
              <span className="text-md font-bold text-red-500">
                {Array.isArray(cart?.products) &&
                  cart?.totalPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
              </span>
            </div>
            {/* Shipping */}
            <div className="my-1 h-[2px] w-full bg-gray-200"></div>
            <div className="flex items-center justify-between">
              <h2 className="text-md font-semibold">Shipping </h2>
              <span className="text-md font-bold text-red-500">
                {shipping}$
              </span>
            </div>
            {/* Total After shipping */}
            <div className="my-2 h-[2px] w-full bg-gray-200"></div>
            <div className="flex items-center justify-between">
              <h2 className="text-md font-bold">Total </h2>
              <span className="text-md font-bold text-red-500">
                {(shipping + cart.totalPrice).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
            {/* Select payment method */}
            <div className="my-2 h-[2px] w-full bg-gray-200"></div>
            {/* <div className="paymet">
              <h2 className="text-blue-700 font-semibold text-md">
                Select Payment Method
              </h2>
              <div className="">
                <input type="radio" id="COD" name="payment" value="COD" />
                <label for="COD" className="text-sm">
                  {" "}
                  Cash On Delivery
                </label>
                <br />
                <input type="radio" id="PayPal" name="payment" value="PayPal" />
                <label for="PayPal" className="text-sm">
                  {" "}
                  PayPal
                </label>
              </div>
            </div> */}
            <div className="payment">
              <h2 className="text-blue-700 font-semibold text-md mb-2">
                Select Payment Method
              </h2>

              {/* Payment Options */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    id="COD"
                    name="payment"
                    value="COD"
                    checked={selectedPayment === "COD"}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                  />
                  Cash On Delivery
                </label>

                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    id="PayPal"
                    name="payment"
                    value="PayPal"
                    checked={selectedPayment === "PayPal"}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                  />
                  PayPal
                </label>
              </div>

             
            </div>
          </div>
        )}
        {/* Coupon */}
        <div className="flex items-center justify-end gap-2 mb-2">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="w-34 md:w-50 lg:w-60 text-xs lg:text-base md:text-sm outline-none p-2 border border-black rounded "
          />
          <button className="bg-red-500 text-white font-semibold text-center p-2 rounded text-xs md:text-sm">
            Apply Coupon
          </button>
        </div>
        {/* Place Order */}
      </div>
    </div>
  );
};

export default CheckoutPrice;
