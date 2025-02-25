import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const paths = [
    "/dashboard",
    "/exercise",
    "/calories",
    "/nutrition",
    "/exercise/create",
    "/food",
    "/settings",
  ];
  return (
    <>
      <nav
        className={`flex  items-center   w-full  ${
          paths.includes(location.pathname)
            ? "bg-white pt-1 r"
            : "bg-[#cfcfcf] fixed top-0 pt-1 left-0"
        } `}
      >
        <div className="flex flex-col h-full pt-4 w-full">
          <div className="px-30 pb-4 flex items-center justify-between w-full">
            <Link to={"/"} className="text-2xl">
              CoreFuel
            </Link>
            {isLoggedIn && (
              <div className="flex items-center gap-3 text-sm">
                <p>Hi, Osama</p>
                <Link
                  to={"/settings"}
                  className="text-blue-500 hover:text-blue-700 font-bold"
                >
                  Settings
                </Link>
                <Link className="text-blue-500 hover:text-blue-700 font-bold">
                  Logout
                </Link>
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
            )}
          </div>
          {isLoggedIn && (
            <div className="px-30  border border-transparent bg-blue-500   w-full">
              <div className="flex items-center  text-white ">
                <Link
                  className="hover:bg-white hover:text-blue-500 py-3 px-6"
                  to={"/dashboard"}
                >
                  My HOME
                </Link>

                <Link
                  className="hover:bg-white hover:text-blue-500 py-3 px-6"
                  to={"/exercise"}
                >
                  EXERCISE
                </Link>

                <Link
                  className="hover:bg-white hover:text-blue-500 py-3 px-6"
                  to={"/calories"}
                >
                  CALORIE
                </Link>

                <Link
                  className="hover:bg-white hover:text-blue-500 py-3 px-6"
                  to={"/nutrition"}
                >
                  NUTRITION
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
