import CommonBtn from "../lib/CommonButton";
import CoreValue from "../lib/CoreValue";
import CommonHeading from "../components/CommonHeading";

const Guide = () => {
  return (
    <>
      <section className="corevalue bg-[#F9FAFB] py-25 w-full">
        <div className="container">
          <CommonHeading
            title={" Our Core Values"}
            description={"The principles that guide everything we do"}
          />
          <div className="grid grid-cols-4 gap-6 mt-20">
            <CoreValue
              iconSrc="/images/icon1.png"
              title="Sustainability"
              description={"Eco-friendly practices for a better tomorrow"}
            />
            <CoreValue
              iconSrc="/images/icon2.png"
              title="Timely Delivery"
              description={"Meeting deadlines without compromise"}
            />
            <CoreValue
              iconSrc="/images/icon3.png"
              title="Quality Assurance"
              description={"Excellence in every detail"}
            />
            <CoreValue
              iconSrc="/images/icon4.png"
              title="Expert Team"
              description={"Skilled professionals at your service"}
            />
          </div>
          <div className="flex justify-center mt-12">
            <CommonBtn
              children={"Explore More"}
              variant="outline"
              className="!rounded-4xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Guide;