import React from 'react'

const CommonHeading = ({title, description}) => {
  return (
    <div className="heading text-center">
      <h3 className="text-5xl font-bold leading-15 text-primary">
        {title}
      </h3>
      <p className="text-lg font-normal leading-[150%] text-secondary mt-4">
        {description}
      </p>
    </div>
  );
}

export default CommonHeading