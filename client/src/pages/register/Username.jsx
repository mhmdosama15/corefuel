import React from "react";
import { Link } from "react-router-dom";

const Username = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center px-6 xl:px-0  h-screen w-full">
      <div className="flex flex-col lg:min-h-[32rem] lg:min-w-[32rem] lg:max-w-[32rem] p-6 border border-[#dadada] justify-between items-center text-center rounded bg-[#efefef]">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Create a username?</h2>
          <p className="text-sm">One gymrat added to the family</p>
          <input
            id="name"
            className="bg-white rounded w-72 mt-6 px-4 py-2"
            placeholder="Enter username"
          />
        </div>
        <div className="flex items-center gap-6 mt-6">
          <Link
            to={""}
            className="border border-[#dadada] bg-white text-black px-4 py-2"
          >
            Back
          </Link>
          <Link
            to={"/dashboard"}
            className="border border-[#dadada] bg-white text-black px-4 py-2"
          >
            Finish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Username;
