import React from "react";
import PencilCircleSvg from "@/components/svgs/PencilCircleSvg";

const ServicesBanner = () => {
  return (
    <div>
      <div className="grid grid-cols-12  mt-[9vw] px-[3vw]">
        <div className="col-span-7 flex flex-col justify-center font-macklindisplay ml-[5vw]">
          <h1 className="text-[7vw] leading-[5vw]">Sevices</h1>
          <div className="relative w-fit text-[2vw] ml-[0.5vw]">
            <PencilCircleSvg className="absolute right-[3.8vw] w-[7vw] h-fit" />
            <p>for the world's most </p>
          </div>
        </div>
        <div className="col-span-5 font-gthaptik mt-[0.5vw] text-[1.2vw]">
          In publishing and graphic design, Lorem ipsum is a <br /> placeholder
          text commonly used to demonstrate the <br /> visual form of a document
          or a typeface
        </div>
        <div className="my-[20vh] col-start-5 col-end-12">
            <button className="flex justify-between py-[1.5vw] w-full border-b-[3px] border-[#707070]">
                <div className="font-gthaptik text-[2vw]">
                    WEB DEVELOPMENT
                </div>
                <div className="font-macklindisplay text-[2vw] mr-[0.5vw]">
                    01
                </div>
            </button>
            <button className="flex justify-between py-[1.5vw] mt-[1vw] w-full border-b-[3px] border-[#707070]">
                <div className="font-gthaptik text-[2vw]">
                    MOBILE APP DEVELOPMENT
                </div>
                <div className="font-macklindisplay text-[2vw] mr-[0.5vw]">
                    02
                </div>
            </button>
            <button className="flex justify-between py-[1.5vw] mt-[1vw] w-full border-b-[3px] border-[#707070]">
                <div className="font-gthaptik text-[2vw]">
                    UI UX DESIGN
                </div>
                <div className="font-macklindisplay text-[2vw] mr-[0.5vw]">
                    03
                </div>
            </button>
            <button className="flex justify-between py-[1.5vw] mt-[1vw] w-full border-b-[3px] border-[#707070]">
                <div className="font-gthaptik text-[2vw]">
                    GRAPHICS DESIGN
                </div>
                <div className="font-macklindisplay text-[2vw] mr-[0.5vw]">
                    04
                </div>
            </button>
            <button className="flex justify-between py-[1.5vw] mt-[1vw] w-full border-b-[3px] border-[#707070]">
                <div className="font-gthaptik text-[2vw]">
                    CONTENT WRITING
                </div>
                <div className="font-macklindisplay text-[2vw] mr-[0.5vw]">
                    05
                </div>
            </button>
            <button className="flex justify-between py-[1.5vw] mt-[1vw] w-full border-b-[3px] border-[#707070]">
                <div className="font-gthaptik text-[2vw]">
                    BRAND IDENTITY
                </div>
                <div className="font-macklindisplay text-[2vw] mr-[0.5vw]">
                    06
                </div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
