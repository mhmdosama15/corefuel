import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Nutrients = ({ food }) => {
  return (
    <div className="overflow-x-auto w-full lg:w-2/4">
      <table className=" table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 w-3/4 py-2 text-left">Food Name</th>
            <th className="px-4 w-3/4 py-2 text-left">Calories</th>
            <th className="px-4 w-3/4 py-2 text-left">Carbs</th>
            <th className="px-4 w-3/4 py-2 text-left">Fats</th>
            <th className="px-4 w-3/4 py-2 text-left">Sodium</th>
            <th className="px-4 w-3/4 py-2 text-left">Sugar</th>
            <th className="px-4 w-3/4 py-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {food.length > 0 ? (
            food.map((item, index) => (
              <tr key={index} className="border-b">
                <td className=" px-4  py-2">{item.foodName}</td>
                <td className=" px-4 py-2">
                  {item.foodMacros.calories.toFixed(2)}
                </td>
                <td className=" px-4 py-2">
                  {item.foodMacros.carbs.toFixed(2)}
                </td>
                <td className=" px-4 py-2">
                  {item.foodMacros.fats.toFixed(2)}
                </td>
                <td className=" px-4 py-2">
                  {item.foodMacros.sodium.toFixed(2)}
                </td>
                <td className=" px-4 py-2">
                  {item.foodMacros.sugar.toFixed(2)}
                </td>
                <td className=" py-2">
                  <button>
                    <FaTrash className="text-red-500" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-4 py-2 text-center">
                You have not added any food yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Nutrients;
