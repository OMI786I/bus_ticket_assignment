import React from "react";

import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-[url('resources/city-landscape-background-copy-space_1179130-531337.jpg')] bg-cover bg-center bg-no-repeat w-full h-screen">
      <div className=" px-1 md:px-20 pt-24 grid md:grid-cols-2 grid-cols-1 items-center justify-center ">
        <div>
          <h3 className="lg:text-3xl text-3xl font-bold text-white">
            Charter with us for an adventure-filled journey
          </h3>
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold bg-gradient-to-r from-red-400 to-red-100 bg-clip-text text-transparent my-6">
            Book your seat now
          </h1>
          <Link to={"/booking"}>
            {" "}
            <button className="btn btn-warning">Book Now</button>
          </Link>
        </div>
        <div>
          <img src="resources/—Pngtree—big tour bus 3d rendering_18143632.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
