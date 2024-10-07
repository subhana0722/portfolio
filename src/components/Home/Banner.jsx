import React from "react";

const Banner = () => {
  return (
    <section className="py-28 sm:py-36 lg:py-80 bg-[url('./banner.png')] bg-cover bg-center bg-no repeat">
      <div className="container m-auto">
        <h1 className="font-medium text-6xl text-center text-primary">
          Creative Studio
        </h1>
        <p className="font-normal text-xl text-center mt-5 text-secondary">
          We turn ideas into reality.
        </p>
      </div>
    </section>
  );
};

export default Banner;
