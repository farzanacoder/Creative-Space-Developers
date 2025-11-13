import React from 'react'
import Form from '../../components/contact/Form'
import clock from "../../../public/images/HomePage.png"
import clock1 from "../../../public/images/HomePage (1).png"
import clock2 from "../../../public/images/HomePage (2).png"
import Image from 'next/image'

const Contactcontent = () => {
  return (
    <div className='flex px-75 gap-34 mb-30' >
      <div className= 'w-full w-max-[648px] mt-32 '>
        <Form />
      </div>
        <div className='w-full w-max-[536px] mt-48'>
         <h3 className='font-semibold text-[32px] text-[#09231E] leading-[120%] pb-6'>Get in Touch</h3>
         <p className='font-normal text-lg leading-[150%] text-[#4A5565]'>Have questions about our services or want to discuss a project? We&apos;re here to help. Contact us through any of the methods below and our team will respond as soon as possible.</p>
         <div className='mt-15.5 flex flex-col gap-6'>
          {/* row 1 */}
          <div className='p-6 bg-white shadow-sm rounded-2xl w-full max-w-[536px]'>
            <div className='flex gap-3'>
              <div className=' h-12 w-12 bg-[#2E7D32]/20 rounded-full flex items-center justify-center'>
                <Image src={clock} height={24} width={24} alt='icon'/>
              </div>
              <div>
                <p className='font-semibold text-lg leading-[150%] text-[#09231E]'>Business Hours</p>
                <p className='font-normal text-sm leading-[150%] text-[#4A5565]'>Mon-Sat, 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
          {/* row 2 */}
           <div className='p-6 bg-white shadow-sm rounded-2xl w-full max-w-[536px]'>
            <div className='flex gap-3'>
              <div className=' h-12 w-12 bg-[#2E7D32]/20 rounded-full flex items-center justify-center'>
                <Image src={clock} height={24} width={24} alt='icon'/>
              </div>
              <div>
                <p className='font-semibold text-lg leading-[150%] text-[#09231E]'>Email</p>
                <p className='font-normal text-sm leading-[150%] text-[#4A5565]'>info@spacedevelopment.com</p>
              </div>
            </div>
          </div>
          {/* row 3 */}
           <div className='p-6 bg-white shadow-sm rounded-2xl w-full max-w-[536px]'>
            <div className='flex gap-3'>
              <div className=' h-12 w-12 bg-[#2E7D32]/20 rounded-full flex items-center justify-center'>
                <Image src={clock} height={24} width={24} alt='icon'/>
              </div>
              <div>
                <p className='font-semibold text-lg leading-[150%] text-[#09231E]'>Contact Us</p>
                <p className='font-normal text-sm leading-[150%] text-[#4A5565]'>+880 1234 567 890</p>
              </div>
            </div>
          </div>
          {/* row 4 */}
           <div className='p-5 bg-white shadow-sm rounded-2xl w-full max-w-[536px]'>
            <div className='flex gap-3'>
              <div className='h-12 w-12 bg-[#2E7D32]/20 rounded-full flex items-center justify-center'>
                <Image src={clock} height={24} width={24} alt='icon'/>
              </div>
              <div>
                <p className='font-semibold text-lg leading-[150%] text-[#09231E]'>Location</p>
                <p className='font-normal text-sm leading-[150%] text-[#4A5565] '>Momtaz Plaza (4th floor), House#7, Road#4 , <br /> Opposite of Labaid Hospital Dhaka, 1205</p>
              </div>
            </div>
          </div>
         </div>
         <p className='mt-12 font-semibold text-xl leading-7 text-[#212121] pb-4'>Connect With Us</p>

         <div>
          <div className='flex gap-4'>
            <div className=' h-12 w-12 bg-[#2E7D32]/20 rounded-full flex items-center justify-center'>
                <Image src={clock} height={24} width={24} alt='icon'/>
              </div>
              <div className=' h-12 w-12 bg-[#2E7D32]/20 rounded-full flex items-center justify-center'>
                <Image src={clock} height={24} width={24} alt='icon'/>
              </div>
              <div className=' h-12 w-12 bg-[#2E7D32]/20 rounded-full flex items-center justify-center'>
                <Image src={clock} height={24} width={24} alt='icon'/>
              </div>
              <div className=' h-12 w-12 bg-[#2E7D32]/20 rounded-full flex items-center justify-center'>
                <Image src={clock} height={24} width={24} alt='icon'/>
              </div>
          </div>
         </div>
        </div>
    </div>
  )
}

export default Contactcontent