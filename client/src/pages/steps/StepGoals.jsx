import React, { useState } from "react";

const StepGoals = () => {
  const goals = [
    "Lose Weight",
    "Maintain Weight",
    "Gain Weight",
    "Gain Muscle",
    "Increase Step Count",
    "Fit Body",
    "Shred",
  ];
  const [selectedGoals, setSelectedGoals] = useState([]);
  const addGoal = (goal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };
  return (
    <div className="flex flex-col text-center gap-3">
      <h2>What are your main goals?</h2>
      <p>Select up to 4 that matches your plans</p>
      <div className="grid gap-2">
        {goals.map((goal, index) => (
          <button
            key={index}
            onClick={() => addGoal(goal)}
            disabled={selectedGoals.length >= 4}
            className={`flex items-center justify-center py-2 px-4 rounded-lg text-center transition duration-300 ${
              selectedGoals.includes(goal)
                ? "bg-blue-500 text-white"
                : "bg-white text-black border border-gray-300"
            }`}
          >
            <span>{goal}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepGoals;
