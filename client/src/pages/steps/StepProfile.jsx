import React from "react";

const StepProfile = () => {
  return (
    <div className="flex flex-col text-center items-center gap-3">
      <h2 className="font-bold">
        Please select which gender we should use to calculate your calorie
        needs.
      </h2>

      <div className="flex flex-col items-center gap-4">
        <p className="font-bold">Gender:</p>
        <div className="flex items-center gap-10">
          <div className="flex items-center">
            <input type="radio" name="gender" id="male" />
            <label className="ml-2" htmlFor="male">
              Male
            </label>
          </div>
          <div className="flex items-center ">
            <input type="radio" name="gender" id="female" />
            <label className="ml-2" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="dob" className="font-bold">
            Date of birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="border bg-white p-2 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="font-bold">
            Where do you live?
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="border bg-white p-2 "
          />
        </div>
        <p className="text-sm">
          This information is used to calculate accurate calorie goal for you.
        </p>
      </div>
    </div>
  );
};

export default StepProfile;
