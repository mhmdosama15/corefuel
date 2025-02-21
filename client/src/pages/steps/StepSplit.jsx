import React, { useState } from "react";

const StepSplit = () => {
  const splits = ["Push, Pull, Legs", "Upper, Lower", "Bro split"];
  const [selectedSplits, setSelectedSplits] = useState([]);
  const addSplit = (split) => {
    if (selectedSplits.includes(split)) {
      setSelectedSplits(selectedSplits.filter((sp) => sp !== split));
    } else {
      setSelectedSplits([...selectedSplits, split]);
    }
  };
  return (
    <div className="flex flex-col text-center gap-3">
      <h2>Select which split would you like to follow?</h2>
      <p>
        Choose the type of split that matches your level of intensity and time
        available
      </p>
      <div className="grid gap-2">
        {splits.map((split, index) => (
          <button
            key={index}
            onClick={() => addSplit(split)}
            disabled={selectedSplits.length >= 4}
            className={`flex items-center justify-center py-2 px-4 rounded-lg text-center transition duration-300 ${
              selectedSplits.includes(split)
                ? "bg-blue-500 text-white"
                : "bg-white text-black border border-gray-300"
            }`}
          >
            <span>{split}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepSplit;
