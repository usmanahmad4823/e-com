import React from "react";
import {
  LayoutDashboard,
  PlusCircle,
  BadgeCheck,
  ShoppingCart,
  Heart,
  Package,
  Settings,
} from "lucide-react";

const items = [
  { key: "home", icon: <LayoutDashboard className="w-5 h-5" />, label: "Overview" },
  { key: "myads", icon: <BadgeCheck className="w-5 h-5" />, label: "My Ads" },
  { key: "addad", icon: <PlusCircle className="w-5 h-5" />, label: "Post New Ad" },
  { key: "cart", icon: <ShoppingCart className="w-5 h-5" />, label: "My Cart" },
  { key: "wishlist", icon: <Heart className="w-5 h-5" />, label: "Wishlist" },
  { key: "orders", icon: <Package className="w-5 h-5" />, label: "Orders" },
  { key: "settings", icon: <Settings className="w-5 h-5" />, label: "Settings" },
];

const Sidebar = ({ active, onChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="px-3 py-4 border-b">
        <h2 className="text-xl font-bold">User Dashboard</h2>
        <p className="text-xs text-gray-500">Manage your marketplace activity</p>
      </div>
      <nav className="mt-3 space-y-1">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              active === item.key
                ? "bg-indigo-600 text-white shadow"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
