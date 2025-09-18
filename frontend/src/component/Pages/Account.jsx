// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import MyProfile from "../Common/Profile/MyProfile";
// import AddAddress from "../Common/Profile/AddAddress";
// import ChangePassword from "../Common/Profile/ChangePassword";
// import UpdateProfile from "../Common/Profile/UpdateProfile";
// import { useSelector } from "react-redux";
// const Account = () => {
//   const { user } = useSelector((state) => state.auth);
//   const [showSection, setShowSection] = useState("myProfile");
//   return (
//     <div className="poppins-font">
//       {user ? (
//         <>
//           <h2 className="font-semibold text-lg md:text-xl my-4">
//             <span className="text-xl md:text-2xl font-black text-red-500">
//               {user?.name}
//             </span>{" "}
//             Profile
//           </h2>
//           <div className="flex">
//             {/* sideshow */}
//             <div className="w-[39%] lg:w-[25%] bg-gray-100 p-2 rounded shadow-lg">
//               {/* manage my account */}
//               <div className="">
//                 <h2 className="text-base font-semibold">My Account</h2>
//                 <div className=" py-1 pl-3 pr-0 lg:p-3 text-[12px] lg:text-sm flex items-start flex-col space-y-2">
//                   <button
//                     onClick={() => setShowSection("myProfile")}
//                     className={`lg:cursor-pointer ${
//                       showSection === "myProfile"
//                         ? "text-red-500"
//                         : "text-black"
//                     }`}
//                   >
//                     My Profile
//                   </button>
//                   <button
//                     onClick={() => setShowSection("addAddress")}
//                     className={`lg:cursor-pointer ${
//                       showSection === "addAddress"
//                         ? "text-red-500"
//                         : "text-black"
//                     }`}
//                   >
//                     Add Address
//                   </button>
//                   <button
//                     onClick={() => setShowSection("changePassword")}
//                     className={`lg:cursor-pointer ${
//                       showSection === "changePassword"
//                         ? "text-red-500"
//                         : "text-black"
//                     }`}
//                   >
//                     Change Password
//                   </button>
//                   <button
//                     onClick={() => setShowSection("updateProfile")}
//                     className={`lg:cursor-pointer ${
//                       showSection === "updateProfile"
//                         ? "text-red-500"
//                         : "text-black"
//                     }`}
//                   >
//                     Update Profile
//                   </button>
//                 </div>
//               </div>
//               {/* My Order */}
//               <div className="">
//                 <h2 className="text-base font-semibold">Orders</h2>
//                 <div className=" py-1 px-3 lg:p-3 text-[12px] lg:text-sm space-y-1">
//                   <a href="/myorders">My Orders</a>
//                 </div>
//               </div>
//               {/* My Reviews */}
//               <div className="">
//                 <h2 className="text-base font-semibold">Reviews</h2>
//                 <div className=" py-1 px-3 lg:p-3 text-[12px] lg:text-sm space-y-1">
//                   <a href="/myreviews">My Reviews</a>
//                 </div>
//               </div>
//               {/* My Wishlist */}
//               <div className="">
//                 <h2 className="text-base font-semibold">Wishlist</h2>
//                 <div className=" py-1 px-3 lg:p-3 text-[12px] lg:text-sm space-y-1">
//                   <a href="/wishlist">My Wishlist</a>
//                 </div>
//               </div>
//             </div>
//             {/* maincontent -----------------------------------------*/}
//             <div className="w-[60%] lg:w-[75%]">
//               <div className="">
//                 {/* Show profile ---------------------*/}
//                 {showSection === "myProfile" && (
//                   <MyProfile setShowSection={setShowSection} />
//                 )}
//                 {/* Show address */}
//                 {showSection === "addAddress" && <AddAddress />}
//                 {/* Change Password ---------------------*/}
//                 {showSection === "changePassword" && <ChangePassword />}
//                 {/* Update Profile */}
//                 {showSection === "updateProfile" && <UpdateProfile />}
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <div>
//           <div className="mx-auto">
//             <button className="bg-black p-4 py-2 text-white">Login</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Account;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyProfile from "../Common/Profile/MyProfile";
import AddAddress from "../Common/Profile/AddAddress";
import ChangePassword from "../Common/Profile/ChangePassword";
import UpdateProfile from "../Common/Profile/UpdateProfile";
import { useSelector } from "react-redux";

const Account = () => {
  const { user } = useSelector((state) => state.auth);
  const [showSection, setShowSection] = useState("myProfile");

  return (
    <div className="poppins-font">
      {user ? (
        <>
          <h2 className="font-semibold text-lg md:text-xl my-4">
            <span className="text-xl md:text-2xl font-black text-red-500">
              {user?.name}
            </span>{" "}
            Profile
          </h2>
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
                      showSection === "myProfile"
                        ? "text-red-500"
                        : "text-black"
                    }`}
                  >
                    My Profile
                  </button>
                  <button
                    onClick={() => setShowSection("addAddress")}
                    className={`lg:cursor-pointer ${
                      showSection === "addAddress"
                        ? "text-red-500"
                        : "text-black"
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
                  <a href="/wishlist">My Wishlist</a>
                </div>
              </div>
            </div>
            {/* maincontent -----------------------------------------*/}
            <div className="w-[60%] lg:w-[75%]">
              <div className="">
                {/* Show profile ---------------------*/}
                {showSection === "myProfile" && (
                  <MyProfile setShowSection={setShowSection} />
                )}
                {/* Show address */}
                {showSection === "addAddress" && <AddAddress />}
                {/* Change Password ---------------------*/}
                {showSection === "changePassword" && <ChangePassword />}
                {/* Update Profile */}
                {showSection === "updateProfile" && <UpdateProfile />}
              </div>
            </div>
          </div>
        </>
      ) : (
        // Stylish Login Required Section
        <div className=" flex items-center justify-center my-3">
          <div className="bg-gradient-to-br from-gray-50 to-gray-300 rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full mx-4 text-center">
            {/* Icon */}
            <div className="mb-6">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Account Access Required
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
              Please login to access your profile, orders, wishlist, and manage
              your account settings.
            </p>

            {/* Login Button */}
            <Link to="/signin">
              <button className="bg-gradient-to-r from-black to-gray-600 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out mb-4 w-full cursor-pointer">
                Login to Your Account
              </button>
            </Link>

            {/* Sign Up Link */}
            <div className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-black font-semibold lg:cursor-pointer hover:underline transition-colors duration-200"
              >
                Sign Up Here
              </Link>
            </div>

            {/* Features List
            <div className="mt-8 pt-6 border-t border-black">
              <p className="text-xs text-gray-500 mb-3 font-medium">What you can do after login:</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                  View Orders
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                  Manage Profile
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                  Track Wishlist
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                  Write Reviews
                </div>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
