import React from "react";
import ProjectImage from "../../components/ProjectImage";
import Img from "../../../public/ImageWithFallback (4).png";
import Img1 from "../../../public/ImageWithFallback (5).png";
import Img2 from "../../../public/ImageWithFallback (6).png";
import Img3 from "../../../public/Rectangle 1 (1).png";
import Image from "next/image";

export default function page() {
  return (
    <section>
      {/* Banner Image */}
      <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px]">
        <Image
          src={Img3}
          alt="creative"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>
        {/* Banner Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
            Our Work Speaks for Itself
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mt-3">
            A glimpse of our most recent and impactful construction projects
          </p>
        </div>
      </div>

      {/* Project Image Section */}
      <div className="mx-auto container px-4">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 my-16 lg:my-[120px]">
          <ProjectImage text="Horizon Commercial Complex" title="Chattogram" Proimg={Img2} />
          <ProjectImage text="Horizon Commercial Complex" title="Chattogram" Proimg={Img} />
          <ProjectImage text="Horizon Commercial Complex" title="Chattogram" Proimg={Img1} />
          <ProjectImage text="Horizon Commercial Complex" title="Chattogram" Proimg={Img2} />
          <ProjectImage text="Horizon Commercial Complex" title="Chattogram" Proimg={Img} />
          <ProjectImage text="Horizon Commercial Complex" title="Chattogram" Proimg={Img1} />
        </div>
      </div>
    </section>
  );
}
