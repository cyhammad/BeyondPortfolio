import React from "react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["vietnamese"] });
const ClientsBanner = () => {
  return (
    <div className="grid grid-cols-12 h-screen bg-[#121212] pt-[10vw]">
      <div className="col-span-4 flex flex-col">
        <p
          className={inter.className}
          style={{
            fontSize: "16vw",
            lineHeight: "12vw",
            fontWeight: "900",
            color: "#4d4d4d",
          }}
        >
          023
        </p>
        <svg
          className="self-end m-[2vw]"
          width="68"
          height="56"
          viewBox="0 0 68 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M67.0469 28C67.0469 28.5595 66.8246 29.096 66.4291 29.4916C66.0335 29.8872 65.4969 30.1094 64.9375 30.1094H8.16016L29.8516 51.836C30.0455 52.0299 30.1993 52.2601 30.3042 52.5134C30.4092 52.7668 30.4632 53.0383 30.4632 53.3125C30.4632 53.5868 30.4092 53.8583 30.3042 54.1117C30.1993 54.365 30.0455 54.5952 29.8516 54.7891C29.6577 54.983 29.4275 55.1368 29.1741 55.2418C28.9208 55.3467 28.6492 55.4007 28.375 55.4007C28.1008 55.4007 27.8292 55.3467 27.5759 55.2418C27.3225 55.1368 27.0923 54.983 26.8984 54.7891L1.58594 29.4766C1.38597 29.2862 1.22677 29.0571 1.11799 28.8033C1.00922 28.5494 0.953125 28.2762 0.953125 28C0.953125 27.7239 1.00922 27.4506 1.11799 27.1968C1.22677 26.943 1.38597 26.7139 1.58594 26.5235L26.8984 1.21098C27.29 0.819369 27.8212 0.599365 28.375 0.599365C28.9288 0.599365 29.46 0.819369 29.8516 1.21098C30.2432 1.60259 30.4632 2.13372 30.4632 2.68754C30.4632 3.24136 30.2432 3.77249 29.8516 4.1641L8.16016 25.8907H64.9375C65.4969 25.8907 66.0335 26.1129 66.4291 26.5085C66.8246 26.9041 67.0469 27.4406 67.0469 28Z"
            fill="#868686"
          />
        </svg>
      </div>
      <div className="col-start-7 col-end-12">
        <p className="font-macklindisplay italic text-[3vw] leading-[4vw] text-[#f0f0f0]">
          Awards impossible without our potential clients
        </p>
        <p className="font-gthaptik text-[#dedede] text-[1.3vw] mt-[2vw]">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
      </div>
    </div>
  );
};

export default ClientsBanner;
