import React from "react";
import AboutItems from "./AboutItems";
import { FaBoxOpen } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { LuFileSpreadsheet } from "react-icons/lu";
import { CiCloudOn } from "react-icons/ci";

const AboutMe = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="font-roboto text-primary text-4xl font-medium">
          About Me
        </h2>
        <p className="font-roboto text-secondary text-2xl font-normal mt-6">
          I’m a Product designer currently working as freelancer. I’m from
          Iceland but my work is essentially in Sydney. Specialized in graphic,
          webdesign and interface design. I’ve been working as a designer for
          six years. I’ve Completed my education from most popular universities.
          Learning is the essential part of my life. I take on freelance
          projects that pique my interest. Outside of my work, I enjoy good food
          and the outdoors games with friends and relatives. I also spend my
          spare time in libraries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-12">
          <AboutItems
            title="Branding"
            icon={<FaBoxOpen className="text-4xl" />}
          />
          <AboutItems
            title="Caligraphy"
            icon={<LuPencil className="text-4xl" />}
          />
          <AboutItems
            title="Graphics"
            icon={<LuFileSpreadsheet className="text-4xl" />}
          />
          <AboutItems
            title="Social Media"
            icon={<CiCloudOn className="text-4xl" />}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
