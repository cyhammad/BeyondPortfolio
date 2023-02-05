import Image from "next/image";
import React from "react";
import BasketBallSvg from "./svgs/BasketBallSvg";
import InstagramSvg from "./svgs/InstagramSvg";
import LinkedInSvg from "./svgs/LinkedInSvg";
import MailSvg from "./svgs/MailSvg";
import PencilCircleSvg from "./svgs/PencilCircleSvg";
import RightArrowLongSvg from "./svgs/RightArrowLongSvg";
import TouchSvg from "./svgs/TouchSvg";

const Banner = () => {
  return (
    <div className="relative flex flex-col xl:flex-row justify-center xl:justify-start xl:items-center px-5 md:px-11 xl:px-[42px] w-full">
      <div className="flex flex-col font-macklindisplay">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] leading-10 xl:leading-[108px] mt-20">
          Designing future
          <br />
          with beyond
        </h1>
        <div className="relative mt-3 ml-12 sm:ml-20 md:ml-40 lg:ml-[240px] w-fit text-xl sm:text-[1.7rem] md:text-3xl lg:text-4xl">
          <PencilCircleSvg className="w-[4.5rem] sm:w-24 md:w-28 lg:w-32 absolute left-[58px] sm:left-[80px] md:left-[90px] lg:left-[106px] top-[-14px] lg:top-[-10px]" />
          <p>for the world's most </p>
        </div>
        <p className="text-xl sm:text-[1.7rem] md:text-3xl lg:text-4xl italic w-fit ml-4 sm:ml-8 md:ml-20 lg:ml-36 xl:leading-[46px]">
          ambitious brands
        </p>
        <button className="items-center space-x-3 hidden sm:flex w-fit ml-36 mt-8 md:ml-44 lg:ml-72 xl:ml-96">
          <p className="text-lg font-gthaptik font-light">VIEW OUR SERVICES</p>
          <svg
            width="36"
            height="21"
            viewBox="0 0 36 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.1199 0.631592L24.0519 2.74512L30.3425 9.03137H0.875V11.9689H30.3425L24.0534 18.2566L26.1199 20.3687L35.9855 10.5001L26.1199 0.631592Z"
              fill="#333333"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-48 sm:top-0 md:top-0 xl:top-5 flex right-1 xl:right-8">
        <Image
          src="/bannerimg.png"
          className="w-52 h-fit sm:w-80 md:w-96 lg:w-[500px] xl:w-[630px] xl:h-full"
          width={630}
          height={630}
        />
        <div className="flex flex-col-reverse xl:h-[26rem] items-center">
          <BasketBallSvg className="mt-2" />
          <MailSvg className="mt-2" />
          <InstagramSvg className="mt-2" />
          <LinkedInSvg className="mt-20 xl:mt-32" />
          <TouchSvg className="w-3 h-3 my-1" />
          <div className="-rotate-90 whitespace-nowrap w-5 h-5 text-xs text-[#9A9A9A]">
            Get in touch
          </div>
        </div>
      </div>
      <button className="flex items-center space-x-3 sm:hidden self-center mt-44">
        <p className="font-gthaptik text-sm">VIEW OUR SERVICES</p>
        <RightArrowLongSvg className="w-5" />
      </button>
    </div>
  );
};

export default Banner;

{
  /* <div className="relative ml-[240px] w-fit bg-red-200">
<svg
  width="143"
  className="absolute left-[114px] top-[-3px]"
  height="56"
  viewBox="0 0 143 56"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M118.061 10.9061C87.9675 1.93307 55.334 1.66531 25.1038 10.142C19.494 11.7159 13.8516 13.6425 9.22788 17.1755C4.60421 20.7086 1.07768 26.142 1.14298 31.9674C1.20829 37.5967 4.60421 42.8016 9.09727 46.1976C13.5903 49.5935 19.063 51.409 24.5356 52.7216C46.9748 58.129 71.1773 55.889 92.245 46.4653C113.313 37.0416 131.109 20.4865 142.028 0.156738"
    stroke="#868686"
    strokeWidth="0.653061"
    strokeMiterlimit="10"
  />
</svg>
<p className="text-[39px]">for the world's most </p>
</div>
<p className="text-[39px] italic pl-36 leading-[46px]">
ambitious brands
</p>
<button className="flex items-center space-x-3 self-center pl-36 mt-32">
<p className="text-[20px] font-gthaptik">VIEW OUR SERVICES</p>
<svg
  width="36"
  height="21"
  viewBox="0 0 36 21"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M26.1199 0.631592L24.0519 2.74512L30.3425 9.03137H0.875V11.9689H30.3425L24.0534 18.2566L26.1199 20.3687L35.9855 10.5001L26.1199 0.631592Z"
    fill="#333333"
  />
</svg>
</button> */
}
