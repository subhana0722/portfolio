import React from "react";

const PortImg = () => {
  return (
    <section className="container">
      <div className="background-cover">
        <img src="/portimg1.jpg" alt="portimg1" className="image-cover" />
      </div>
      <img src="portimg2.jpg" alt="portimg2" className="mt-11" />
      <img src="portimg3.jpg" alt="portimg3" className="mt-11" />
      <div>
        <h1 className="font-medium text-6xl mt-4  text-primary">
          Brochure Design
        </h1>
        <h2 className="font-normal text-3xl mt-5  mb-10 text-primary">
          Printing
        </h2>
        <p className="font-normal text-xl mt-5  mb-10 text-secondary">
          There are many variations of passages of Lorem Ipsum available, the
          majority have suffered alteration in form, by injected humour, or
          randomising words which do look slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text. Various versions have evolved over
          the years, sometimes by accident.
        </p>
        
      </div>
    </section>
  );
};

export default PortImg;
