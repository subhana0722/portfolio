import React from "react";
import BlogSide from "./BlogSide";
import BlogDes from "./BlogDes";
import BlogCmnt from "./BlogCmnt";
import BlogLive from "./BlogLive";

const BlogBanner = () => {
  return (
    <section className=" container pt-10 pb-20 ">
      <div className=" flex gap-14">
        <div className=" w-full">
          <img src="blogD1.png" alt="blogD" />
          <BlogDes />
          <BlogCmnt />
          <BlogLive />
        </div>
        <BlogSide />
      </div>
    </section>
  );
};

export default BlogBanner;
