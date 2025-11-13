import Image from "next/image";
import React from "react";

import galary1 from "../../../public/images/project-details/Galary1.png";
import galary2 from "../../../public/images/project-details/Galary2.png";
import galary3 from "../../../public/images/project-details/Galary.png";
import galary4 from "../../../public/images/project-details/Galary4.png";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";

const Projectgalary = () => {
  return (
    <>
      <section id="Effat Project Galary" className="mt-[120px]  bg-[#F9FAFB] px-4 py-25">

      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-3">Project Gallery</h1>
          <p className="text-sm sm:text-base text-[#4A5565] text-center mb-20">Explore the visual journey of this remarkable project</p>
        </div>

        {/* Responsive gallery: 1 column on mobile, 2 on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-sm">
            <Image src={galary1} alt="Project Image 1" fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-sm">
            <Image src={galary2} alt="Project Image 2" fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-sm">
            <Image src={galary3} alt="Project Image 3" fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-sm">
            <Image src={galary4} alt="Project Image 4" fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        <button className="flex justify-center items-center m-auto mt-15 border border-[#D1D5DC] rounded-full bg-[#dadde0] text-black px-4 py-2 text-sm">
          <Link className="flex justify-between gap-2 items-center" href="/">Load More <LuArrowRight /></Link>
        </button>
      </div>
      </section>
    </>
  );
};

export default Projectgalary;