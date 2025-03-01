import React from "react";

const Calorie = () => {
  return (
    <div className="flex flex-col px-6 lg:px-30 pb-20 lg:pb-30 gap-6 pt-10 lg:pt-20">
      <div className="flex flex-col gap-8 items-center bg-[#efefef] p-4  rounded">
        <h2 className="text-xl font-bold">Calorie Calculator</h2>
        <form className="flex flex-col gap-6 p-6 w-full lg:w-2/4">
          <div className="flex flex-col gap-1">
            <label htmlFor="duration-cardio">
              Duration of Cardiovascular activity
            </label>
            <input
              type="number"
              id="duration-cardio"
              name="duration-cardio"
              placeholder="Enter duration in minutes"
              className="border px-4 py-2 border-[#dadada] w-full bg-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="duration-workout">Duration of workout</label>
            <input
              type="number"
              id="duration-workout"
              name="duration-workout"
              placeholder="Enter duration in minutes"
              className="border px-4 py-2 border-[#dadada] w-full bg-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="weight">Weight</label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="Enter weight in kg"
              className="border px-4 py-2 border-[#dadada] w-full bg-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="height">Height</label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Enter height in Kg"
              className="border px-4 py-2 border-[#dadada] w-full bg-white"
            />
          </div>
          <button
            type="submit"
            className="border bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 text-white"
          >
            Calculate{" "}
          </button>
        </form>
        <div className="flex flex-col gap-1">
          <p>Total Calorie Burned through out the day</p>
          <div className="border text-center p-4 rounded bg-white border-[#dadada]">
            200kcal
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calorie;
