// src/components/Item.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/cart/CartSlice";

const Item = ({ id, name, price }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ id, name, price, quantity: 1 }));
  };

  return (
    <div className="border p-4 rounded shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">${price}</p>
      </div>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
