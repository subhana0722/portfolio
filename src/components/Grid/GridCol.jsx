import React from "react";

const GridCol = () => {
  return (
    <section className="container m-auto">
      <h1 className="font-medium text-6xl mt-4  text-primary">
        Grid Three Column
      </h1>
      <div>
        <ul className="flex gap-3.5 mt-20 font-normal text-xl text-slate-700 mb-9 ">
          <li className="hover:text-secondary">
            <a href="#">All /</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">Branding /</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">Illustration /</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#">Logo</a>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="relative w-full sm:w-1/3 group">
            <img src="/container1.png" alt="container1" className="w-full" />
            <div className="absolute inset-0 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacit w-4/5 -translate-x-7 translate-y-64 duration-300">
              <div className="bg-primary pt-5 pb-5 ">
                <h2 className="text-white text-2xl font-semibold pl-6 ">
                  Lightbox Project
                </h2>
                <p className="text-white text-lg font-normal pl-6">Video</p>
              </div>
            </div>
          </div>
          <div className="relative w-full sm:w-1/3 group">
            <img src="/container2.png" alt="container2" className="w-full" />
            <div className="absolute inset-0 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacit w-4/5 -translate-x-7 translate-y-64 duration-300">
              <div className="bg-primary pt-5 pb-5 ">
                <h2 className="text-white text-2xl font-semibold pl-6 ">
                  Lightbox Project
                </h2>
                <p className="text-white text-lg font-normal pl-6">Video</p>
              </div>
            </div>
          </div>
          <div className="relative w-full sm:w-1/3 group">
            <img src="/container3.png" alt="container3" className="w-full" />
            <div className="absolute inset-0 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacit w-4/5 -translate-x-7 translate-y-64 duration-300">
              <div className="bg-primary pt-5 pb-5 ">
                <h2 className="text-white text-2xl font-semibold pl-6 ">
                  Lightbox Project
                </h2>
                <p className="text-white text-lg font-normal pl-6">Video</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 my-8">
          <div className="relative w-full sm:w-1/3 group">
            <img src="/container4.png" alt="container4" className="w-full" />
            <div className="absolute inset-0 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacit w-4/5 -translate-x-7 translate-y-64 duration-300">
              <div className="bg-primary pt-5 pb-5 ">
                <h2 className="text-white text-2xl font-semibold pl-6 ">
                  Lightbox Project
                </h2>
                <p className="text-white text-lg font-normal pl-6">Video</p>
              </div>
            </div>
          </div>

          <div className="relative w-full sm:w-1/3 group">
            <img src="/container5.png" alt="container5" className="w-full" />
            <div className="absolute inset-0 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacit w-4/5 -translate-x-7 translate-y-64 duration-300">
              <div className="bg-primary pt-5 pb-5 ">
                <h2 className="text-white text-2xl font-semibold pl-6 ">
                  Lightbox Project
                </h2>
                <p className="text-white text-lg font-normal pl-6">Video</p>
              </div>
            </div>
          </div>
          <div className="relative w-full sm:w-1/3 group">
            <img src="/container6.png" alt="container6" className="w-full" />
            <div className="absolute inset-0 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacit w-4/5 -translate-x-7 translate-y-64 duration-300">
              <div className="bg-primary pt-5 pb-5 ">
                <h2 className="text-white text-2xl font-semibold pl-6 ">
                  Lightbox Project
                </h2>
                <p className="text-white text-lg font-normal pl-6">Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridCol;
