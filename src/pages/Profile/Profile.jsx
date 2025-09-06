import React from "react";

const Profile = () => {
  const user = {
    name: "Mehmood Khan",
    email: "usman@example.com",
    joined: "January 2024",
    profilePic: "https://i.pravatar.cc/150?img=15", // demo profile image
    orders: [
      { id: "ORD1234", item: "Wireless Headphones", date: "Aug 20, 2025", status: "Delivered" },
      { id: "ORD5678", item: "Smartphone Case", date: "Aug 12, 2025", status: "Shipped" },
      { id: "ORD9012", item: "Bluetooth Speaker", date: "Jul 30, 2025", status: "Cancelled" },
    ],
    wishlist: ["Gaming Laptop", "Smartwatch", "4K LED TV"],
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center md:items-start gap-3">
        {/* Profile Picture */}
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-md"
        />

        {/* User Info */}
        <div>
          <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500 mt-1">Joined {user.joined}</p>

          {/* Actions */}
          <div className="mt-2 flex gap-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow text-sm hover:bg-blue-600 transition">
              Edit Profile
            </button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-lg shadow hover:bg-gray-300 transition">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Item</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {user.orders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.item}</td>
                <td className="p-2">{order.date}</td>
                <td
                  className={`p-2 font-medium ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : order.status === "Shipped"
                      ? "text-blue-600"
                      : "text-red-500"
                  }`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Wishlist */}
      <div className="mt-8 bg-white rounded-lg text-sm shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Wishlist</h3>
        <ul className="list-disc pl-6 text-gray-700">
          {user.wishlist.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
