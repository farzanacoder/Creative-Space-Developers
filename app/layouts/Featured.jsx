import CommonHeading from "../components/CommonHeading";
import ProjectCard from "../lib/ProjectCard";
import CommonBtn from "../lib/CommonButton";

const Featured = () => {
  return (
    <>
      <section className="shimanto-projects py-25 bg-[#F9FAFB]">
        <div className="container">
          <CommonHeading
            title={"Featured Projects"}
            description={"The principles that guide everything we do"}
          />
          <div className="grid grid-cols-3 mt-20 gap-6 mb-12">
            <ProjectCard
              image={"/images/ImageWithFallback(4).png"}
              title={"Horizon Commercial Complex"}
              location={"Chattogram"}
            />
            <ProjectCard
              image={"/images/ImageWithFallback(5).png"}
              title={"Horizon Commercial Complex"}
              location={"Chattogram"}
            />
            <ProjectCard
              image={"/images/ImageWithFallback(6).png"}
              title={"Horizon Commercial Complex"}
              location={"Chattogram"}
            />
          </div>
          <div className="flex justify-center items-center">
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

export default Featured;