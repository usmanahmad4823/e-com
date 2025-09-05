import React, { useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [saved, setSaved] = useState(false);

  const handle = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6 max-w-2xl">
      <h2 className="text-xl font-bold mb-4">Profile & Settings</h2>
      <form onSubmit={submit} className="grid text-xs gap-4 md:grid-cols-2">
        <input name="name" value={profile.name} onChange={handle} placeholder="Full Name" className="border rounded-lg px-2 py-1" />
        <input name="email" value={profile.email} onChange={handle} placeholder="Email" type="email" className="border rounded-lg px-2 py-1" />
        <input name="phone" value={profile.phone} onChange={handle} placeholder="Phone" className="border rounded-lg px-2 py-1" />
        <input name="city" value={profile.city} onChange={handle} placeholder="City" className="border rounded-lg px-2 py-1" />
        <div className="md:col-span-2 flex justify-end">
          <button className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Save Changes
          </button>
        </div>
      </form>
      {saved && <p className="text-green-600 text-sm mt-3">Saved ✔</p>}
    </div>
  );
};

export default Settings;
