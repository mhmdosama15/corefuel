import React from "react";
import GridCard from "../components/GridCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-full  w-full">
      <div className="text-center">
        <h2 className="text-xl">Welcome to</h2>
        <p className="text-xl">CoreFuel</p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {Array.from({ length: 3 }).map((_, index) => (
          <GridCard key={index} />
        ))}
      </div>
      <div className="">
        <Link
          to={"/starter"}
          className="bg-[#dadada] rounded px-4 py-2 w-96 mt-6"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
