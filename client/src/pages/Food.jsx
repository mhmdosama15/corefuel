import React from "react";

const Food = () => {
  return (
    <div className="flex flex-col px-6 pt-10 pb-20 lg:px-30 lg:pb-30 gap-2 lg:pt-24">
      <h2 className="border-b border-[#dadada] pb-2">Add Food to your dairy</h2>
      <div className="flex items-center gap-2">
        <input
          placeholder="Search for food"
          className="border w-96 px-4 py-2 rounded-md border-[#dadada]"
          type="text"
          required
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4">
          Search
        </button>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-3 ">
        <div className="border border-[#dadada] rounded-md overflow-scroll p-3 flex flex-col gap-2 min-h-96 max-h-96 md:w-full lg:min-w-96 lg:max-w-96">
          <ul className="">
            {Array.from({ length: 10 }).map((item, index) => (
              <li
                key={index}
                className="flex items-center w-full border-b pb-2 border-[#dadada] "
              >
                <div className="flex flex-col  w-full  items-start">
                  <span>White rice</span>
                  <span className="text-gray-400">204 calories</span>
                </div>
                <div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4">
                    Add
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-[#dadada] rounded-md overflow-scroll p-3 flex flex-col justify-between gap-4 text-center min-h-96 max-h-96 md:w-full lg:min-w-96 lg:max-w-96">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-center text-xl">White rice</h2>
            <label htmlFor="meal">To which meal?</label>
            <select id="meal" className="border px-4 py-2 border-[#dadada]">
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snack</option>
            </select>
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <button className="bg-blue-500 w-full hover:bg-blue-700 text-white rounded-md py-2 px-4">
                Add to Food dairy
              </button>
              <button className="bg-blue-500 w-full hover:bg-blue-700 text-white rounded-md py-2 px-4">
                Nutrition Info
              </button>
            </div>
          </div>
          <div className="">
            <button className="bg-red-500 hover:bg-red-700 text-white rounded-md py-2 px-4">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
