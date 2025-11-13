import CommonBtn from "../lib/CommonButton";
import craft1 from "../../public/images/Rectangle 4.png";
import craft2 from "../../public/images/Rectangle 5.png";
import craft3 from "../../public/images/Rectangle 6.png";
import Image from "next/image";

const Discover = () => {
  return (
    <>
      <section className="py-28">
        <div className="container">
          <div className="flex items-center gap-28">
            <div className="max-w-[560px]">
              <h2 className="text-primary text-5xl font-bold leading-15">
                Crafting Sustainable Spaces for the Future
              </h2>
              <p className="pt-6 pb-12 text-lg font-normal leading-[150%] text-secondary">
                BuildTech is dedicated to delivering exceptional construction
                solutions that blend innovation, sustainability, and
                craftsmanship. Our approach combines cutting-edge techniques
                with environmentally conscious practices to create spaces that
                inspire and endure.
              </p>
              <CommonBtn
                children={"Discover Our Story"}
                variant="outline"
                className="!rounded-4xl"
              />
            </div>
            <div className="flex flex-col gap-6">
              <Image src={craft1} alt="creaft1" />
              <div className="flex items-center justify-between">
                <Image src={craft2} alt="craft2" />
                <Image src={craft3} alt="craft3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;