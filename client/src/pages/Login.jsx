import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen w-full">
      <div className="flex flex-col min-h-[32rem] min-w-[32rem] max-w-[32rem] p-6 border border-[#dadada] justify-between items-center text-center rounded bg-white">
        <div className="flex flex-col gap-4">
          <h2>Log into your account</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border w-96 px-4 py-2 border-[#dadada] bg-white"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="border w-96 px-4 py-2 border-[#dadada] bg-white"
              />
              <span></span>
            </div>
            <div className="">
              <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4">
                Log in
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="te-400">Don't have an account?</span>
              <Link
                to={"/signup"}
                className="text-blue-500 hover:text-blue-700"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
