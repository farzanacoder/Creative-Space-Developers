import Image from 'next/image'
import React from 'react'

export default function ProjectImage({text , title , Proimg}) {
  return (
    <div className="relative w-[32%] h-[380px] rounded-2xl overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <Image
        src={Proimg}
        alt="projectimg"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-xl font-semibold">
        <p className='text-2xl font-semibold mt-72 ml-6'>{text}</p>
        <p className='text-base font-normal text-[#D1D5DC] ml-6 mt-2'>{title}</p>
      </div>
    </div>
  )
}
