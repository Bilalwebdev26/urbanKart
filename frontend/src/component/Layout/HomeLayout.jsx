import React from "react";
import Header from "../Common/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";
import { useSelector } from "react-redux";
const HomeLayout = () => {
  return (
    <div>
      <Header />
      <main className="pt-[100px] px-2 py-3 md:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
