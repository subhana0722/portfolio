import React from "react";

const Portfolio = () => {
  return (
    <section className="pt-11 pb-24">
      <div className="container m-auto">
        <ul className="flex gap-3.5 justify-center font-normal text-base text-slate-700 mb-9">
          <li>
            <a href="#">All /</a>
          </li>
          <li>
            <a href="#">Branding /</a>
          </li>
          <li>
            <a href="#">Illustration /</a>
          </li>
          <li>
            <a href="#">Logo</a>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="w-full sm:w-1/3">
            <img src="/container1.png" alt="container1" className="w-full" />
          </div>
          <div className=" w-full sm:w-1/3">
            <img src="/container2.png" alt="container2" className="w-full" />
          </div>
          <div className="w-full sm:w-1/3">
            <img src="/container3.png" alt="container3" className="w-full" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 my-8">
          <div className="w-full sm:w-1/3">
            <img src="/container4.png" alt="container4" className="w-full" />
          </div>
          <div className="w-full sm:w-1/3">
            <img src="/container5.png" alt="container5" className="w-full" />
          </div>
          <div className="w-full sm:w-1/3">
            <img src="/container6.png" alt="container6" className="w-full" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="w-full sm:w-1/3">
            <img src="/container7.png" alt="container7" className="w-full" />
          </div>
          <div className="w-full sm:w-1/3">
            <img src="/container8.png" alt="container8" className="w-full" />
          </div>
          <div className="w-full sm:w-1/3">
            <img src="/container9.png" alt="container9" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default Portfolio;
