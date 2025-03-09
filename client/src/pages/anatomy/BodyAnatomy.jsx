import React from "react";
import testing from "../../assets/images/pic1.jpg";
import { Link } from "react-router-dom";
const BodyAnatomy = () => {
  const anatomy = ["chest", "back", "shoulders", "legs"];
  return (
    <div className="flex flex-col items-center px-6 lg:px-30 pb-20 lg:pb-30  gap-4 pt-10 lg:pt-24">
      <h2 className="text-xl lg:text-2xl">Body Anatomy</h2>
      <p className="text-center lg:text-xl">
        Choose a target area to see recommended exercises
      </p>
      <div className="grid  xl:grid-cols-4 gap-10">
        {anatomy.map((name, index) => (
          <Link
            to={`/anatomy/${name}`}
            key={index}
            className="rounded-lg flex flex-col gap-3 border border-[#dadada] p-4 h-80 w-72"
          >
            <img alt="" src={testing} className="h-full w-full object-cover" />
            <p className="text-lg text-center">{name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyAnatomy;
