import React from 'react'

const BlogP = ({ children, border }) => {
    return (
      <div className={`${border ? border : ""}`}>
        <p className="font-roboto text-secondary text-lg font-normal mt-1">
          {children}
        </p>
      </div>
    );
  };

export default BlogP