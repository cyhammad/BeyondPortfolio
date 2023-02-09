import React from "react";
import Value from "./Value";

const ValuesBanner = () => {
  return (
    <div className="py-[7vw] px-[3vw] w-full max-h-screen min-h-[60vh]">
      <div className="font-macklindisplay text-[2.5vw] mb-[2vw]">Our Values</div>
      <Value title="Excellence" subtitle="Do right by the work" number="01" />
      <Value title="Service" subtitle="Do right by our clients" number="02" />
      <Value title="Heart" subtitle="Do right by each other" number="03" borderBottom={false} />
    </div>
  );
};

export default ValuesBanner;
