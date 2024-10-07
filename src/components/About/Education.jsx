import React from "react";
import EducationItems from "./EducationItems";

const Education = () => {
  return (
    <section className="pb-24">
      <div className="container">
        <h2 className="font-roboto text-primary text-4xl font-medium">
          Education / Experiences
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-9 ">
          <EducationItems date="2014 - 2015" border="border-b pb-5">
            I am a computer graduate at the California State University.
          </EducationItems>
          <EducationItems date="2015 - 2016" border="border-b">
            I am a graduate of the design at the Newyork University.
          </EducationItems>
          <EducationItems date="2016 - 2017">
            I enjoyed working at converse studio as a product designer.
          </EducationItems>
          <EducationItems date="2017 - 2018">
            I enjoyed working with zentech technology as creative director.
          </EducationItems>
        </div>
      </div>
    </section>
  );
};

export default Education;
