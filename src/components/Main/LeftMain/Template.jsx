import React from "react";

export const Template = ({ children, name }) => {
  return (
    <div className="template">
      <div className="inner">
        <p className="t_title">{name}</p>
        {children}
      </div>
    </div>
  );
};
