import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import MyAds from "./MyAds";
import AddAd from "./AddAd";
import Cart from "../../components/Cart";
import Wishlist from "./Wishlist";
import Orders from "./Orders";
import Settings from "./Settings";

const Dashboard = () => {
  const [active, setActive] = useState("home");

  const render = () => {
    switch (active) {
      case "myads":
        return <MyAds />;
      case "addad":
        return <AddAd onPosted={() => setActive("myads")} />;
      case "cart":
        return <Cart />;
      case "wishlist":
        return <Wishlist />;
      case "orders":
        return <Orders />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <aside className="md:col-span-3">
            <Sidebar active={active} onChange={setActive} />
          </aside>
          <main className="md:col-span-9">{render()}</main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
