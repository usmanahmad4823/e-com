import React from "react";
import { NavLink } from "react-router";

const AdSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-6 px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
        Sell Your Mobile on OTG and Get the Best Price
      </h2>

      {/* Main box */}
      <div className="flex flex-col md:flex-row border rounded-md w-full max-w-5xl bg-white">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center p-8 border-b md:border-b-0 md:border-r">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Sell It Myself!</h3>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Post an ad in 2 minutes</li>
            <li>✅ 20 million users</li>
            <li>✅ Connect directly with buyers</li>
          </ul>
          <NavLink to="postAd">

          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition">
            Post Your Ad
          </button>
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center p-8">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Sell It For Me</h3>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Sell your car without hassle</li>
            <li>✅ Free Inspection & Featured ad</li>
            <li>✅ Maximize offer with sales agent</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition">
            Help Me Sell My Car!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdSection;
