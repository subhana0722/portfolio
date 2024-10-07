import React from "react";

const EducationItems = ({ date, children, border }) => {
  return (
    <div className={`${border ? border : ""}`}>
      <h3 className="font-roboto text-primary text-sm font-bold">{date}</h3>
      <p className="font-roboto text-secondary text-sm font-normal mt-1">
        {children}
      </p>
    </div>
  );
};

export default EducationItems;
