import CommonButton from "../lib/CommonButton"
// import { FaArrowRight } from "react-icons/fa";
import { IoCallOutline, IoLocationSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <section className="relative w-full bg-[url('/images/rectangle-1.png')] bg-cover bg-center py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.7)] to-[rgba(46,125,50,0.5)] opacity-90"></div>

      <div className="container relative z-10 text-center mx-auto pt-8">
        <div className="inline-flex items-center gap-2.5 bg-[rgba(217,217,217,0.18)] backdrop-blur-sm px-6 py-3 rounded-4xl mb-6 justify-center mx-auto">
          <div className="w-4 h-4 bg-[rgba(217,217,217,0.28)] backdrop-blur-sm rounded-full"></div>
          <p className="text-sm font-medium text-white">
            Your Vision, Our Expertise
          </p>
        </div>

        <h1 className="text-[64px] font-bold text-white leading-[130%] mb-4">
          Building the Future, Today
        </h1>

        <p className="text-[#F3F4F6] text-xl max-w-[683px] leading-[150%] mx-auto font-normal">
          Transform your construction dreams into reality with sustainable
          practices and innovative design excellence.
        </p>
        <div className="flex justify-center items-center gap-4 mt-10 pb-60">
          <CommonButton children="Discover Our Story"  />
          <CommonButton
            children="Get Started"
            // icon={FaArrowRight}
            variant="secondary"
          />
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-[rgba(217,217,217,0.28)] backdrop-blur-sm flex items-center p-5 rounded-2xl gap-3 max-w-[370px]">
            <div className="bg-[rgba(217,217,217,0.18)] backdrop-blur-sm size-12 flex items-center justify-center rounded-full text-white text-2xl">
              <IoCallOutline />
            </div>
            <div className="text-start w-[270px]">
              <p className="text-sm font-normal text-[#D1D5DC] mb-1 leading-5">
                Contact Us
              </p>
              <p className="text-base font-semibold text-white leading-[150%]">
                +880 1234 567 890
              </p>
            </div>
          </div>
          <div className="bg-[rgba(217,217,217,0.28)] backdrop-blur-sm flex items-center p-5 rounded-2xl gap-3 max-w-[370px]">
            <div className="bg-[rgba(217,217,217,0.18)] backdrop-blur-sm size-12 flex items-center justify-center rounded-full text-white text-2xl">
              <IoLocationSharp />
            </div>
            <div className="text-start w-[270px]">
              <p className="text-sm font-normal text-[#D1D5DC] mb-1 leading-5">
                Location
              </p>
              <p className="text-base font-semibold text-white leading-[150%]">
                House#7, Road#4, Dhaka-1205
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;