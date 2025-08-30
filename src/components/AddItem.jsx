// src/components/AddItem.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/cart/CartSlice";

const AddItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price) return;

    dispatch(addItem({ 
      id: Date.now(), 
      name, 
      price: parseFloat(price), 
      quantity: 1 
    }));

    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">Add New Item</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItem;
