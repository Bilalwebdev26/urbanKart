import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyProfile from "../Common/Profile/MyProfile";
import AddAddress from "../Common/Profile/AddAddress";
import ChangePassword from "../Common/Profile/ChangePassword";
import UpdateProfile from "../Common/Profile/UpdateProfile";
const Account = () => {
  const [showSection, setShowSection] = useState("changePassword");
  return (
    <div className="poppins-font">
      <h2 className="font-semibold text-lg md:text-xl my-4">Name Profile</h2>
      <div className="flex">
        {/* sideshow */}
        <div className="w-[39%] lg:w-[25%] bg-gray-100 p-2 rounded shadow-lg">
          {/* manage my account */}
          <div className="">
            <h2 className="text-base font-semibold">My Account</h2>
            <div className=" py-1 pl-3 pr-0 lg:p-3 text-[12px] lg:text-sm flex items-start flex-col space-y-2">
              <button
                onClick={() => setShowSection("myProfile")}
                className={`lg:cursor-pointer ${
                  showSection === "myProfile" ? "text-red-500" : "text-black"
                }`}
              >
                My Profile
              </button>
              <button
                onClick={() => setShowSection("addAddress")}
                className={`lg:cursor-pointer ${
                  showSection === "addAddress" ? "text-red-500" : "text-black"
                }`}
              >
                Add Address
              </button>
              <button
                onClick={() => setShowSection("changePassword")}
                className={`lg:cursor-pointer ${
                  showSection === "changePassword"
                    ? "text-red-500"
                    : "text-black"
                }`}
              >
                Change Password
              </button>
              <button
                onClick={() => setShowSection("updateProfile")}
                className={`lg:cursor-pointer ${
                  showSection === "updateProfile"
                    ? "text-red-500"
                    : "text-black"
                }`}
              >
                Update Profile
              </button>
            </div>
          </div>
          {/* My Order */}
          <div className="">
            <h2 className="text-base font-semibold">Orders</h2>
            <div className=" py-1 px-3 lg:p-3 text-[12px] lg:text-sm space-y-1">
              <a href="/myorders">My Orders</a>
            </div>
          </div>
          {/* My Reviews */}
          <div className="">
            <h2 className="text-base font-semibold">Reviews</h2>
            <div className=" py-1 px-3 lg:p-3 text-[12px] lg:text-sm space-y-1">
              <a href="/myreviews">My Reviews</a>
            </div>
          </div>
          {/* My Wishlist */}
          <div className="">
            <h2 className="text-base font-semibold">Wishlist</h2>
            <div className=" py-1 px-3 lg:p-3 text-[12px] lg:text-sm space-y-1">
              <a href="/myreviews">My Wishlist</a>
            </div>
          </div>
        </div>
        {/* maincontent -----------------------------------------*/}
        <div className="w-[60%] lg:w-[75%]">
          <div className="">
            {/* Show profile ---------------------*/}
            {showSection === "myProfile" && <MyProfile />}
            {/* Show address */}
            {showSection === "addAddress" && <AddAddress />}
            {/* Change Password ---------------------*/}
            {showSection === "changePassword" && <ChangePassword />}
            {/* Update Profile */}
            {showSection === "updateProfile" && <UpdateProfile />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
