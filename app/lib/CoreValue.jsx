import Image from 'next/image'

const CoreValue = ({ 
  iconSrc = "/images/Icon.png", 
  iconAlt = "Icon",
  title = "Sustainability", 
  description, 
  iconWidth = 24,
  iconHeight = 24
}) => {
  return (
    <div className='p-8 bg-white rounded-2xl w-full max-w-[312px]'>
        <div className='w-full max-w-12 bg-brand/20 p-2.5 rounded-xl mb-12'>
            <Image 
                src={iconSrc}
                alt={iconAlt}
                width={iconWidth}
                height={iconHeight}
            />
        </div>
        <div>
            <h3 className='font-semibold text-xl leading-7 pb-4'>{title}</h3>
            <p className='font-normal text-base leading-[150%] text-[#4A5565]'>{description}</p>
        </div>
    </div>
  )
}

export default CoreValue