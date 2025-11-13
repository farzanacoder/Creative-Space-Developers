import React from "react";
import Image from "next/image";
import mission from "../../../public/images/Frame 1 (1).png";
import vision from "../../../public/images/Frame 1.png";

const Mission = () => {
  return (
    <>
      <div className="main container flex flex-wrap gap-6 items-center justify-center py-30 px-4 lg:px-0">
        <div className="c1 bg-[#F9FAFB] p-8 rounded-2xl w-full max-w-[648px] h-[266px]">
          <div className="w-10 md:w-13 h-10 md:h-13 bg-brand/20 p-2.5 rounded-xl mb-6 md:mb-12">
            <Image src={mission} width={32} height={32} />
          </div>
          <div>
            <h3 className="font-semibold text-base md:text-xl leading-7 pb-4">
              Our Mission
            </h3>
            <p className="font-normal text-sm md:text-base leading-[150%] text-[#4A5565]">
              To deliver innovative, cost-effective, and eco-friendly
              construction solutions that empower communities and create lasting
              value for our clients.
            </p>
          </div>
        </div>

        <div className="c2 bg-[#F9FAFB] p-8 rounded-2xl w-full max-w-[648px] h-[266px]">
          <div className="w-10 md:w-13 h-10 md:h-13 bg-brand/20 p-2.5 rounded-xl mb-6 md:mb-12">
            <Image src={vision} width={32} height={32} />
          </div>
          <div>
            <h3 className="font-semibold text-base md:text-xl leading-7 pb-4">
              Our Vision
            </h3>
            <p className="font-normal text-sm md:text-base leading-[150%] text-[#4A5565]">
              To deliver innovative, cost-effective, and eco-friendly
              construction solutions that empower communities and create lasting
              value for our clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;