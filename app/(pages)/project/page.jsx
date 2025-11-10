import React from 'react';
import ProjectImage from '../../components/ProjectImage';
import Img from '../../../public/ImageWithFallback (1).png';
import Img1 from '../../../public/ImageWithFallback (2).png';
import Img2 from '../../../public/ImageWithFallback (3).png';
import Img3 from '../../../public/Rectangle 1.png';
import Image from 'next/image';

export default function page() {
  return (
    <section>
      {/* banner img */}
      <div className="relative w-full h-[400px]">
        <Image
          src={Img3}
          alt="creative"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* optional banner text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold">Our Work Speaks for Itself</h1>
          <p className='text-lg mt-3.5'>A glimpse of our most recent and impactful construction projects</p>
        </div>
      </div>

      {/* project image part */}
      <div className="mx-auto w-[90%]">
        <div className="flex flex-wrap gap-6 my-[120px]">
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
