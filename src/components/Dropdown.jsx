import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ items = [], onSelect, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (index, path) => {
    setSelectedIndex(index);
    if (onSelect) onSelect(items[index]);
    if (onClose) onClose(); // close after selecting
  };

  // Detect outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (onClose) onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      className="absolute top-7 z-50 w-24 bg-white shadow-xl rounded-lg overflow-hidden text-xs font-normal border border-gray-200"
    >
      <ul className="flex flex-col gap-1 p-1.5 max-h-60 overflow-y-auto">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleSelect(index, item.path)}
            className={`px-1 py-1 rounded-md transition-all duration-200 cursor-pointer 
              ${
                selectedIndex === index
                  ? "text-blue-600 font-semibold bg-indigo-50"
                  : "hover:text-blue-500 hover:bg-gray-100"
              }`}
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
