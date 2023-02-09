import React from "react";
import BasketBallSvg from "./svgs/BasketBallSvg";
import InstagramSvg from "./svgs/InstagramSvg";
import LinkedInSvg from "./svgs/LinkedInSvg";
import MailSvg from "./svgs/MailSvg";
import TouchSvg from "./svgs/TouchSvg";

const FixedRightBar = () => {
  return (
    <div className="flex flex-col-reverse py-10 justify-center items-center fixed bottom-2 h-fit right-[3vw] w-50 z-50">
      <BasketBallSvg className="mt-[3.2vw] w-[1.2vw] h-fit" />
      <MailSvg className="mt-[3.2vw] w-[1.2vw] h-fit" />
      <InstagramSvg className="mt-[3.2vw] w-[1.2vw] h-fit" />
      <LinkedInSvg className="mt-[10vw] w-[1.2vw] h-fit" />
      {/* <TouchSvg className="w-[1.5vw] h-[1.5vw] my-[0.5vw]" />
      <div className="-rotate-90 whitespace-nowrap w-5 h-fit text-lg text-[#9A9A9A]">
        Get in touch
      </div> */}
    </div>
  );
};

export default FixedRightBar;
