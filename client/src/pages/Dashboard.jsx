import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col px-30 pb-30 gap-6 pt-20">
      <div className="grid grid-cols-2  gap-10">
        <div className="flex items-center gap-4">
          {" "}
          <div className="flex rounded-full border h-16 w-16"></div>
          <h2>Osama</h2>
        </div>

        <p className="italic w-96">
          "Your body won’t go where your mind won’t push it. Stay focused, stay
          strong, and keep grinding!"
        </p>
      </div>
      <div className="flex items-center justify-end">
        <h2>1st Day streak</h2>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="border border-[#dadada]  bg-white shadow-md rounded p-4">
          <h2>Calories</h2>
          <div className="flex justify-between mt-6">
            <div className="flex items-center justify-center border p-10 rounded-full h-32 w-32">
              <span>
                {" "}
                1275 <span className="block">remaining</span>
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <h2 className="w-24">Base Goal</h2>
                <span className="border px-4 py-2 w-24">500</span>
              </div>
              <div className="flex items-center gap-4">
                <h2 className="w-24">Food</h2>
                <span className="border px-4 py-2 w-24">500</span>
              </div>
              <div className="flex items-center gap-4">
                <h2 className="w-24">Exercise</h2>
                <span className="border px-4 py-2 w-24">500</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#dadada]  bg-white shadow-md rounded p-4">
          <h2>Macros</h2>
          <div className="grid grid-cols-3 mt-6">
            <div className="h-32 w-32 border rounded-full"></div>
            <div className="h-32 w-32 border rounded-full"></div>
            <div className="h-32 w-32 border rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col border min-h-60 max-h-60 rounded bg-white shadow-md border-[#dadada] p-4">
        <h2>Workout Plan</h2>
        <div className="border border-[#dadada] bg-[#dfdfdf]"></div>
      </div>
    </div>
  );
};

export default Dashboard;
