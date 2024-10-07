import React from "react";

const AboutItems = ({ title, icon }) => {
  return (
    <div className="bg-third py-16 flex flex-col gap-5 items-center hover:bg-slate-200 group transition-all cursor-pointer">
      <span className="group-hover:text-slate-600 transition-all"> {icon}</span>
      <h3 className="font-roboto text-primary text-2xl font-medium group-hover:text-slate-600 transition-all">
        {title}
      </h3>
    </div>
  );
};

export default AboutItems;
