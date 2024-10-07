import React from 'react'

const BlogH = ({ children }) => {
    return (
      <>
        <div>
          <h3 className="font-medium text-3xl text-primary mb-2">{children}</h3>
          <div>
            <div className="bg-primary h-0.5 w-8 absolute"></div>
            <div className="bg-slate-200 h-0.5 "></div>
          </div>
        </div>
      </>
    );
  };

export default BlogH