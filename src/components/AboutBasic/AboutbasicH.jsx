import React from "react";

const AboutbasicH = () => {
  return (
    <section>
      <div className="container flex gap-20">
        <div className="w-full">
          <img
            src="aboutbanner2.jpg"
            alt="aboutbanner"
            className="mt-10 mb-10"
          />
        </div>
        <div>
          <h1 className="text-primary font-roboto text-6xl font-medium mt-16 w-fit">
            Tim Cam is a designer and creative artist
          </h1>
          <p className="text-secondary mt-4 font-medium text-xl">
            I was born in Los Angeles in 1980. It is a long established fact
            that a reader will be distracted by the readable content of a page
            when looking at its layout. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
          <div className=" mt-10 mb-10 grid grid-cols-3 font-semibold text-2xl">
            <p>- Photoshop</p>
            <p>- Social Media</p>
            <p>- Branding</p>
            <p>- Graphics</p>
            <p>- Illustrator</p>
            <p>- SEO</p>
          </div>
          <button className="bg-primary px-9 py-5 text-white">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutbasicH;
