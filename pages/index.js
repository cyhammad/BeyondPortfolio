import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Banner from "@/components/banners/Banner";
import FixedRightBar from "@/components/FixedRightBar";
import CircleArrowDownSvg from "@/components/svgs/CircleArrowDownSvg";
import ProjectSlider from "@/components/ProjectSlider";
import ServicesBanner from "@/components/banners/ServicesBanner";
import ClientsBanner from "@/components/banners/ClientsBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Beyond | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center overflow-auto scrollbar scroll-smooth">
        <div className="w-full h-screen">
          <Header />
          <Banner />
          <FixedRightBar />
          <div className="px-[3vw] grid grid-cols-2 my-[18vh]">
            <p className="text-[1.5vw] font-gthaptik mt-[2vh]">
              We are equal parts digital agency and venture firm.
            </p>
            <div className="text-[3.2vw] w-[90%] leading-[4vw] font-macklindisplay">
              We elevate game-changing brands for growth by translating their
              future potential into a{" "}
              <span className="italic underline text-[#454544]">
                strategic brand narrative
              </span>{" "}
              and authentic digital presence.
            </div>
          </div>
          <video
            src="//videos.ctfassets.net/u275ja1nivmq/572Hkt6dx6qhfCBNGiEka0/13c89665b962c6273549872b53019b2a/YML_Showreel2021_WebsiteLoop_12sec_R01.03__1_.mp4#t=0.1"
            playsInline={true}
            loop={true}
            autoPlay={true}
            muted={true}
            className="px-[3vw]"
          ></video>
          <div className="grid grid-cols-12 text-[3.2vw] leading-[3.7vw] mx-[3vw] py-[8vw]">
            <p className="font-macklindisplay col-span-6">
              We guide game-changing tech & <br /> web3 brands,{" "}
              <span className="underline italic text-[#454544]">
                across platforms & places.
              </span>
            </p>
            <div className="col-start-11 col-end-13 flex justify-end self-end mr-[2vw]">
              <CircleArrowDownSvg className="w-[8vw] h-fit" />
            </div>
          </div>
          <ProjectSlider />
          <ServicesBanner />
          <ClientsBanner />
        </div>
      </div>
    </>
  );
}
