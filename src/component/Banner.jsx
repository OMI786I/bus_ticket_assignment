import React from "react";

import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-[url('resources/city-landscape-background-copy-space_1179130-531337.jpg')] bg-cover bg-center bg-no-repeat w-full h-screen flex items-center justify-center">
      <div className="px-4 sm:px-8 md:px-20 pt-16 md:pt-24 grid md:grid-cols-2 grid-cols-1 items-center text-center md:text-left">
        {/* Left Side Text Section */}
        <div className="space-y-6 mb-8 md:mb-0">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            Charter with us for an adventure-filled journey
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-red-400 to-red-100 bg-clip-text text-transparent my-6">
            Book your seat now
          </h1>
          <Link to="/booking">
            <button className="px-8 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300">
              Book Now
            </button>
          </Link>
        </div>

        {/* Right Side Image Section */}
        <div className="flex justify-center md:justify-end  ">
          <img
            src="resources/—Pngtree—big tour bus 3d rendering_18143632.png"
            alt="Tour Bus"
            className="w-3/4 md:w-full max-w-xs md:max-w-md lg:max-w-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
