import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { PiHeadphonesBold } from "react-icons/pi";
const WebFeature = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col text-white space-y-3 lg:space-y-0 lg:space-x-12 lg:flex-row mb-4">
        <div className="flex items-center justify-center flex-col">
          <div className="w-18 h-18 bg-gray-400 rounded-full flex items-center justify-center  border-gray-400 border-2 mb-2">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
              <FaShippingFast
                className="w-6 h-6 text-white font-extralight"
                strokeWidth={1}
              />
            </div>
          </div>
          <h2 className="text-black font-fira uppercase">free and fast delivery</h2>
          <p className="text-gray-800 text-sm">Free delivery for all order over $100</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="w-18 h-18 bg-gray-400 rounded-full flex items-center justify-center border-8 border-gray-400 mb-2">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
              <PiHeadphonesBold
                className="w-6 h-6 text-white font-extralight"
                strokeWidth={1}
              />
            </div>
          </div>
          <h2 className="text-black font-fira uppercase">24/7 customer support</h2>
          <p className="text-gray-800 text-sm">Friendly 24/7 Customer Support</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="w-18 h-18 bg-gray-400 rounded-full flex items-center justify-center border-8 border-gray-400 mb-2">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
              <RiSecurePaymentFill
                className="w-6 h-6 text-white font-extralight"
                strokeWidth={1}
              />
            </div>
          </div>
          <h2 className="text-black font-fira uppercase">Secure Payments</h2>
          <p className="text-gray-800 text-sm">Secure Customer Payments</p>
        </div>
      </div>
    </div>
  );
};

export default WebFeature;
