import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import Search from "../search/Search";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="py-4 sticky top-0 bg-black text-white z-20">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <Link to={`/`}>
            <h1 className="text-white capitalize font-semibold md:text-2xl">
              youtube
            </h1>
          </Link>

          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
