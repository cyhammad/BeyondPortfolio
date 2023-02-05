import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 md:px-[51px] py-5">
      <h1 className="text-3xl md:text-4xl font-syncopate">Beyond</h1>
      <svg
        width="18"
        height="31"
        viewBox="0 0 18 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1"
          y1="5"
          x2="0.999999"
          y2="26"
          stroke="#0D0814"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="9"
          y1="1"
          x2="9"
          y2="30"
          stroke="#0D0814"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="17"
          y1="5"
          x2="17"
          y2="26"
          stroke="#0D0814"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Header;
