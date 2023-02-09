import Image from "next/image";
import React from "react";
import PencilCircleSvg from "../svgs/PencilCircleSvg";
import RightArrowLongSvg from "../svgs/RightArrowLongSvg";
import TouchSvg from "../svgs/TouchSvg";

const Banner = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center px-[3vw] w-full h-fit xl:h-screen relative border-b">
      <div className="flex w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] h-fit xl:h-screen relative">
        <div className="flex flex-col justify-center font-macklindisplay">
          <h1 className="text-[8vw] leading-[7.8vw]">
            Designing future
            <br />
            with beyond
          </h1>
          <div className="relative ml-[16vw] w-fit text-[2.9vw]">
            <PencilCircleSvg className="absolute right-[5vw] w-[10.6vw] h-fit" />
            <p>for the world's most </p>
          </div>
          <p className="text-[2.9vw] mt-[0.5vw] italic w-fit ml-[8vw] xl:leading-[2vw]">
            ambitious brands
          </p>
          <button className="items-center space-x-[1vw] flex w-fit ml-[24vw] mt-[7vh]">
            <p className="text-[1.5vw] font-gthaptik font-light">
              VIEW OUR SERVICES
            </p>
            <RightArrowLongSvg className="w-[2vw] h-fit" />
          </button>
        </div>
      </div>
      <div className="absolute right-[0vw] h-full flex items-center justify-center w-[50%]">
        <Image
          src="/bannerimg.png"
          className="w-full h-fit"
          width={630}
          height={630}
        />
      </div>
    </div>
  );
};

export default Banner;
