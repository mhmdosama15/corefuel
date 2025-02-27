import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col gap-10 items-center px-6 xl:px-0 justify-center h-screen w-full">
      <div className="flex flex-col  lg:min-h-[32rem] lg:min-w-[32rem] lg:max-w-[32rem] p-6 border border-[#dadada] justify-between items-center text-center rounded bg-[#efefef]">
        <div className="flex flex-col h-full gap-4">
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
              <span className="pb-10 lg:pb-0">
                Password must be at least 10 characters
              </span>
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
