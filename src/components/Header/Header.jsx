import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import SearchIcon from "@mui/icons-material/Search";
import CallIcon from "@mui/icons-material/Call";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Dropdown from "../Dropdown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full py-3 shadow-md z-50">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between gap-6">
          <div className="flex-shrink-0">
            <NavLink 
            to="/">

            <img
              className="w-[170px] cursor-pointer"
              src={logo}
              alt="ELECTRONICZ"
              />
              </NavLink>
          </div>

          <div className="flex flex-1 max-w-[600px] items-center bg-black rounded-md overflow-hidden">
            <input
              type="text"
              className="w-full text-[14px] py-2 px-4 text-white placeholder-white bg-transparent outline-none"
              placeholder="What are you looking for?"
            />
            <SearchIcon className="bg-white text-black rounded-md p-1.5 m-1 cursor-pointer hover:bg-gray-200 transition" />
          </div>

          <div className="flex items-center gap-6 text-black text-sm font-light">
            <div className="flex items-center px-3 py-1 rounded-md cursor-pointer transition">
              <CallIcon className="mr-2" />
              <div className="leading-4">
                <p className="font-semibold text-xs">NEED HELP?</p>
                <p className="text-[13px]">0315615116</p>
              </div>
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition">
              <AccountCircleOutlinedIcon className="text-[28px]" />
            </div>

            <div className="relative cursor-pointer hover:text-blue-500 transition">
              <ShoppingCartOutlinedIcon className="text-[28px]" />
              <div className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-green-500 text-[10px] flex items-center justify-center font-light">
                3
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="w-full py-2 shadow-md border-y border-gray-100 ">
        <div className=" relative max-w-[1400px] mx-auto px-4 flex items-center justify-between">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className=" flex items-center text-xs font-bold cursor-pointer"
          >
            <WidgetsOutlinedIcon />
            <span className="ml-1">CATEGORIES</span>
            {isOpen === true && <Dropdown />}
          </div>
          <div className="flex flex-1 max-w-[600px] justify-center items-center font-medium">
            <ul className="flex items-center justify-center gap-6 text-xs">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${
                      isActive ? "text-blue-600 font-bold" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    `hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${
                      isActive ? "text-blue-600 font-bold" : ""
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="shop"
                  className={({ isActive }) =>
                    `hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${
                      isActive ? "text-blue-600 font-bold" : ""
                    }`
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blog"
                  className={({ isActive }) =>
                    `hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${
                      isActive ? "text-blue-600 font-bold" : ""
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    `hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${
                      isActive ? "text-blue-600 font-bold" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            
            </ul>
          </div>

          <div className="flex items-center text-sm font-bold cursor-pointer hover:text-blue-500 transition">
            <span>Ongoing Offers</span>
            <LoyaltyOutlinedIcon className="text-red-600 ml-1" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
