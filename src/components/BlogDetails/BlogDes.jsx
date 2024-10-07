import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const BlogDes = () => {
  return (
    <section className=" container pt-10 pb-20 ">
      <div className="mt-8">
        <h4 className="font-medium text-3xl text-primary mb-2">
          Balance is important in design
        </h4>
        <ul className="flex gap-3.5 font-medium text-primary ">
          <li>
            By <a href="#">Caliberthemes /</a>
          </li>
          <li>
            In <a href="#">Inspirational /</a>
          </li>
          <li>
            On <a href="#">22 Sep 2019 /</a>
          </li>
        </ul>
        <div className="font-medium text-secondary text-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum.Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
            libero, sit amet adipiscing sem neque sed ipsum.
          </p>
          <p className="mt-7">
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque sed ipsum.Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum.
          </p>
        </div>
        <div>
          <h5 className="font-medium text-3xl text-primary mb-2 mt-6">
            The most important factor
          </h5>
          <p className="font-medium text-secondary text-lg w-72 ml-14">
            Aenean sodales sem sed erat auctor semper Cras dictum iaculis
            fringilla. Proin malesuada Etiam sodales quam ac maximus sodales
          </p>
          <p className="font-medium text-secondary text-lg mt-4">
            The most important factor
          </p>
          <div className="mt-10">
            <button className="border-solid border-2 border-secondary px-4 py-2 mr-3 mb-4">
              Agency
            </button>
            <button className="border-solid border-2 border-secondary px-4 py-2 mr-3">
              Creative
            </button>
            <button className="border-solid border-2 border-secondary px-4 py-2 mr-3">
              Minimal
            </button>
            <div className="bg-forth h-14 mt-12 ">
              <p className="pt-4 pl-7 ">Share</p>
              <div className="text-primary">
                <ul className="flex gap-4 justify-end">
                  <li className="rounded-full w-7 h-7 flex justify-center items-center">
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="rounded-full w-7 h-7  flex justify-center items-center">
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="rounded-full w-7 h-7  flex justify-center items-center">
                    <a href="#">
                      <FaPinterestP />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDes;
