import React from "react";
import { Link } from "react-router-dom";

const BurgerMenu = ({ closeMenu, isLoggedIn }) => {
  return (
    <div className="fixed left-0 top-16 right-0 bottom-0 bg-white ">
      {isLoggedIn ? (
        <div className="px-4 pt-4 h-full flex flex-col w-full justify-between">
          <ul className="flex flex-col w-full gap-4">
            <li className="text-lg ">
              <Link
                onClick={closeMenu}
                to="/dashboard"
                className="border px-4 py-1 rounded-lg border-[#dadada] bg-blue-500  text-white w-full"
              >
                Home
              </Link>
            </li>
            <li className="text-lg ">
              <Link
                onClick={closeMenu}
                to="/exercise"
                className="border px-4 py-1 rounded-lg border-[#dadada] bg-blue-500  text-white w-full"
              >
                Exercise
              </Link>
            </li>
            <li className="text-lg ">
              <Link
                onClick={closeMenu}
                to="/calories"
                className="border px-4 py-1 rounded-lg border-[#dadada] bg-blue-500  text-white w-full"
              >
                Calorie
              </Link>
            </li>
            <li className="text-lg ">
              <Link
                onClick={closeMenu}
                to="/nutrition"
                className="border px-4 py-1 rounded-lg border-[#dadada] bg-blue-500  text-white w-full"
              >
                Nutrition
              </Link>
            </li>
            <li className="text-lg ">
              <Link
                onClick={closeMenu}
                to="/form-check"
                className="border px-4 py-1 rounded-lg border-[#dadada] bg-blue-500  text-white w-full"
              >
                Form Check
              </Link>
            </li>
            <li className="text-lg ">
              <Link
                onClick={closeMenu}
                to="/body-anatomy"
                className="border px-4 py-1 rounded-lg border-[#dadada] bg-blue-500  text-white w-full"
              >
                Body Anatomy
              </Link>
            </li>
          </ul>
          <div className="mb-10">
            <button className="border text-lg px-4 py-1 rounded-lg border-[#dadada] bg-red-500  text-white ">
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col pt-4 px-4">
          <div className="flex flex-col gap-3">
            <Link to={"/lpgin"} className="text-lg">
              Login
            </Link>
            <Link to={"/signup"} className="text-lg">
              Sign up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
