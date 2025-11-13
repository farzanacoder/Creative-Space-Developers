import React from 'react'
import Image from "next/image";
import check from "../../../public/images/Icon.png";


const Content = ({reverse, h3, p, list1, list2, list3, list4, icon, Content}) => {
  return (
    <div>
      <div className={` my-[120px] flex justify-between ${reverse}`}>
          <div className="flex flex-col">
            <Image src={icon} alt="icon" />
            <h3 className="font-mono font-semibold text-[32px] leading-[120%] text-primary pt-8">
              {h3}
            </h3>
            <p className="font-mono text-base leading-[150%] text-secondary pt-4 pb-6 max-w-[636px]">
              {p}
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <Image src={check} alt="check" /> {list1}
              </li>
              <li className="flex items-center gap-3">
                <Image src={check} alt="check" /> {list2}
              </li>
              <li className="flex items-center gap-3">
                <Image src={check} alt="check" /> {list3}
              </li>
              <li className="flex items-center gap-3">
                <Image src={check} alt="check" /> {list4}
              </li>
            </ul>
          </div>
          <div className="img">
            <Image src={Content} alt="content" />
          </div>
        </div>
    </div>
  )
}

export default Content