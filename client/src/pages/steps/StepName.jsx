import React from "react";

const StepName = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2>What's your first name?</h2>
      <p className="text-sm">One gymrat added to the family</p>
      <input id="name" className="bg-white rounded w-72 mt-6 px-4 py-2" />
    </div>
  );
};

export default StepName;
