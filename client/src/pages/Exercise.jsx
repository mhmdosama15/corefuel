import React from "react";

const Exercise = () => {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <div className="flex flex-col px-30 pb-30 gap-6 pt-24">
      <div className="flex items-center border-b border-b-[#dadada] pb-10 gap-20">
        <p>Your exercise dairy for: </p>
        <div>{today}</div>
        <div className="flex flex-col text-sm">
          <label htmlFor="date">Check date</label>
          <input type="date" id="date" className="border px-4 py-2" />
        </div>
      </div>
      <div className="flex items-start border-b border-b-[#dadada] pb-10 gap-44">
        <div className="flex flex-col gap-4">
          <p>Cardiovascular</p>
          <button className="border border-[#dadada] bg-blue-500 text-white">
            Add Exercise
          </button>
        </div>
        <div className="grid grid-cols-2 text-center gap-1  ">
          <div className="border rounded bg-blue-500 text-white text-center px-4 py-1">
            <p> Minutes</p>
          </div>
          <div className="border rounded bg-blue-500 text-white text-center px-4 py-1">
            <p> Calories Burned</p>
          </div>
          <p className="border px-4 py-1 rounded">1</p>
          <p className="border px-4 py-1 rounded">100</p>
        </div>
      </div>
      <div className="flex items-start border-b border-b-[#dadada] pb-10 gap-44">
        <div className="flex flex-col gap-4">
          <p>Strenght Training</p>
          <button className="border border-[#dadada] bg-blue-500 text-white">
            Add Exercise
          </button>
        </div>
        <div className="grid grid-cols-3 text-center  gap-1">
          <div className="border rounded bg-blue-500 text-white text-center px-4 py-1">
            <p> Sets</p>
          </div>
          <div className="border rounded bg-blue-500 text-white text-center px-4 py-1">
            <p> Reps/Set</p>
          </div>
          <div className="border rounded bg-blue-500 text-white text-center px-4 py-1">
            <p> Weight/Set</p>
          </div>
          <p className="border px-4 py-1 rounded">1</p>
          <p className="border px-4 py-1 rounded">100</p>
          <p className="border px-4 py-1 rounded">1</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>Today's Exercise Notes</p>
        <div className="flex justify-end">
          <button className="border cursor-pointer border-[#dadada] bg-blue-500 text-white">
            Edit Note
          </button>
        </div>
        <div className="border min-h-44 max-h-full border-[#dadada]">
          <textarea className="h-full w-full px-4 py-2" />
        </div>
      </div>
    </div>
  );
};

export default Exercise;
