import React, { useState } from "react";

const StepActivity = () => {
  const levels = [
    "Not Very Active ",
    "Lightly Active ",
    "Active ",
    "Very Active ",
  ];
  const [selectedActivity, setSelectedActivity] = useState([]);
  const addActivity = () => {
    if (selectedActivity.includes(activity)) {
      setSelectedActivity(selectedActivity.filter((act) => act !== activity));
    } else {
      setSelectedActivity([...selectedActivity, activity]);
    }
  };
  return (
    <div className="flex flex-col text-center gap-3">
      <h2 className="font-bold">What is your baseline activity level?</h2>
      <p>Not including workouts</p>
      <div className="grid gap-2">
        {levels.map((level, index) => (
          <button
            key={index}
            onClick={() => addActivity(level)}
            disabled={selectedActivity.length >= 4}
            className={`flex items-center justify-center py-2 px-4 rounded-lg text-center transition duration-300 ${
              selectedActivity.includes(level)
                ? "bg-blue-500 text-white"
                : "bg-white text-black border border-gray-300"
            }`}
          >
            <span>{level}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepActivity;
