import React from 'react'

export default function Button({btn , className}) {
  return (
    <div className='w-[129px] h-9 flex justify-between items-center bg-[#2E7D32] text-[#FFFFFF]'>
        <button type="button" className={`${className} py-2 px-6`}>
        {btn}
    </button>
    </div>
  )
}
