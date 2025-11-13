import React from "react";
import CoreValue from "../../lib/CoreValue";

const Values = () => {
  return (
    <>
      <section className="py-25 bg-[#f9fafb] px-4 lg:px-0">
        <div className="container">
          <div className="heading text-center">
            <h2 className="text-xl md:text-3xl lg:text-5xl text-black font-bold">
              Our Core Values
            </h2>
            <p className="text-sm md:text-base lg:text-[18px] text-secondary font-normal pt-3">
              The principles that guide everything we do
            </p>
          </div>

          <div className="cards flex flex-wrap justify-center gap-6 mt-20">
            <CoreValue
              iconSrc="/images/leaf.png"
              iconAlt={"Sustainability"}
              title="Sustainability"
              description={"Eco-friendly practices for a better tomorrow"}
            />

            <CoreValue
              iconSrc="/images/clock.png"
              iconAlt={"Timely Delivery"}
              title="Timely Delivery"
              description={"Meeting deadlines without compromise"}
            />

            <CoreValue
              iconSrc="/images/quality.png"
              iconAlt={"Quality Assurance"}
              title="Quality Assurance"
              description={"Excellence in every detail"}
            />

            <CoreValue
              iconSrc="/images/expert.png"
              iconAlt={"Expert Team"}
              title="Expert Team"
              description={"Skilled professionals at your service"}
            />

            <CoreValue
              iconSrc="/images/innovation.png"
              iconAlt={"Innovation"}
              title="Innovation"
              description={
                "Embracing new technologies and construction methods."
              }
            />

            <CoreValue
              iconSrc="/images/safety.png"
              iconAlt={"Safety"}
              title="Safety"
              description={
                "Prioritizing the well-being of our team and communities."
              }
            />

            <CoreValue
              iconSrc="/images/collaboration.png"
              iconAlt={"Collaboration"}
              title="Collaboration"
              description={
                "Eco-Working together with clients and partners for success. practices for a better tomorrow"
              }
            />

            <CoreValue
              iconSrc="/images/integrity.png"
              iconAlt={"Integrity"}
              title="Integrity"
              description={
                "Eco-friendly practices for a Operating with honesty and transparency in every project. tomorrow"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;