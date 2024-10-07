import React from "react";
import BlogP from "./BlogP";
import BlogH from "./BlogH";

const BlogSide = () => {
  return (
    <section className=" container pt-10 pb-20 ">
      <div className="mb-12 ">
        <BlogH>Recent Posts</BlogH>
        <div>
          <BlogP border="border-b pb-4">Balance is important in design</BlogP>
          <BlogP border="border-b pb-4">Tips for organizing things</BlogP>
          <BlogP border="border-b pb-4">The shades of grey</BlogP>
          <BlogP border="border-b pb-4">Inspiration from nature</BlogP>
        </div>
      </div>
      <div className="mb-12 ">
        <BlogH>Categories</BlogH>
        <div>
          <BlogP border="border-b pb-4">Artificial</BlogP>
          <BlogP border="border-b pb-4">Inspirational</BlogP>
          <BlogP border="border-b pb-4">Intelligence</BlogP>
          <BlogP border="border-b pb-4">Motivational</BlogP>
        </div>
      </div>
      <div>
        <BlogH>Tags</BlogH>

        <div className="mt-6">
          <button className="border-solid border-2 border-secondary px-4 py-2 mr-3 mb-4">
            Agency
          </button>
          <button className="border-solid border-2 border-secondary px-4 py-2 mr-3">
            Creative
          </button>
          <button className="border-solid border-2 border-secondary px-4 py-2 mr-3">
            Digital
          </button>
          <button className="border-solid border-2 border-secondary px-4 py-2 mr-3  mb-4">
            Exceptional
          </button>
          <button className="border-solid border-2 border-secondary px-4 py-2 mr-3">
            Media
          </button>
          <button className="border-solid border-2 border-secondary px-4 py-2 mr-3">
            Minimal
          </button>
          <button className="border-solid border-2 border-secondary px-4 py-2 mr-3  mb-4">
            Photography
          </button>
          <button className="border-solid border-2 border-secondary px-4 py-2 mr-3">
            SEO
          </button>
          <button className="border-solid border-2 border-secondary px-4 py-2 mr-3">
            Tips
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSide;
