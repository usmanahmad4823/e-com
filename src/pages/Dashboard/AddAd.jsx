import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAd } from "../../Features/post/adSlice"; // adjust if path differs

const AddAd = ({ onPosted }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const [busy, setBusy] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setBusy(true);
    dispatch(addAd({ ...form, price: Number(form.price) || 0 }));
    setBusy(false);
    setForm({ title: "", description: "", price: "", category: "", image: "" });
    onPosted?.();
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4">Post New Ad</h2>
      <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
        <input name="title" value={form.title} onChange={handle}
          placeholder="Title" className=" text-xs border rounded-lg px-4 py-1" required />
        <input name="price" value={form.price} onChange={handle} type="number" min="0"
          placeholder="Price (PKR)" className=" text-xs border rounded-lg px-4 py-1" required />
        <input name="category" value={form.category} onChange={handle}
          placeholder="Category (e.g., Mobile Phones)" className=" text-xs border rounded-lg px-4 py-1" required />
        <input name="image" value={form.image} onChange={handle}
          placeholder="Image URL or /images/file.jpg" className="text-xs border rounded-lg px-4 py-1" required />
        <textarea name="description" value={form.description} onChange={handle}
          placeholder="Description" className="text-xs border rounded-lg px-4 py-1 md:col-span-2" rows={4} required />
        <div className="md:col-span-2 flex justify-end">
          <button
            disabled={busy}
            className="px-4 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-60"
          >
            {busy ? "Posting..." : "Post Ad"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAd;
