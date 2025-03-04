import React, { useEffect, useState } from "react";

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

  const [selectedGoals, setSelectedGoals] = useState(() => {
    const storedGoals = sessionStorage.getItem("goals");
    return storedGoals ? JSON.parse(storedGoals) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("goals", JSON.stringify(selectedGoals));
  }, [selectedGoals]);

  const addGoal = (goal) => {
    setSelectedGoals((prev) => {
      if (prev.includes(goal)) {
        return prev.filter((g) => g !== goal);
      } else if (prev.length < 4) {
        return [...prev, goal];
      }
      return prev;
    });
  };

  return (
    <div className="flex flex-col text-center gap-3">
      <h2 className="font-bold">What are your main goals?</h2>
      <p>Select up to 4 that match your plans</p>
      <div className="grid gap-2">
        {goals.map((goal, index) => (
          <button
            key={index}
            onClick={() => addGoal(goal)}
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
