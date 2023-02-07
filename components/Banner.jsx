import Image from "next/image";
import React from "react";
import PencilCircleSvg from "./svgs/PencilCircleSvg";
import RightArrowLongSvg from "./svgs/RightArrowLongSvg";
import TouchSvg from "./svgs/TouchSvg";

const Banner = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center pl-[10.5vw] pr-[0vw] w-full h-screen relative border-b border-[#797979]">
      <div className="flex w-full relative">
        <div className="flex flex-col justify-center font-macklindisplay">
          <h1 className="text-[6.5vw] leading-[6.5vw]">
            Designing future
            <br />
            with beyond
          </h1>
          <div className="relative mt-[1vh] ml-[16vw] w-fit text-[2.9vw]">
            <PencilCircleSvg className="absolute right-[5vw] w-[10.6vw] h-fit" />
            <p>for the world's most </p>
          </div>
          <p className="text-[2.9vw] italic w-fit ml-[8vw] xl:leading-[2vw]">
            ambitious brands
          </p>
          <button className="items-center space-x-[1vw] hidden sm:flex w-fit ml-[24vw] mt-[8vh]">
            <p className="text-[1.5vw] font-gthaptik font-light">
              VIEW OUR SERVICES
            </p>
            <RightArrowLongSvg className="w-[2vw] h-fit" />
          </button>
        </div>
        <div className="absolute right-[0vw] top-[9vh]">
          <Image
            src="/bannerimg.png"
            className="w-[45vw] h-fit"
            width={630}
            height={630}
          />
        </div>
      </div>
      <button className="flex items-center space-x-[2vw] sm:hidden self-center mt-44">
        <p className="font-gthaptik text-sm">VIEW OUR SERVICES</p>
        <RightArrowLongSvg className="w-[1vw]" />
      </button>
    </div>
  );
};

export default Banner;
