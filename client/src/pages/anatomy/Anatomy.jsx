import React from "react";
import PictureTwo from "../../assets/images/pic2.jpg";
const Anatomy = ({}) => {
  return (
    <div className="flex flex-col items-center px-6 lg:px-30 pb-20 lg:pb-30  gap-4 pt-10 lg:pt-24">
      <h2 className="text-2xl">Chest press</h2>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mt-10">
        <div className="p-6 bg-white shadow-sm border h-96 border-[#dadada] rounded">
          <img src={PictureTwo} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="p-6 bg-white shadow-sm border h-96 overflow-scroll hide-scrollbar border-[#dadada] rounded">
          <h2 className="text-lg font-semibold">Chest Press</h2>
          <p className="text-gray-600">
            A strength training exercise that targets the chest, shoulders, and
            triceps.
          </p>

          <h3 className="mt-4 font-medium">Steps:</h3>
          <ul className="list-decimal list-inside space-y-2">
            <li>Lie flat on a bench with feet firmly on the ground.</li>
            <li>
              Hold the barbell or dumbbells with a firm grip, hands slightly
              wider than shoulder-width.
            </li>
            <li>
              Lower the weights slowly to your chest while keeping your elbows
              at a 45-degree angle.
            </li>
            <li>
              Push the weights back up until your arms are fully extended.
            </li>
            <li>
              Repeat for the desired number of reps, maintaining control
              throughout.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Anatomy;
