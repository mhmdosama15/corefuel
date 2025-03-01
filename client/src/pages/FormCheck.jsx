import React from "react";
import PictureTwo from "../assets/images/pic2.jpg";
const FormCheck = () => {
  return (
    <div className="flex flex-col px-6 lg:px-30 pb-20 lg:pb-30  gap-4 pt-10 lg:pt-24">
      <h2 className="text-xl">Form Check</h2>
      <p>Enter the exercise you want to review for form checking.</p>
      <div className="grid xl:grid-cols-3 gap-8">
        <form className=" flex  gap-10     ">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="exercise-name" className="text-lg font-bold">
                Exercise Name:
              </label>
              <input
                id="exercise-name"
                placeholder="e.g Chest Press"
                className="bg-white border border-[#dadada] rounded w-72  px-4 py-2"
              />
            </div>
            {/* <div className="flex flex-col gap-3">
             <label htmlFor="exercise type" className="text-lg font-bold">
               Exercise type:
             </label>
             <select
               id="exericse-type"
               className="bg-white border border-[#dadada] rounded w-72  px-4 py-2"
             >
               <option>Cardio</option>
               <option>Strength</option>
             </select>
           </div> */}
            {/* <div className="flex flex-col gap-3">
             <label htmlFor="mins" className="text-lg font-bold">
               How Long:
             </label>
             <div className="flex items-center gap-2">
               <input
                 id="mins"
                 type="number"
                 className="bg-white border border-[#dadada] rounded  px-4 py-2"
               />
               <span>Minutes</span>
             </div>
           </div> */}
            {/* <div className="flex flex-col gap-3">
             <label htmlFor="calories" className="text-lg font-bold">
               Calories Burned:
             </label>
             <div className="flex items-center gap-2">
               <input
                 id="calories"
                 type="number"
                 className="bg-white border border-[#dadada] rounded  px-4 py-2"
               />
               <span>kcal</span>
             </div>
           </div> */}
            <button
              type="submit"
              className="px-4 mt-6 py-2 rounded bg-blue-500 text-white w-32"
            >
              Search
            </button>
          </div>
        </form>
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

export default FormCheck;
