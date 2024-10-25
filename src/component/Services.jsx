import React from "react";
import { FcDoughnutChart } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcRating } from "react-icons/fc";
import { FcSafe } from "react-icons/fc";
import { FcOnlineSupport } from "react-icons/fc";
const Services = () => {
  const services = [
    {
      name: "Reliability",
      description:
        "Our buses run on a strict schedule, ensuring timely arrivals and departures so you can trust us to get you where you need to be, on time every time.",
      icon: <FcDoughnutChart />,
    },
    {
      name: "Comfortable Rides",
      description:
        "Our fleet is equipped with modern, comfortable seats, ample legroom, and amenities like Wi-Fi and charging ports to make your journey enjoyable.",
      icon: <FcInTransit />,
    },
    {
      name: "Affordable Pricing",
      description:
        "We offer competitive pricing and flexible ticketing options, providing an affordable and convenient travel experience for all budgets.",
      icon: <FcMoneyTransfer />,
    },
    {
      name: "Experienced Drivers",
      description:
        "Our drivers are licensed, highly trained, and dedicated to ensuring safe journeys for every passenger.",
      icon: <FcRating />,
    },
    {
      name: "Safety First",
      description:
        "We prioritize your safety with regular vehicle maintenance, high safety standards, and compliance with all transport regulations.",
      icon: <FcSafe />,
    },

    {
      name: "Customer Support",
      description:
        "Our dedicated customer service team is here to help you with any questions or issues, ensuring a smooth and pleasant experience from start to finish.",
      icon: <FcOnlineSupport />,
    },
  ];

  return (
    <div>
      <div className="mt-32">
        <h1 className=" p-2 text-3xl md:text-5xl text-center font-bold bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent my-6">
          Our Quality Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6 p-5">
          {" "}
          {services.map((res) => (
            <div
              key={res.id}
              className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 
                 hover:bg-green-600 group transition duration-300"
            >
              <span className="text-7xl group-hover:text-white transition duration-300">
                {" "}
                {res.icon}
              </span>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-white transition duration-300">
                {res.name}
              </h5>

              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-white transition duration-300">
                {res.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
