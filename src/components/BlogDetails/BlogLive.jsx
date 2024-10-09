import React from "react";

const BlogLive = () => {
  return (
    <section className=" container pt-10 pb-20 ">
      <div>
        <div className="mt-16 ">
          <h2 className="font-medium text-6xl mt-4 mb-5 text-primary">
            Leave a Reply
          </h2>
          <div className="h-0.5 bg-slate-200"></div>
          <p className="text-secondary font-normal text-xl mt-5">
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <div className="mt-6 mb-6">
          <textarea
            name="comment"
            id="comment"
            placeholder="Comment*"
          ></textarea>
        </div>
        <div className="form mb-9 grid grid-cols-3 gap-5">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Website" />
        </div>
        <button className="bg-primary px-9 py-5 text-white ">
          POST COMMENT
        </button>
      </div>
    </section>
  );
};

export default BlogLive;
