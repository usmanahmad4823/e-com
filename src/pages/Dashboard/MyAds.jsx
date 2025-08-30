import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAd } from "../../Features/post/adSlice"; // adjust path if needed
import { Link } from "react-router-dom";
import { Trash2, Pencil } from "lucide-react";

const MyAds = () => {
  const dispatch = useDispatch();
  const ads = useSelector((s) => s.ad?.ads ?? []);

  if (!ads?.length) {
    return (
      <div className="bg-white rounded-lg border p-8 text-center">
        <p className="text-gray-600">You have no ads yet.</p>
        <p className="text-sm text-gray-400 mt-2">Use "Post New Ad" to add one.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">My Ads</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ads.map((ad) => (
          <div key={ad.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Link to={`/viewAd/${ad.id}`}>
              <img src={ad.image} alt={ad.title} className="h-40 w-full object-cover" />
            </Link>
            <div className="p-4">
              <h3 className="font-semibold truncate">{ad.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2 mt-1">{ad.description}</p>
              <p className="font-bold text-indigo-600 mt-2">Rs {Number(ad.price).toLocaleString()}</p>
              <div className="flex justify-end gap-2 mt-3">
                <button className="px-3 py-1 text-xs border rounded-lg hover:bg-gray-50 flex items-center gap-1" title="Edit (coming soon)">
                  <Pencil size={16} /> Edit
                </button>
                <button
                  onClick={() => dispatch(removeAd(ad.id))}
                  className="px-3 py-1 text-xs border border-red-200 text-red-600 rounded-lg hover:bg-red-50 flex items-center gap-1"
                  title="Remove Ad"
                >
                  <Trash2 size={16} /> Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAds;
