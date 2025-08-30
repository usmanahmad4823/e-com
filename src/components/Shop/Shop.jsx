// src/pages/Shop.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../Features/cart/CartSlice";

const Shop = () => {
  const ads = useSelector((state) => state.ad.ads);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Explore Our <span className="text-indigo-600">Shop</span>
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Premium used mobile phones at unbeatable prices.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <Link to={`/viewAd/${ad.id}`}>
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="h-46 w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="p-3">
                <h2 className="text-lg font-bold text-gray-900 truncate">
                  {ad.title}
                </h2>
                <p className="text-sm text-gray-600  line-clamp-2">
                  {ad.description}
                </p>
                <p className="text-xl font-semibold text-indigo-600 mt-2">
                  Rs. {ad.price.toLocaleString()}
                </p>
                <div className="mt-3 flex justify-between items-center">
                  <Link
                    to={`/viewAd/${ad.id}`}
                    className="px-4 py-1 bg-indigo-600 text-white text-sm rounded-lg shadow hover:bg-indigo-700 transition"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => dispatch(addToCart(ad))}
                    className="px-4 py-1 border border-indigo-600 text-indigo-600 text-sm rounded-lg hover:bg-indigo-50 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {ads.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-700">
              No products available right now
            </h2>
            <p className="text-gray-500 mt-2">
              Please check back later or add new ads.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
