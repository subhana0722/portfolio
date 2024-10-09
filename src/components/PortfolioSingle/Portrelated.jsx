import React from "react";

const Portrelated = () => {
  return (
    <section className="container">
      <div className="flex justify-center items-center mb-11">
        <h1 className="font-medium text-5xl mt-4  text-primary ">
          Related Works
        </h1>
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-6">
          <li>
            <a href="#">
              <img src="container1.png" alt="container1" className="w-full" />
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium text-xl mt-4  text-primary ">
                  Lightbox Project
                </p>
                <p className="font-normal text-xl mt-1  mb-10 text-secondary ">
                  Video
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="container2.png" alt="container2" className="w-full" />
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium text-xl mt-4  text-primary ">
                  Lightbox Project
                </p>
                <p className="font-normal text-xl mt-1  mb-10 text-secondary ">
                  Image
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="container3.png" alt="container3" className="w-full" />
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium text-xl mt-4  text-primary ">
                  Catalogue
                </p>
                <p className="font-normal text-xl mt-1  mb-10 text-secondary ">
                  Branding
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-6">
          <li>
            <a href="#">
              <img src="container6.png" alt="container6" className="w-full" />
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium text-xl mt-4  text-primary ">
                  Cusion Mockup
                </p>
                <p className="font-normal text-xl mt-1  mb-10 text-secondary ">
                  PhotoShop
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="container7.png" alt="container7" className="w-full" />
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium text-xl mt-4  text-primary ">
                  Business Card
                </p>
                <p className="font-normal text-xl mt-1  mb-10 text-secondary ">
                  Branding
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="container8.png" alt="container8" className="w-full" />
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium text-xl mt-4  text-primary ">
                  Pink Headphone
                </p>
                <p className="font-normal text-xl mt-1  mb-10 text-secondary ">
                  Gadget
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portrelated;
