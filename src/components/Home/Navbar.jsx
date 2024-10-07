import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-12">
      <div className="container m-auto flex justify-between">
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <ul className="flex items-center text-lg text-primary gap-10 font-medium font-roboto">
          <li>
            <Link to="/" className="hover:text-secondary transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/page"
              className="hover:text-secondary transition-all relative "
            >
              Page
            </Link>
            <ul className=" hover:bg-black w-40 pl-2 absolute ">
              <li>
                <Link to="/about-basic" className=" text-white transition-all ">
                  About Basic
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white transition-all">
                  About Extended
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/grid" className="hover:text-secondary transition-all">
              Portfolio Layouts
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-secondary transition-all">
              Portfolio Single
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-secondary transition-all">
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/blogdetails"
              className="hover:text-secondary transition-all"
            >
              BlogDetails
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
