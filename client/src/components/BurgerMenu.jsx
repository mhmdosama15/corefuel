import React from "react";

const BurgerMenu = ({ closeMenu, isLoggedIn }) => {
  return (
    <div className="fixed left-0 top-16 right-0 bottom-0 bg-white ">
      <div className="px-4 pt-4">
        <ul className="flex flex-col gap-4">
          <li className="text-lg font-bold">Home</li>
          <li className="text-lg font-bold">Menu</li>
          <li className="text-lg font-bold">Menu</li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
