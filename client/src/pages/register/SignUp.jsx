import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex  items-center justify-center h-full">
      <div className="flex flex-col min-h-[32rem] min-w-[32rem] max-w-[32rem] p-6 border border-[#dadada] justify-between items-center text-center rounded bg-[#efefef]">
        <div className="flex flex-col gap-4">
          <h2>Almost there! Create your account</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border w-full px-4 py-2 border-[#dadada] bg-white"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="border w-full px-4 py-2 border-[#dadada] bg-white"
              />
              <span>Password must be at least 10 characters</span>
            </div>
            <div className="">
              <Link
                to={"/signup/username"}
                className="bg-white px-4 py-2 w-full mt-6"
              >
                Continue
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
