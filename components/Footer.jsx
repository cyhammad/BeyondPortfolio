import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="px-[3vw] bg-[#121212] text-white pt-[6vw] pb-[3vw]">
      <div className="font-macklindisplay text-[3vw]">
        Had a project in mind?
      </div>
      <div className="font-macklindisplay italic border-b-2 border-white text-[2.5vw] leading-[2vw] w-fit mb-[2vw]">
        Lets's Work
      </div>
      <div className="flex mt-[4vw] items-center space-x-[1.8vw]">
        <Image
          src="/shaheer.png"
          className="w-[5vw] h-[5vw] rounded-full"
          width={300}
          height={300}
        />
        <div className="font-gthaptik text-[#EAEAEA] text-[1.3vw] leading-[1vw]">
          Shaheer Ahmed, CEO
        </div>
      </div>
      <div className="flex w-full justify-end pr-[3vw] border-b border-[#4B4B4B]">
        <button className="px-[2vw] py-[1vw] font-gthaptik bg-white text-black text-[1vw] rounded-full mb-[3vw]">
          See Our Work
        </button>
      </div>
      <div className="grid grid-cols-10 gap-[3vw] mt-[5vw]">
        <div className="flex flex-col space-y-[1.5vw] col-span-3">
          <div className="text-[#A7A7A7] font-macklindisplay text-[1.5vw]">
            Collaboration
          </div>
          <div className="font-gthaptik underline text-[#eaeaea] text-[1.5vw] cursor-pointer">
            info@beyond.com
          </div>
        </div>
        <div className="flex flex-col space-y-[1.5vw] col-span-3">
          <div className="text-[#A7A7A7] font-macklindisplay text-[1.5vw]">
            Contact
          </div>
          <div className="font-gthaptik text-[#eaeaea] text-[1.5vw] leading-[2.8vw]">
            434 PRIMOS AVE <br /> PHILADELPHIA, <br /> PA 19032
          </div>
        </div>
        <div className="flex flex-col space-y-[1.5vw] col-span-3">
          <div className="text-[#A7A7A7] font-macklindisplay text-[1.5vw]">
            Works
          </div>
          <div className="font-gthaptik text-[#eaeaea] text-[1.5vw] leading-[2.8vw] cursor-pointer flex flex-col items-start">
            <button>Strategy</button>
            <button>Branding</button>
            <button>UI / UX</button>
            <button>Development</button>
            <button>Content</button>
          </div>
        </div>
        <div className="flex flex-col space-y-[1.5vw]">
          <div className="text-[#A7A7A7] font-macklindisplay text-[1.5vw]">
            Top
          </div>
          <div className="font-gthaptik text-[#eaeaea] text-[1.5vw] leading-[2.8vw]">
            Move
          </div>
        </div>
      </div>
      <div className="text-white font-syncopate text-[2.3vw] mt-[2vw] pb-[2.5vw] border-b border-[#4B4B4B]">
        Beyond
      </div>
      <div className="flex justify-between font-gthaptik text-[#C8C8C8] mt-[1.5vw] mx-[1vw]">
        <div>
          <button className="pr-[2vw]">About</button>
          <button className="pr-[2vw]">Services</button>
          <button className="pr-[2vw]">Work</button>
          <button className="pr-[2vw]">Contact</button>
        </div>
        <div className="text-[#8D8B97]">
          <button className="pr-[2vw]">LinkedIn</button>
          <button className="pr-[2vw]">Instagram</button>
          <button className="pr-[2vw]">Twitter</button>
          <button>Medium</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
