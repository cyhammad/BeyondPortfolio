import React from "react";
import NavbarIcon from "./svgs/NavbarIcon";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-screen px-[2vw] py-[2vw] fixed z-50">
      <h1 className="text-[1.2vw] font-syncopate">Beyond</h1>
      <NavbarIcon className="w-[0.9vw] h-fit mr-2" />
    </div>
  );
};

export default Header;
