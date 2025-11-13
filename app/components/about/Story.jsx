import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <>
      <section className="py-30 px-4 lg:px-0">
        <div className="container flex flex-wrap items-center justify-center gap-10 lg:gap-30">
          <div className="text flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-[#09231E] font-bold">Our Story</h2>
            <p className="text-sm md:text-base lg:text-[18px] text-secondary font-normal max-w-[561px]">
              Founded in 2010, BuildTech emerged from a simple vision: to
              transform the construction industry through sustainable practices
              and innovative solutions. What started as a small team of
              passionate engineers has grown into one of the region's most
              trusted construction firms.
            </p>
            <p className="text-sm md:text-base lg:text-[18px] text-secondary font-normal max-w-[561px]">
              Over the years, we've completed more than 120 projects ranging
              from residential complexes to large-scale industrial facilities.
              Each project has reinforced our commitment to quality, safety, and
              environmental responsibility.
            </p>
          </div>
          <div className="img">
            <Image src="/images/Rectangle-7.png" width={548} height={484}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;