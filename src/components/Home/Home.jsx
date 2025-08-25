import React, { useState, useEffect } from "react";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import apple from "../../assets/images/apple.png";
import samsung from "../../assets/images/samsung.png";
import google from "../../assets/images/google.png";
import { Link } from "react-router";

const images = [banner1, banner2, banner3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="w-full h-full flex items-center justify-center bg-red-300 home-content">
    <div className="w-full h-full flex items-center justify-center  home-content">
      <div className="home-content">
        <div className=".banner relative w-full max-w-[1200px] rounded-2xl overflow-hidden my-6">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`banner-${index}`}
                className="w-full flex-shrink-0"
              />
            ))}
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((e, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-blue-500 scale-125" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="featuredBrand w-full h-[10rem]">
          <h1 className="text-4xl font-bold ">Featured Brand</h1>

          <div className="brandsLogo flex items-center justify-around my-8">
            <div className="apple cursor-pointer ">
              <Link to="">
                <img src={apple} alt="" className="w-12" />
              </Link>
            </div>
            <div className="samsung cursor-pointer ">
              <Link to="">
                <img src={samsung} alt="" className="w-20" />
              </Link>
            </div>
            <div className="google cursor-pointer  ">
              <Link to="">
                <img src={google} alt="" className="w-12" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
