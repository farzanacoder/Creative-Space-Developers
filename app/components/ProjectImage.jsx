import Image from "next/image";
import React from "react";

export default function ProjectImage({ text, title, Proimg }) {
  return (
    <div className="relative w-full sm:w-[48%] lg:w-[32%] h-[250px] sm:h-[300px] lg:h-[380px] rounded-2xl overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <Image
        src={Proimg}
        alt="projectimg"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white flex flex-col justify-end p-6">
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold">{text}</p>
        <p className="text-sm sm:text-base font-normal text-[#D1D5DC] mt-1">
          {title}
        </p>
      </div>
    </div>
  );
}
