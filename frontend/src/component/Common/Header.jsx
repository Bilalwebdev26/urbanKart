import React, { useEffect, useState } from "react";
import NavBar from "../Layout/NavBar";
import TopBar from "./TopBar";

const Header = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  useEffect(() => {
    const showTopBarContent = () => {
      if (window.scrollY > 50) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
    };
    window.addEventListener("scroll", showTopBarContent);
    return () => {
      window.removeEventListener("scroll", showTopBarContent);
    };
  }, []);
  return (
    <div>
      {/* topbar */}
      <TopBar visible={showTopBar} />
      <NavBar isScrolled={!showTopBar}/>
    </div>
  );
};

export default Header;
