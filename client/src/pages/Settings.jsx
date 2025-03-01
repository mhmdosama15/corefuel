import React, { useState } from "react";

const Settings = () => {
  const [name, setName] = useState("Osama");
  const [email, setEmail] = useState("H5Dyj@example.com");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState("male");
  const [country, setCountry] = useState("Egypt");
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [activityLevel, setActivityLevel] = useState("Active");
  const [goal, setGoal] = useState("Gain Weight");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);
  const changeName = () => {
    setShowNameInput(!showNameInput);
  };
  const changeEmail = () => {
    setShowEmailInput(!showEmailInput);
  };
  const changePassword = () => {
    setShowPasswordInput(!showPasswordInput);
  };

  const showUserMetrics = () => {
    setShowMetrics(!showMetrics);
  };
  return (
    <div className="flex flex-col px-6 pt-10 lg:px-30 lg:pb-30 gap-6 lg:pt-24">
      <h2 className="text-xl font-bold">Settings</h2>
      <div className="flex flex-col gap-3 items-start bg-white border border-[#dadada] rounded-lg p-4  ">
        <div className="flex items-center gap-1">
          <div className="border rounded-full h-10 w-10 bg-blue-500 text-white flex items-center justify-center">
            OM
          </div>
          <p>Osama</p>
        </div>
        <button
          onClick={showUserMetrics}
          className="text-blue-700 cursor-pointer hover:text-blue-500"
        >
          {showMetrics ? "Cancel" : "Change Metrics "}
        </button>
        {showMetrics && (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                className="border lg:w-96 w-full px-4 py-2 rounded-md border-[#dadada]"
              >
                <option selected>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                placeholder="Age"
                className="border lg:w-96 w-full px-4 py-2 rounded-md border-[#dadada]"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="flex  flex-col gap-2 items-start">
              <label htmlFor="weight">Weight</label>
              <input
                id="weight"
                placeholder="weight"
                className="border lg:w-96 w-full px-4 py-2 rounded-md border-[#dadada]"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="height">Height</label>
              <input
                id="height"
                placeholder="height"
                className="border lg:w-96 w-full px-4 py-2 rounded-md border-[#dadada]"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="activity-level">Activity Level</label>
              <select
                id="activity-level"
                className="border lg:w-96 w-full px-4 py-2 rounded-md border-[#dadada]"
              >
                <option selected>Active</option>
                <option>Not Active</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="goal">Goal</label>
              <select
                id="goal"
                className="border lg:w-96 w-full px-4 py-2 rounded-md border-[#dadada]"
              >
                <option selected>Weight Loss</option>
                <option>Weight Gain</option>
              </select>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4">
              Save
            </button>
          </div>
        )}
        <button
          onClick={changeName}
          className="text-blue-700 cursor-pointer hover:text-blue-500"
        >
          {showNameInput ? "Cancel" : "Change Username "}
        </button>
        {showNameInput && (
          <div className="flex gap-2 items-center">
            <input
              placeholder="Name"
              className="border lg:w-96 w-full px-4 py-2 rounded-md border-[#dadada]"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4">
              Save
            </button>
          </div>
        )}
        <button
          onClick={changeEmail}
          className="text-blue-700 cursor-pointer hover:text-blue-500"
        >
          {showEmailInput ? "Cancel" : "Change Email "}
        </button>
        {showEmailInput && (
          <div className="flex gap-2 items-center">
            <input
              placeholder="Email"
              className="border lg:w-96 w-full px-4 py-2 rounded-md border-[#dadada]"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4">
              Save
            </button>
          </div>
        )}
        <button
          onClick={changePassword}
          className="text-blue-700 cursor-pointer hover:text-blue-500"
        >
          {showNameInput ? "Cancel" : "Change Password "}
        </button>
        {showPasswordInput && (
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <input
                placeholder="password"
                className="border lg:w-96 w-full px-4 py-2 rounded-md border-[#dadada]"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center">
              <input
                placeholder="confirm-password"
                className="border lg:w-96 w-full px-4 py-2 rounded-md border-[#dadada]"
                type="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4">
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
