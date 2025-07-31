import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { RiStarFill, RiStarSLine } from "react-icons/ri";
import { IoLogInOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Client/auth.store";
import Loading from "../Common/Loading";
const NavBar = ({ isScrolled }) => {
  const { user, loading } = useSelector((state) => state.auth);
  const [onProfile, setOnProfile] = useState(false);
  const [setHam, setHamMenu] = useState(false);
  const profileRef = useRef(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("User from Navbar : ", user);
  const handleProfilebtn = () => {
    setOnProfile(!onProfile);
  };
  const handleLogoutbtn = () => {
    setOnProfile(!onProfile);
    if (user) {
      dispatch(logout());
    }
  };

  const handleHamburger = () => {
    setHamMenu(!setHam);
  };
  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOnProfile(false);
      }
    };
    // Add event listener when profile is open
    if (onProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onProfile]);
  console.log("Loading from Navbar : ", loading);
  if (loading && location.pathname === "/signup") {
    return <Loading />;
  }
  return (
    <div
      className={`poppins-font fixed left-0 w-full shadow-md flex items-center justify-between px-2 py-3 md:px-8 border-b z-[60] border-black transition-all duration-500 ease-in-out ${
        isScrolled
          ? "top-0 bg-white text-black py-6 shadow-lg"
          : "top-[36px] bg-white shadow-md"
      }`}
    >
      <Link
        to={"/"}
        className={`font-semibold transition-all duration-300 ${
          isScrolled
            ? "text-2xl md:text-3xl text-black"
            : "text-xl md:text-2xl "
        }`}
      >
        urbanKart
      </Link>
      <div
        className={`hidden lg:flex space-x-4 transition-all duration-300 ${
          isScrolled ? "text-sm md:text-lg" : "text-sm md:text-md"
        }`}
      >
        <Link to={"/"} className="hover:underline">
          Home
        </Link>
        <Link to={"/account"} className="hover:underline">
          Profile
        </Link>
        <Link to={"/cart"} className="hover:underline">
          Cart
        </Link>
        <Link to={"/wishlist"} className="hover:underline">
          Wishlist
        </Link>
        <Link to={"/signin"} className="hover:underline">
          Sign In
        </Link>
        <Link to={"/signup"} className="hover:underline">
          Sign Up
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative w-54 mr-4 hidden md:flex">
          <div className="flex">
            <input
              type="text"
              className="w-full pl-3 pr-8 py-1 bg-gray-100 rounded-md outline-none placeholder:text-[10px]"
              placeholder="What are you looking for?"
            />
            <FaSearch
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 ${
                isScrolled ? "text-lg" : "text-sm"
              }`}
            />
          </div>

          {(location.pathname === "/signin" ||
            location.pathname === "/signup") && (
            <button
              onClick={() => navigate("/")}
              className="px-3 py-1 text-base bg-black text-white rounded-lg justify-end cursor-pointer"
            >
              Home
            </button>
          )}
        </div>
        {location.pathname !== "/signin" && location.pathname !== "/signup" && (
          <div className="md:hidden">
            <FaSearch
              className={`mr-3 font-normal transition-all duration-300 ${
                isScrolled ? "text-xl" : "text-lg"
              }`}
            />
          </div>
        )}
        {location.pathname !== "/signin" && location.pathname !== "/signup" && (
          <div
            className={`flex items-center justify-center transition-all duration-300 ${
              isScrolled ? "text-2xl" : "text-xl"
            } space-x-4.5`}
          >
            {/* wishlist icon */}
            <Link to={"/wishlist"} className="hidden md:flex">
              <FaRegHeart />
            </Link>
            {/* cart */}
            <div className="relative">
              <Link to="/cart">
                <AiOutlineShoppingCart
                  className={`transition-all duration-300${
                    isScrolled ? "text-3xl" : "text-2xl"
                  }`}
                />
              </Link>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                5
              </span>
            </div>
            {/* profile */}
            <div ref={profileRef} className="relative">
              <button
                onClick={handleProfilebtn}
                className={`flex items-center cursor-pointer transition-all duration-300 ${
                  isScrolled ? "text-3xl" : "text-2xl"
                } `}
              >
                <GoPerson />
              </button>
              {onProfile && (
                <div className="absolute right-0 -bottom-58 lg:-bottom-58 w-54 bg-gradient-to-r from-slate-100 to-slate-400 backdrop-blur-[22px] p-2 rounded-md shadow-lg">
                  <div className="flex flex-col py-4 space-y-[3px] text-black">
                    <Link
                      to={"/account"}
                      onClick={handleProfilebtn}
                      className="flex items-center gap-2  text-sm hover:bg-gray-100 rounded-md px-2 py-1 hover:scale-105 transition-all"
                    >
                      <MdManageAccounts />
                      Manage My Account
                    </Link>
                    <Link
                      to={"/myorders"}
                      onClick={handleProfilebtn}
                      className="flex items-center gap-2  text-sm hover:bg-gray-100 rounded-md px-2 py-1 hover:scale-105 transition-all"
                    >
                      <PiShoppingBagOpenBold className="text-blue-600" />
                      My Orders
                    </Link>
                    <Link
                      to={"/wishlist"}
                      onClick={handleProfilebtn}
                      className="flex items-center gap-2  text-sm hover:bg-gray-100 rounded-md px-2 py-1 hover:scale-105 transition-all"
                    >
                      <FaHeart className="text-red-600 " />
                      Wishlist
                    </Link>
                    <Link
                      to={"/myreviews"}
                      onClick={handleProfilebtn}
                      className="flex items-center gap-2  text-sm hover:bg-gray-100 rounded-md px-2 py-1 hover:scale-105 transition-all"
                    >
                      <RiStarFill className="text-yellow-300" />
                      My Reviews
                    </Link>
                    {user ? (
                      ""
                    ) : (
                      <Link
                        to={"/signin"}
                        onClick={handleProfilebtn}
                        className="flex items-center gap-2  text-sm hover:bg-gray-100 rounded-md px-2 py-1 hover:scale-105 transition-all"
                      >
                        <IoLogInOutline className="hover:animate-spin text-green-400" />
                        Login
                      </Link>
                    )}
                    {user ? (
                      ""
                    ) : (
                      <Link
                        to={"/signup"}
                        onClick={handleProfilebtn}
                        className="flex items-center gap-2  text-sm hover:bg-gray-100 rounded-md px-2 py-1 hover:scale-105 transition-all"
                      >
                        <IoLogInOutline className="text-emerald-400" />
                        SignUp
                      </Link>
                    )}
                    {!user ? (
                      ""
                    ) : (
                      <Link
                        onClick={handleLogoutbtn}
                        className="flex items-center gap-2  text-sm hover:bg-gray-100 rounded-md px-2 py-1 hover:scale-105 transition-all"
                      >
                        <RiLogoutBoxLine className="text-red-500" />
                        Logout
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* Hamburger */}
            {/* <button onClick={handleHamburger}></button> */}
            <GiHamburgerMenu onClick={handleHamburger} />
          </div>
        )}
      </div>
      {/* Overlay - Black background with opacity */}
      {setHam && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 transition-opacity duration-300"
          onClick={handleHamburger}
        />
      )}
      {/* Category sidebar */}
      <div
        className={`fixed min-h-full w-70 top-0 left-0 py-3 px-5 z-50 bg-gray-100 transition-all duration-300 ${
          setHam ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute right-10 text-white top-7.5">
          {/* close sidebar button */}
          <IoMdCloseCircleOutline
            onClick={handleHamburger}
            className="text-2xl font-semibold"
          />
        </div>
        <div className="flex">
          {/* <div className="z-40">
            <Link>Women's Fashion</Link>
            <Link>Men's Fashion</Link>
            <Link>Electronics</Link>
            <Link>Health & Care</Link>
            <Link>Medicine</Link>
            <Link>Sports & Outdoor</Link>
            <Link>Baby's & Toys</Link>
            <Link>Groceries & Pets</Link>
            <Link>Health & beauty</Link>
          </div> */}
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// {`poppins-font fixed top-[36px] left-0 w-full z-50 bg-white shadow-md  flex items-center justify-between py-3 px-5 border-b-4 border-purple-800 transition-all duration-500 ${
//         isScrolled ? "top-0" : "top-[36px]"
//       }"`}
