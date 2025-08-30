// src/pages/PostAd.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAd } from "../Features/post/adSlice";
import { useNavigate } from "react-router-dom";
import { Camera, Tag, FileText, DollarSign, List } from "lucide-react";

const PostAd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [adData, setAdData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setAdData({ ...adData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAd(adData));
    navigate("/viewAds");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Post a New Ad
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Title
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <Tag className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                name="title"
                placeholder="e.g. iPhone 13 Pro Max"
                value={adData.title}
                onChange={handleChange}
                className="w-full focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <div className="flex items-start border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <textarea
                name="description"
                placeholder="Write details about your product..."
                value={adData.description}
                onChange={handleChange}
                className="w-full focus:outline-none resize-none"
                rows="3"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Price (Rs)
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <DollarSign className="text-gray-400 mr-2" size={18} />
              <input
                type="number"
                name="price"
                placeholder="e.g. 135000"
                value={adData.price}
                onChange={handleChange}
                className="w-full focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <input
                type="text"
                name="category"
                placeholder="e.g. Mobile Phones"
                value={adData.category}
                onChange={handleChange}
                className="w-full focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Image URL
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <input
                type="text"
                name="image"
                placeholder="Paste image link..."
                value={adData.image}
                onChange={handleChange}
                className="w-full focus:outline-none"
                required
              />
            </div>
          </div>
 
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all"
          >
        Post Ad
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostAd;
