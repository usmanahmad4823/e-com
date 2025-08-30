// src/pages/SingleAd.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewAd = () => {
  const { id } = useParams(); // Get ad ID from URL
  const ad = useSelector((state) =>
    state.ad.ads.find((item) => item.id === parseInt(id))
  );

  if (!ad) {
    return <h2 className="text-center mt-10 text-red-500">Ad not found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <img
        src={ad.image}
        alt={ad.title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{ad.title}</h1>
      <p className="text-gray-600 mb-4">{ad.description}</p>
      <p className="text-lg font-semibold text-green-600 mb-2">
        Rs. {ad.price}
      </p>
      <p className="text-gray-500">Category: {ad.category}</p>
    </div>
  );
};

export default ViewAd;
