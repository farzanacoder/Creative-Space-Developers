import React from "react";

const ProjectCard = ({ image, title ,location}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="rounded-2xl overflow-hidden"
    >
      <div className="pt-73 pb-6 px-6">
        <h4 className="text-2xl font-semibold leading-8 text-white pb-2">
          {title}
        </h4>
        <p className="text-base font-normal leading-6 text-[#D1D5DC]">
          {location}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;