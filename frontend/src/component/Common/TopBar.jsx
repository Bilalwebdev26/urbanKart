import React from "react";
import Marquee from "react-fast-marquee";
const TopBar = ({visible}) => {
  return (
    <div className={`playfair-font fixed top-0 left-0 w-full z-40  transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"}`}>
      <Marquee
        speed={50}
        gradient={false}
        className="bg-black text-white p-2 font-bold transition-all duration-300"
      >
        🚀 50% Off Sale — Free Shipping on Orders Over $100 — New Arrivals Just
        Dropped!
      </Marquee>
    </div>
  );
};

export default TopBar;
