import React from "react";

const Banner = () => {
  return (
    <section className="pt-16 bg-third ">
      <div className="container flex items-center">
        <div className="w-3/5">
          <h1 className="text-primary font-roboto text-6xl font-medium mb-2">
            Mike Reaves
          </h1>
          <p className="text-secondary font-roboto text-2xl font-normal">
            Product designer
          </p>
        </div>
        <div className="w-2/5">
          <img src="/about_banner.png" alt="AboutBanner" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
