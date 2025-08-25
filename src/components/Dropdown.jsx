import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Dropdown = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const closeSelect = (index) => {
    // setSelectedIndex(index)
    console.log(index)
  }

  return (
    <>
      <div className="dropdown bg-white absolute top-8 left-4 z-50 shadow-lg w-[10rem] rounded-b-lg overflow-hidden text-xs font-semibold">
        <ul className="scroll flex flex-col gap-2 p-4 max-h-[15rem] overflow-y-scroll">
          <li 
            onClick={() => closeSelect(0)} 
            className={`hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === 0 ? "text-blue-600 font-bold" : ""}`}>
            <Link to="">Watch</Link>
          </li>
          <li 
            onClick={() => closeSelect(1)} 
            className={`hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === 1 ? "text-blue-600 font-bold" : ""}`}>
            <Link to="">Speaker</Link>
          </li>
          <li 
            onClick={() => closeSelect(2)} 
            className={`hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === 2 ? "text-blue-600 font-bold" : ""}`}>
            <Link to="">Phone</Link>
          </li>
          <li 
            onClick={() => closeSelect(3)} 
            className={`hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === 3 ? "text-blue-600 font-bold" : ""}`}>
            <Link to="">Mouse</Link>
          </li>
          <li 
            onClick={() => closeSelect(4)} 
            className={`hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === 4 ? "text-blue-600 font-bold" : ""}`}>
            <Link to="">Monitor</Link>
          </li>
          <li 
            onClick={() => closeSelect(5)} 
            className={`hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === 5 ? "text-blue-600 font-bold" : ""}`}>
            <Link to="">Laptop</Link>
          </li>
          <li 
            onClick={() => closeSelect(6)} 
            className={`hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === 6 ? "text-blue-600 font-bold" : ""}`}>
            <Link to="">Keyboard</Link>
          </li>
          <li 
            onClick={() => closeSelect(7)} 
            className={`hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === 7 ? "text-blue-600 font-bold" : ""}`}>
            <Link to="">Joystick</Link>
          </li>
          <li 
            onClick={() => closeSelect(8)} 
            className={`hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === 8 ? "text-blue-600 font-bold" : ""}`}>
            <Link to="">HeadPhones</Link>
          </li>
          <li 
            onClick={() => closeSelect(9)} 
            className={`hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === 9 ? "text-blue-600 font-bold" : ""}`}>
            <Link to="">EarBuds</Link>
          </li>
          <li 
            onClick={() => closeSelect(10)} 
            className={`hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === 10 ? "text-blue-600 font-bold" : ""}`}>
            <Link to="">Cameras</Link>
          </li>
          <li 
            onClick={() => closeSelect(11)} 
            className={`hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer ${selectedIndex === 11 ? "text-blue-600 font-bold" : ""}`}>
            <Link to="">CCTV</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Dropdown
