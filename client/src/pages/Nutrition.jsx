import React from "react";
import { Link } from "react-router-dom";

const Nutrition = () => {
  const today = new Date().toISOString().slice(0, 10);
  const foodData = ["Calories", "Carbs", "Fat", "Sodium", "Sugar"];
  const foodValue = [0, 0, 0, 0, 0];
  return (
    <div className="flex flex-col px-6 lg:px-30 pb-10 lg:pb-30 gap-2  pt-10 lg:pt-24">
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center border-b border-b-[#dadada] pb-10 lg:gap-20">
        <p>Your Food dairy for: </p>
        <div>{today}</div>
        <div className="flex flex-col text-sm">
          <label htmlFor="date">Check date</label>
          <input type="date" id="date" className="border px-4 py-2" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:justify-between border-b border-b-[#dadada] gap-6 pb-10 lg:gap-44">
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
              className="border flex items-center justify-center rounded bg-blue-500 text-white text-center px-4 py-1"
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
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 px-4 py-2"></th>
              {foodData.map((item, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">
                Total
              </td>
              {foodValue.map((item, index) => (
                <td
                  key={index}
                  className="border  text-center border-gray-300 px-4 py-2"
                >
                  {item}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">
                Your Daily Goal
              </td>
              {foodValue.map((item, index) => (
                <td
                  key={index}
                  className="border  text-center border-gray-300 px-4 py-2"
                >
                  {item}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">
                Remaining
              </td>
              {foodValue.map((item, index) => (
                <td
                  key={index}
                  className="border text-center border-gray-300 px-4 py-2"
                >
                  {item}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nutrition;
