import React from "react";

const StepMetrics = () => {
  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="height" className="font-bold">
          How tall are you?
        </label>
        <input
          type="number"
          id="height"
          name="height"
          placeholder="cm"
          className="w-44 p-2 border bg-white border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="weight" className="font-bold">
          How much do you weight?
        </label>
        <input
          type="number"
          id="weight"
          name="weight"
          placeholder="kg"
          className="w-44 p-2 border bg-white border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="goal-weight" className="font-bold">
          What is your goal weight?
        </label>
        <span className="text-sm text-left">
          This does not affect your calorie goal and you can always change it
          later.{" "}
        </span>
        <input
          type="number"
          id="goal-weight"
          name="goal-weight"
          placeholder="kg"
          className="w-44 p-2 border bg-white border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default StepMetrics;
