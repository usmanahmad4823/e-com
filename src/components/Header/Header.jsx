import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import SearchIcon from "@mui/icons-material/Search";
import CallIcon from "@mui/icons-material/Call";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Dropdown from "../../components/Dropdown";
import { useSelector } from "react-redux";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const profileRef = useRef(null);
  const categoriesRef = useRef(null);

  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categoriesDropDown = [
    { label: "Watch", path: "/watch" },
    { label: "Speaker", path: "/speaker" },
    { label: "Phone", path: "/phone" },
    { label: "Mouse", path: "/mouse" },
    { label: "Monitor", path: "/monitor" },
    { label: "Laptop", path: "/laptop" },
    { label: "Keyboard", path: "/keyboard" },
    { label: "Joystick", path: "/joystick" },
    { label: "HeadPhones", path: "/headphones" },
    { label: "EarBuds", path: "/earbuds" },
    { label: "Cameras", path: "/camera" },
    { label: "CCTV", path: "/cctv" },
  ];

  const profileDropDown = [
    { label: "Profile", path: "/profile" },
    { label: "Dashboard", path: "/dashboard" },
  ];

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setIsCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="w-full py-3 shadow-md z-50 bg-white sticky top-0">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between gap-4">
          <NavLink
            to="/"
            className="flex-shrink-0 no-underline border-none focus:outline-none"
            style={({ isActive }) => ({
              borderBottom: "none",  
              textDecoration: "none", 
            })}
          >
            <img
              className="w-[120px] sm:w-[150px] md:w-[170px] cursor-pointer"
              src={logo}
              alt="ELECTRONICZ"
            />
          </NavLink>

          <div className="hidden md:flex flex-1 max-w-[600px] items-center bg-black rounded-md overflow-hidden">
            <input
              type="text"
              className="w-full text-sm py-2 px-4 text-white placeholder-white bg-transparent outline-none"
              placeholder="What are you looking for?"
            />
            <SearchIcon className="bg-white text-black rounded-md p-1.5 m-1 cursor-pointer hover:bg-gray-200 transition duration-300" />
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-black text-sm font-light">
            <div className="hidden lg:flex items-center px-3 py-1 cursor-pointer ">
              <CallIcon className="mr-2 text-blue-500" />
              <div className="leading-4">
                <p className="font-semibold text-xs">NEED HELP?</p>
                <p className="text-[13px]">0315615116</p>
              </div>
            </div>

            <div ref={profileRef} className="relative flex items-center">
              <AccountCircleOutlinedIcon
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                  setIsCategoriesOpen(false);
                }}
                className="text-[28px] cursor-pointer hover:text-blue-500 transition duration-300"
              />
              {isProfileOpen && (
                <div className="absolute top-0 right-0 animate-fadeInScale">
                  <Dropdown items={profileDropDown} />
                </div>
              )}
            </div>

            <div className="relative cursor-pointer hover:text-blue-500 transition duration-300">
              <NavLink to="cart">
                <ShoppingCartOutlinedIcon className="text-[28px]" />
              </NavLink>
              {totalCount > 0 && (
                <div className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-green-500 text-[10px] flex items-center justify-center font-light animate-bounce">
                  {totalCount}
                </div>
              )}
            </div>

            <div
              className="md:hidden cursor-pointer transition-transform duration-300 hover:rotate-90"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </div>
        </div>

        <div className="flex md:hidden mt-3 px-4">
          <div className="flex flex-1 items-center bg-black rounded-md overflow-hidden">
            <input
              type="text"
              className="w-full text-sm py-2 px-4 text-white placeholder-white bg-transparent outline-none"
              placeholder="Search products..."
            />
            <SearchIcon className="bg-white text-black rounded-md p-1.5 m-1 cursor-pointer hover:bg-gray-200 transition duration-300" />
          </div>
        </div>
      </header>

      <nav className="w-full py-2 shadow-md border-y border-gray-100 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">
          <div ref={categoriesRef} className="relative flex items-center">
            <div
              onClick={() => {
                setIsCategoriesOpen(!isCategoriesOpen);
                setIsProfileOpen(false);
              }}
              className="flex items-center text-xs font-bold cursor-pointer hover:text-blue-500 transition duration-300"
            >
              <WidgetsOutlinedIcon />
              <span className="ml-1 hidden sm:inline">CATEGORIES</span>
            </div>
            {isCategoriesOpen && (
              <div className="absolute top-0 left-0 animate-fadeInScale">
                <Dropdown items={categoriesDropDown} />
              </div>
            )}
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center font-medium">
            <ul className="flex items-center gap-6 text-xs">
              {["/", "about", "shop", "blog", "contact"].map((path, i) => (
                <li key={i}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `hover:text-blue-500 transition-all duration-300 cursor-pointer ${
                        isActive ? "text-blue-600 font-bold" : ""
                      }`
                    }
                  >
                    {path === "/"
                      ? "Home"
                      : path.charAt(0).toUpperCase() + path.slice(1)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex items-center text-sm font-bold cursor-pointer hover:text-blue-500 transition duration-300">
            <span>Ongoing Offers</span>
            <LoyaltyOutlinedIcon className="text-red-600 ml-1 animate-pulse" />
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 bg-white border-t shadow-md animate-slideDown">
            <ul className="flex flex-col gap-3 mt-3 text-sm">
              {["/", "about", "shop", "blog", "contact"].map((path, i) => (
                <li key={i}>
                  <NavLink
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-1 hover:text-blue-500 transition duration-300 ${
                        isActive ? "text-blue-600 font-bold" : ""
                      }`
                    }
                  >
                    {path === "/"
                      ? "Home"
                      : path.charAt(0).toUpperCase() + path.slice(1)}
                  </NavLink>
                </li>
              ))}
              <li className="font-bold flex items-center gap-2 text-red-600 animate-pulse">
                <LoyaltyOutlinedIcon /> Ongoing Offers
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* --- Animations --- */}
      <style>
        {`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
          .animate-fadeInScale {
            animation: fadeInScale 0.25s ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default Header;
