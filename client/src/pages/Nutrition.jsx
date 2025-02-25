import React from "react";
import { Link } from "react-router-dom";

const Nutrition = () => {
  const today = new Date().toISOString().slice(0, 10);
  const foodData = ["Calories", "Carbs", "Fat", "Sodium", "Sugar"];
  const foodValue = [0, 0, 0, 0, 0];
  return (
    <div className="flex flex-col px-30 pb-30 gap-2 pt-24">
      <div className="flex items-center border-b border-b-[#dadada] pb-2 gap-20">
        <p>Your Food dairy for: </p>
        <div>{today}</div>
        <div className="flex flex-col text-sm">
          <label htmlFor="date">Check date</label>
          <input type="date" id="date" className="border px-4 py-2" />
        </div>
      </div>
      <div className="flex items-start  justify-between border-b border-b-[#dadada] pb-2 gap-44">
        <div className="flex flex-col gap-4">
          <p>Breakfast</p>
          <Link
            to={"/food"}
            className="border border-[#dadada] px-4 py-1 rounded-md bg-blue-500 text-white"
          >
            Add Food
          </Link>
        </div>
        <div className="grid grid-cols-5 text-center gap-1  ">
          {foodData.map((item, index) => (
            <div
              key={index}
              className="border rounded bg-blue-500 text-white text-center px-4 py-1"
            >
              <p>{item}</p>
            </div>
          ))}

          <p className="border px-4 py-1 rounded">1</p>
          <p className="border px-4 py-1 rounded">100</p>
        </div>
      </div>
      <div className="flex items-start  justify-between border-b border-b-[#dadada] pb-2 gap-44">
        <div className="flex flex-col gap-4">
          <p>Lunch</p>
          <Link
            to={"/food"}
            className="border border-[#dadada] px-4 py-1 rounded-md bg-blue-500 text-white"
          >
            Add Food
          </Link>
        </div>
        <div className="grid grid-cols-5 text-center gap-1  "></div>
      </div>{" "}
      <div className="flex items-start  justify-between border-b border-b-[#dadada] pb-2 gap-44">
        <div className="flex flex-col gap-4">
          <p>Dinner</p>
          <Link
            to={"/food"}
            className="border border-[#dadada] px-4 py-1 rounded-md bg-blue-500 text-white"
          >
            Add Food
          </Link>
        </div>
        <div className="grid grid-cols-5 text-center gap-1  "></div>
      </div>{" "}
      <div className="flex items-start  justify-between border-b border-b-[#dadada] pb-2 gap-44">
        <div className="flex flex-col gap-4">
          <p>Snacks</p>
          <Link
            to={"/food"}
            className="border border-[#dadada] px-4 py-1 rounded-md bg-blue-500 text-white"
          >
            Add Food
          </Link>
        </div>
        <div className="grid grid-cols-5 text-center gap-1  "></div>
      </div>
      <div className="flex items-center   justify-end  pb-2 gap-44">
        <div className="grid grid-cols-6 items-center  gap-1">
          <span></span>
          {foodData.map((item, index) => (
            <div
              key={index}
              className="border rounded bg-blue-500 text-white text-center px-4 py-1"
            >
              <p>{item}</p>
            </div>
          ))}
          <p>Total</p>
          {foodValue.map((item, index) => (
            <p key={index} className="border px-4 py-1 rounded">
              {item}
            </p>
          ))}
          <p>Your Daily Goal</p>
          {foodValue.map((item, index) => (
            <p key={index} className="border px-4 py-1 rounded">
              {item}
            </p>
          ))}
          <p>Remaining</p>
          {foodValue.map((item, index) => (
            <p key={index} className="border px-4 py-1 rounded">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
