import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-xl font-bold mb-3">ELECTRONICZ</h2>
          <p className="text-gray-300 text-sm leading-6">
            Your one-stop shop for the latest gadgets, electronics, and accessories. 
            Quality products with reliable support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-300 text-sm">
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  `hover:text-blue-400 transition ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="shop"
                className={({ isActive }) =>
                  `hover:text-blue-400 transition ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `hover:text-blue-400 transition ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `hover:text-blue-400 transition ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="flex flex-col gap-2 text-gray-300 text-sm">
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `hover:text-blue-400 transition ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shipping"
                className={({ isActive }) =>
                  `hover:text-blue-400 transition ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                Shipping & Returns
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy"
                className={({ isActive }) =>
                  `hover:text-blue-400 transition ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms"
                className={({ isActive }) =>
                  `hover:text-blue-400 transition ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                Terms & Conditions
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400"><FacebookIcon /></a>
            <a href="#" className="hover:text-pink-400"><InstagramIcon /></a>
            <a href="#" className="hover:text-sky-400"><TwitterIcon /></a>
            <a href="#" className="hover:text-red-500"><YouTubeIcon /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} ELECTRONICZ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
