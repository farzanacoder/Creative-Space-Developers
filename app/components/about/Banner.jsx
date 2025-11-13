import React from "react";

const Banner = () => {
  return (
    <section
      id="shanto"
      className="relative w-full bg-[url('/images/aboutBg.png')] bg-cover bg-center pt-30 md:pt-40 lg:pt-[208px] pb-[48px] px-4 lg: px-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000ad] via-[#0000007c] to-[#2e7d326c] opacity-90"></div>

      <div className="flex flex-col items-center text-center relative z-10">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold max-w-[752px] mb-3">
          We Build More Than Structures We Build Trust
        </h1>
        <p className="text-sm md:text-base lg:text-[18px] text-white font-normal max-w-[752px]">
          BuildTech was founded with a mission to create modern, sustainable
          construction solutions. From residential homes to large-scale
          industrial projects, we've consistently delivered with quality,
          safety, and integrity.
        </p>
      </div>
    </section>
  );
};

export default Banner;