import React from "react";

const ExerciseForm = () => {
  return (
    <div className="flex flex-col px-6 lg:px-30 pb-10 lg:pb-30 gap-6  pt-10 lg:pt-24">
      <h2>Create New Exercise</h2>
      <form className="flex flex-col lg:flex-row lg:justify-between xl:w-3/4 gap-10  p-6 bg-white shadow-sm border border-[#dadada] rounded">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <label htmlFor="exercise-name" className="text-lg font-bold">
              Exercise Name:
            </label>
            <input
              id="exercise-name"
              className="bg-white border border-[#dadada] rounded w-72  px-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-3">
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
          </div>
          <div className="flex flex-col gap-3">
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
          </div>
          <div className="flex flex-col gap-3">
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
          </div>
          <button
            type="submit"
            className="px-4 mt-6 py-2 rounded bg-blue-500 text-white w-32"
          >
            Add
          </button>
        </div>
        <div className="flex order-first lg:order-none flex-col gap-2">
          {" "}
          <h2 className="font-bold">Creating a new exercise</h2>
          <p>
            If you can't find an exercise in our database, you can easily add it
            yourself.
          </p>
          <p>
            Once you've created an exercise, you will be able to search for it
            and add it to your exercise log at any time.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ExerciseForm;
