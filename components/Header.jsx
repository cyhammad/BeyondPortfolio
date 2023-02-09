import React from "react";
import NavbarIcon from "./svgs/NavbarIcon";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-screen px-[3vw] py-[2vw] fixed z-50">
      <h1 className="text-[2.5vw] font-syncopate">Beyond</h1>
      <NavbarIcon className="w-[1.2vw] h-fit mr-2" />
    </div>
  );
};

export default Header;
