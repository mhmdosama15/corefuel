import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../utils";
import { useSelector } from "react-redux";
import axios from "axios";
import Nutrients from "../components/Nutrients";

const Nutrition = () => {
  const today = new Date().toISOString().slice(0, 10);
  const foodData = ["Food Name", "Calories", "Carbs", "Fat", "Sodium", "Sugar"];
  const foodValue = [0, 0, 0, 0, 0, 0];
  const token = useSelector((state) => state.auth.token);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const fetchFoodData = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/user/get-user-food`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      if (response.status === 200) {
        const userFood = response.data.userFood;
        const tempBreakfast = [];
        const tempLunch = [];
        const tempDinner = [];
        const tempSnacks = [];

        userFood.forEach((item) => {
          if (item.foodType === "breakfast") {
            tempBreakfast.push(item);
          } else if (item.foodType === "lunch") {
            tempLunch.push(item);
          } else if (item.foodType === "dinner") {
            tempDinner.push(item);
          } else if (item.foodType === "snack") {
            tempSnacks.push(item);
          }
        });
        setBreakfast(tempBreakfast);
        setLunch(tempLunch);
        setDinner(tempDinner);
        setSnacks(tempSnacks);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFoodData();
  }, []);
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
      {/* <div className="flex items-center justify-end border-b pb-2">
        <table className=" table-fixed">
          <thead>
            <tr>
              {foodData.map((name, index) => (
                <th key={index} className="px-4 py-2 text-left bg-gray-200">
                  {name}
                </th>
              ))}
            </tr>
            <tbody className="w-44">
              <tr className=" w">
                <td className="px-4 py-2   text-left">hey</td>
              </tr>
            </tbody>
          </thead>
        </table>
      </div> */}
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
        <Nutrients food={breakfast} />
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:justify-between border-b border-b-[#dadada] gap-6 pb-10 lg:gap-44">
        <div className="flex flex-col gap-4">
          <p>Lunch</p>
          <Link
            to={"/food"}
            className="border border-[#dadada] px-4 py-1 rounded-md bg-blue-500 text-white"
          >
            Add Food
          </Link>
        </div>
        <Nutrients food={lunch} />
      </div>{" "}
      <div className="flex flex-col lg:flex-row items-start lg:justify-between border-b border-b-[#dadada] gap-6 pb-10 lg:gap-44">
        <div className="flex flex-col gap-4">
          <p>Dinner</p>
          <Link
            to={"/food"}
            className="border border-[#dadada] px-4 py-1 rounded-md bg-blue-500 text-white"
          >
            Add Food
          </Link>
        </div>
        <Nutrients food={dinner} />
      </div>{" "}
      <div className="flex flex-col lg:flex-row items-start lg:justify-between border-b border-b-[#dadada] gap-6 pb-10 lg:gap-44">
        <div className="flex flex-col gap-4">
          <p>Snacks</p>
          <Link
            to={"/food"}
            className="border border-[#dadada] px-4 py-1 rounded-md bg-blue-500 text-white"
          >
            Add Food
          </Link>
        </div>
        <Nutrients food={snacks} />
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
