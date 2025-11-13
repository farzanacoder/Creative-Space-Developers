import BuildCard from "../lib/BuildCard";
import CommonBtn from "../lib/CommonButton";
import build1 from "../../public/images/ImageWithFallback(5).png";
import build2 from "../../public/images/ImageWithFallback (1).png";
import build3 from "../../public/images/ImageWithFallback (2).png";
import build4 from "../../public/images/ImageWithFallback (3).png";
import buildicon1 from "../../public/images/Frame 1 (2).png";
import buildicon2 from "../../public/images/Frame 1 (3).png";
import buildicon3 from "../../public/images/Frame 1 (4).png";
import buildicon4 from "../../public/images/Frame 1 (5).png";
import CommonHeading from "../components/CommonHeading";

const Build = () => {
  return (
    <>
      <section>
        <div className="container">
          <CommonHeading
            title={"What We Build"}
            description={"Comprehensive construction solutions for every need"}
          />
          <div className="grid grid-cols-4 gap-6 mt-20">
            <BuildCard
              image={build1}
              buildIcon={buildicon1}
              title={"Residential Construction"}
              decripton={
                "Modern homes designed with comfort, style, and sustainability in mind."
              }
            />
            <BuildCard
              image={build2}
              buildIcon={buildicon2}
              title={"Commercial Projects"}
              decripton={
                "Business spaces that maximize efficiency and create lasting value."
              }
            />
            <BuildCard
              image={build3}
              buildIcon={buildicon3}
              title={"Residential Construction"}
              decripton={
                "Robust structures built to support demanding industrial operations."
              }
            />
            <BuildCard
              image={build4}
              buildIcon={buildicon4}
              title={"Residential Construction"}
              decripton={
                "Transforming existing spaces with innovative design solutions."
              }
            />
          </div>
          <div className="flex justify-center items-center mt-12">
            <CommonBtn
              children={"Explore All Services"}
              variant="outline"
              className="!rounded-4xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Build;