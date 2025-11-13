import React from "react";
import banner from "../../../public/images/rectangle-1.png";
import Image from "next/image";
import Content from "../../components/Services/Content";
import home from "../../../public/images/Frame 1 (2).png";
import building from "../../../public/images/Frame 1 (3).png";
import renovation from "../../../public/images/ImageWithFallback (3).png";
import design from "../../../public/images/ImageWithFallback (10).png";
import commercial from "../../../public/images/ImageWithFallback (1).png";
import industrial from "../../../public/images/ImageWithFallback(6).png";
import buildicon from "../../../public/images/Frame 1 (2).png"
import mill from "../../../public/images/Frame 1 (4).png"
import wrench from "../../../public/images/Frame 1 (5).png";
import pen from "../../../public/images/Frame 1 (6).png"


const Page = () => {
  return (
    <section>
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: `
          linear-gradient(
            180deg,
            rgba(0,0,0,0.7) 0%,
            rgba(0,0,0,0.6) 50%,
            rgba(46,125,50,0.4) 100%
          ),
          url(${banner.src})
        `,
        }}
      >
        <div className="container py-44 flex items-center justify-center flex-col">
          <h1 className="font-mono font-bold text-5xl text-white leading-15 pb-3">
            Our Expertise, Your Vision
          </h1>
          <p className="font-mono text-lg leading-[150%] text-white text-center max-w-[615px]">
            From design to delivery, we offer complete construction services
            that meet modern standards and sustainability goals.
          </p>
        </div>
      </div>
      <div className="container">
        <Content 
        icon={home}
        h3={"Residential Construction"}
        p={"We create modern homes that prioritize comfort, safety, and sustainability. From single-family homes to multi-unit developments, our residential projects are built to exceed expectations and stand the test of time."}
        list1={"Custom Home Design"}
        list2={"Luxury Apartments"}
        list3={"Housing Complexes"}
        list4={"Green Building Solutions"}
        Content={building}
        />
        <Content reverse={"flex-row-reverse"} 
        icon={buildicon}
        h3={"Commercial Projects"}
        p={"Business spaces designed for efficiency and long-term value. We understand that commercial buildings need to balance functionality, aesthetics, and cost-effectiveness to support your business goals."}
        list1={"Office Buildings"}
        list2={"Retail Spaces"}
        list3={"Shopping Centers"}
        list4={"Corporate Headquarters"}
        Content={commercial}
        />
        <Content
        icon={mill}
        h3={"Industrial Development"}
        p={"Heavy-duty, performance-driven structures for industry leaders. Our industrial projects are engineered to handle demanding operations while maintaining safety and environmental standards."}
        list1={"Custom Home Design"}
        list2={"Luxury Apartments"}
        list3={"Housing Complexes"}
        list4={"Green Building Solutions"}
        Content={industrial}
        />
        <Content reverse={"flex-row-reverse"} 
        icon={wrench}
        h3={"Renovation & Remodeling"}
        p={"Transforming existing spaces with new life and function. Whether updating outdated structures or reimagining spaces for new purposes, we bring fresh vision to every renovation project."}
        list1={"Interior Renovations"}
        list2={"Building Upgrades"}
        list3={"Space Optimization"}
        list4={"Historic Restoration"}
        Content={renovation}
        />
        <Content 
        icon={pen}
        h3={"Design & Build"}
        p={"One-stop solution for planning, engineering, and construction. Our integrated approach streamlines the process, reduces costs, and ensures seamless coordination from concept to completion."}
        list1={"Architectural Design"}
        list2={"Engineering Services"}
        list3={"Project Management"}
        list4={"Turnkey Solutions"}
        Content={design}
        />
      </div>
    </section>
  );
};

export default Page;
