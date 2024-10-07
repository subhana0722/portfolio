import React from "react";

const BlogCmnt = () => {
  return (
    <section className=" container pt-10 pb-20 ">
      <div>
        <div className="mt-16 ">
          <h2 className="font-medium text-6xl mt-4 mb-5 text-primary">
            2 Comments
          </h2>
          <div className="h-0.5 bg-slate-200"></div>
        </div>
        <div className=" mt-10 flex gap-5">
          <div>
            <img src="commentImg.png" className="max-w-fit" alt="commentImg" />
          </div>
          <div>
            <h3 className="font-medium text-xl text-primary mb-1 ">
              caliberthemes
            </h3>
            <p>September 22, 2019 at 9:43 am</p>
            <p className="text-secondary mt-4 font-medium">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
              penatibus et magnis dis parturient montes
            </p>
            <button className="border-solid border-2 border-secondary px-4 py-1 mt-6 ml-[669px]">
              Reply
            </button>
            <div className="ml-24">
              <div className="h-0.5 bg-slate-200 mt-20 mb-10"></div>
              <div className="">
                <img src="commentImg.png" alt="commentImg" />
              </div>
              <h3 className="font-medium text-xl text-primary mb-1 ">
                caliberthemes
              </h3>
              <p>September 22, 2019 at 9:43 am</p>
              <p className="text-secondary mt-4 font-medium">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis Theme
                natoque penatibus et magnis dis parturient montes
              </p>
              <button className="border-solid border-2 border-secondary px-4 py-1 mt-6 ml-[669px]">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCmnt;
