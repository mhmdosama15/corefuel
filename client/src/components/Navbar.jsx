import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav
        className={`flex  items-center   w-full  ${
          location.pathname === "/dashboard"
            ? "bg-white pt-1 r"
            : "bg-[#cfcfcf] fixed top-0 pt-1 left-0"
        } `}
      >
        <div className="flex flex-col h-full pt-4 w-full">
          <div className="px-30 pb-4 flex items-center justify-between w-full">
            <h2 className="text-2xl">CoreFuel</h2>
            <div className="flex items-center gap-3 text-sm">
              <p>Hi, Osama</p>
              <Link>Settings</Link>
              <Link>Logout</Link>
              <div className="flex items-center gap-1">
                <p>Follow Us:</p>
                <Link>
                  <FaInstagram className="text-xl text-[#9d1554]" />
                </Link>
                <Link>
                  <FaFacebookSquare className="text-xl text-blue-500" />
                </Link>
              </div>
            </div>
          </div>
          <div className="px-30  border border-transparent bg-blue-500 p-2  w-full">
            <ul className="flex items-center gap-10 text-white py-2">
              <li>
                <Link>My HOME</Link>
              </li>
              <li>
                <Link>EXERCISE</Link>
              </li>
              <li>
                <Link>CALORIE</Link>
              </li>
              <li>
                <Link>NUTRITION</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
