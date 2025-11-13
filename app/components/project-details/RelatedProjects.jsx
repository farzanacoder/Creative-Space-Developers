import React from 'react'
import Image from "next/image";

import last1 from "../../../public/images/project-details/11.png";
import last2 from "../../../public/images/project-details/22.png";
import last3 from "../../../public/images/project-details/33.png";


const RelatedProjects = () => {
  return (
<section id='Effat Opurbo ' className='bg-[#e7e8eb]  py-25 '>
    <div className="container mx-auto ">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-3">Related Projects</h1>
        <p className="text-sm sm:text-base text-[#4A5565] text-center mb-6">Discover more projects in the residential category</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[380px] rounded overflow-hidden shadow-sm">
          <Image src={last1} alt="Related Project 1" fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
        </div>

        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[380px] rounded overflow-hidden shadow-sm">
          <Image src={last2} alt="Related Project 2" fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
        </div>

        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[380px] rounded overflow-hidden shadow-sm">
          <Image src={last3} alt="Related Project 3" fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </div>

</section>

  )
}

export default RelatedProjects