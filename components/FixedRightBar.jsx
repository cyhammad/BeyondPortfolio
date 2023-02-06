import React from "react";
import BasketBallSvg from "./svgs/BasketBallSvg";
import InstagramSvg from "./svgs/InstagramSvg";
import LinkedInSvg from "./svgs/LinkedInSvg";
import MailSvg from "./svgs/MailSvg";
import TouchSvg from "./svgs/TouchSvg";

const FixedRightBar = () => {
  return (
    <div className="flex flex-col-reverse h-screen py-10 justify-center items-center fixed top-0 right-[2.7vw] w-50 z-50">
      <BasketBallSvg className="mt-[1vh] w-4 h-fit" />
      <MailSvg className="mt-[1vh] w-4 h-fit" />
      <InstagramSvg className="mt-[1vh] w-4 h-fit" />
      <LinkedInSvg className="mt-[20vh] w-4 h-fit" />
      <TouchSvg className="w-4 h-4 my-[1vh]" />
      <div className="-rotate-90 whitespace-nowrap w-5 h-5 text-sm text-[#9A9A9A]">
        Get in touch
      </div>
    </div>
  );
};

export default FixedRightBar;
