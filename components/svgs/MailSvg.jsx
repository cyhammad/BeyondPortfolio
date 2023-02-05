import React from "react";

const MailSvg = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 3.90259L8 6.4432L11.5 3.90259"
        stroke="#9A9A9A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 9.70799V2.45133C1 2.06641 1.1475 1.69726 1.41005 1.42508C1.6726 1.15291 2.0287 1 2.4 1H13.6C13.9713 1 14.3274 1.15291 14.5899 1.42508C14.8525 1.69726 15 2.06641 15 2.45133V9.70799C15 10.0929 14.8525 10.4621 14.5899 10.7342C14.3274 11.0064 13.9713 11.1593 13.6 11.1593H2.4C2.0287 11.1593 1.6726 11.0064 1.41005 10.7342C1.1475 10.4621 1 10.0929 1 9.70799Z"
        stroke="#9A9A9A"
      />
    </svg>
  );
};

export default MailSvg;
