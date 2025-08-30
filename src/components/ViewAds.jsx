import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

const ViewAds = () => {
  const ads = useSelector((state) => state.ad.ads);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {ads.map((ad) => (
        <Link
          to={`/viewAd/${ad.id}`}
          key={ad.id}
          className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
        >
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
            {ad.image ? (
              <img
                src={ad.image}
                alt={ad.title}
                className="object-cover h-full w-full"
              />
            ) : (
              <Camera className="w-10 h-10 text-gray-400" />
            )}
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold">{ad.title}</h2>
            <p className="text-gray-600">{ad.price} PKR</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ViewAds;
