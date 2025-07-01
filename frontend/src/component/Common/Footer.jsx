import React from "react";
import { BiSend } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-black text-white px-2 py-3 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <h2 className="text-xl md:text-3xl font-semibold poppins-font my-3">
            Exclusive
          </h2>
          <h3 className=" text-[16px] md:text-xl font-medium font-fira mb-3">Subscribe</h3>
          <div className="w-40 md:w-60">
            <p className="text-gray-200 text-[12px] md:text-sm mb-3">
              Get 10% OFF your first Order
            </p>
            <div className="bg-black flex items-center border-white border-2 rounded focus-within:outline-white focus-within:ring-2 focus-within:ring-white">
              <input
                type="email"
                placeholder="Enter your Email"
                className="outline-none w-full p-2"
              />
              <BiSend className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="text-gray-400">
          <h2 className="text-xl md:text-3xl font-semibold poppins-font my-3 text-white">Support</h2>
          <p className="text-sm mb-2">Johar Town C block Lahore,Pakistan</p>
          <p className="mb-2">urbanKart@store.com</p>
          <p>+(123)-456-7890</p>
        </div>
        <div className="space-y-4 flex flex-col text-gray-400">
          <h2 className="text-xl md:text-3xl font-semibold poppins-font my-3 text-white">Account</h2>
          <Link>My Account</Link>
          <Link>Login / Register</Link>
          <Link>Cart</Link>
          <Link>Wishlist</Link>
          <Link>Shop</Link>
        </div>
        <div className="flex flex-col space-y-4 text-gray-400">
          <h2 className="text-xl md:text-3xl font-semibold poppins-font my-3 text-white">
            Quick Link
          </h2>

          <Link>Privacy Policy</Link>
          <Link>Terms of use</Link>
          <Link>FAQ</Link>
          <Link>Contact</Link>
        </div>
        <div className="">
          <h2 className="text-xl md:text-3xl font-semibold poppins-font my-3">
            DownLoad App
          </h2>
          <div className="flex space-x-4">
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaXTwitter />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center border-t p-3 mt-2">
        @Developer : bilalwdev26@gmail.com
      </div>
    </div>
  );
};

export default Footer;
