import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import BurgerMenu from "./BurgerMenu";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../redux/authSlice";
const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.auth.user?.username);
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  console.log(isLoggedIn);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const paths = [
    "/dashboard",
    "/exercise",
    "/calories",
    "/nutrition",
    "/exercise/create",
    "/food",
    "/settings",
    "/form-check",
    "/body-anatomy",
    "/anatomy/chest",
    "/anatomy",
  ];
  const logout = () => {
    dispatch(clearUser());
    navigate("/");
  };
  useEffect(() => {
    // handle background scrolling when burger menu is open
    if (isBurgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isBurgerMenu]);
  const openBurgerMenu = () => {
    setIsBurgerMenu(!isBurgerMenu);
  };
  const closeMenu = () => setIsBurgerMenu(false);
  return (
    <>
      <nav
        className={`flex  items-center   w-full  ${
          paths.includes(location.pathname)
            ? "bg-white pt-1 r"
            : "bg-[#cfcfcf] fixed top-0 pt-1 left-0"
        } `}
      >
        <div className="flex flex-col h-full pt-2 lg:pt-4 w-full">
          <div className="px-4 lg:px-30 pb-2 lg:pb-4 flex items-center justify-between w-full">
            <Link to={"/"} className="text-2xl">
              CoreFuel
            </Link>
            <div className="lg:hidden flex">
              <button
                onClick={openBurgerMenu}
                className="text-2xl border bg-white p-2 rounded-lg border-[#dadada]"
              >
                {isBurgerMenu ? <IoCloseSharp /> : <CiMenuBurger />}
              </button>
            </div>
            {isLoggedIn && location.pathname !== "/signup/username" && (
              <>
                <div className="hidden lg:flex items-center gap-3 text-sm">
                  <p>Hi, {username}</p>
                  <Link
                    to={"/settings"}
                    className="text-blue-500 hover:text-blue-700 font-bold"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={logout}
                    className="text-blue-500 hover:text-blue-700 font-bold"
                  >
                    Logout
                  </button>
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
              </>
            )}
            {isBurgerMenu && (
              <BurgerMenu
                closeMenu={closeMenu}
                isLoggedIn={isLoggedIn}
                logout={logout}
              />
            )}
          </div>
          {isLoggedIn && location.pathname !== "/signup/username" && (
            <div className="hidden lg:flex px-30  border border-transparent bg-blue-500   w-full">
              <div className="flex items-center  text-white ">
                <Link
                  className="hover:bg-white text-nowrap hover:text-blue-500 py-3 px-6"
                  to={"/dashboard"}
                >
                  My HOME
                </Link>

                <Link
                  className="hover:bg-white text-nowrap hover:text-blue-500 py-3 px-6"
                  to={"/exercise"}
                >
                  EXERCISE
                </Link>

                <Link
                  className="hover:bg-white text-nowrap hover:text-blue-500 py-3 px-6"
                  to={"/calories"}
                >
                  CALORIE
                </Link>

                <Link
                  className="hover:bg-white text-nowrap hover:text-blue-500 py-3 px-6"
                  to={"/nutrition"}
                >
                  NUTRITION
                </Link>

                <Link
                  className="hover:bg-white text-nowrap hover:text-blue-500 py-3 px-6"
                  to={"/form-check"}
                >
                  FORM CHECK
                </Link>
                <Link
                  className="hover:bg-white text-nowrap hover:text-blue-500 py-3 px-6"
                  to={"/body-anatomy"}
                >
                  BODY ANATOMY
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
