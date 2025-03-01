import React from "react";
import { Link } from "react-router-dom";

const AnatomyLayout = ({ title, targetArea, exercises }) => {
  return (
    <div className="flex flex-col items-center px-6 lg:px-30 pb-20 lg:pb-30  gap-4 pt-10 lg:pt-24">
      <h2 className="text-2xl pb-10">Chest Anatomy</h2>
      <div className="grid grid-cols-3 gap-10">
        <h2 className="lg:w-96 text-center">Upper Pec</h2>
        <h2 className="lg:w-96 text-center">Middle Pec</h2>
        <h2 className="lg:w-96 text-center">Lower pec</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <Link
            to={"/anatomy"}
            key={index}
            className="bg-gray-200 p-4 lg:w-96 rounded-lg"
          >
            <h2 className="">Exercise</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnatomyLayout;
