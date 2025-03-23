import React from "react";
import testing from "../../assets/images/pic1.jpg";
import { Link } from "react-router-dom";
import ChestImage from "../../assets/images/pic1.jpg";
import BackImage from "../../assets/images/pic1.jpg";
import ShouldersImage from "../../assets/images/pic1.jpg";
import LegsImage from "../../assets/images/pic1.jpg";
import ArmsImage from "../../assets/images/pic1.jpg";
import CoreImage from "../../assets/images/pic1.jpg";
const BodyAnatomy = () => {
  const anatomy = [
    {
      name: "Chest",
      imageUrl: ChestImage, // Placeholder image
    },
    {
      name: "Back",
      imageUrl: BackImage, // Placeholder image
    },
    {
      name: "Shoulders",
      imageUrl: ShouldersImage, // Placeholder image
    },
    {
      name: "Legs",
      imageUrl: LegsImage, // Placeholder image
    },
    {
      name: "Arms",
      imageUrl: ArmsImage, // Placeholder image
    },
    {
      name: "Core",
      imageUrl: CoreImage, // Placeholder image
    },
  ];

  return (
    <div className="flex flex-col items-center px-6 lg:px-30 pb-20 lg:pb-30  gap-4 pt-10 lg:pt-24">
      <h2 className="text-xl lg:text-2xl">Body Anatomy</h2>
      <p className="text-center lg:text-xl">
        Choose a target area to see recommended exercises
      </p>
      <div
        className="grid  xl:grid-cols-3
       gap-10"
      >
        {anatomy.map((name, index) => (
          <Link
            to={`/anatomy/${name.name.toLowerCase()}`}
            key={index}
            className="rounded-lg flex flex-col gap-3 border border-[#dadada] p-4 h-80 "
          >
            <img
              alt=""
              src={name.imageUrl}
              className="h-full w-full object-cover"
            />
            <p className="text-lg text-center">{name.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyAnatomy;
