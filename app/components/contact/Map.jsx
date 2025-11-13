import React from "react";

const Map = () => {
  return (
    <div>
        <div className="pt-24 bg-[#F9FAFB] px-6 pb-25">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h3 className="font-bold text-5xl leading-[1.3] text-[#09231E] pb-3">
          Visit Our Office
        </h3>
        <p className="font-normal text-lg leading-[150%] text-[#4A5565]">
          Stop by for a consultation or project discussion
        </p>
      </div>

      {/* Google Map */}
      <div className="flex justify-center mx-auto w-full  h-full max-h-[400px]">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.903753663388!2d90.38895067595252!3d23.750867989228954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b895b1430ef9%3A0x4db4b8fda7a1bce1!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1689251128301!5m2!1sen!2sbd"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg  border-[#D1D5DB] max-w-[1320px] w-full shadow-md"
        ></iframe>
      </div>
    </div>
    <div className="bg-brand py-16">
      <h4 className="text-white font-bold text-3xl leading-9 pb-4 text-center">Ready to Start Your Project?</h4>
      <p className="text-white font-normal text-lg leading-7  text-center">Let's discuss how we can bring your construction vision to life</p>
    </div>
    </div>
  );
};

export default Map;