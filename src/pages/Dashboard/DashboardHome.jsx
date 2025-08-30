import React from "react";
import { useSelector } from "react-redux";

const Stat = ({ title, value, note }) => (
  <div className="bg-white rounded-lg shadow-sm p-3">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-3xl font-extrabold mt-1">{value}</p>
    {note && <p className="text-xs text-gray-400 mt-1">{note}</p>}
  </div>
);

const DashboardHome = () => {
  const ads = useSelector((s) => s.ad?.ads ?? []);
  const cartItems = useSelector((s) => s.cart?.items ?? []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Welcome Back</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Stat title="Active Ads" value={ads.length} />
        <Stat title="Cart Items" value={cartItems.length} note="Go to Cart from sidebar" />
        <Stat
          title="Estimated Value"
          value={`Rs ${ads.reduce((t, a) => t + (Number(a.price) || 0), 0).toLocaleString()}`}
          note="Sum of your ad prices"
        />
      </div>

      <div className="bg-white rounded-lg  p-4">
        <h2 className="text-lg font-semibold mb-2">Get started</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Post a new ad using “Post New Ad”.</li>
          <li>Review and manage your listings in “My Ads”.</li>
          <li>Customize your profile in “Settings”.</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHome;
