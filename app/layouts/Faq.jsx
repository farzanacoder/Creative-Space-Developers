import React from "react";
import CommonHeading from "../components/CommonHeading";
import Accordion from "../components/Accordian"

const Faq = () => {
  return (
    <>
      <section className="py-30">
        <div className="container">
          <CommonHeading
            title={"Frequently Asked Questions"}
            description={
              "Everything you need to know about working with Space Developer"
            }
          />
          <div className="mt-16">
            <Accordion />
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;