import React from "react";
import banner from "../../../public/images/rectangle-1.png"; 

const Banner = () => {
  return (
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
          From design to delivery, we offer complete construction services that
          meet modern standards and sustainability goals.
        </p>
      </div>
    </div>
  );
};

export default Banner;