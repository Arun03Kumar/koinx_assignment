import React from "react";

export const Card = ({ path, color }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "18px",
        width: "456px",
        borderRadius: "12px",
        backgroundColor: color,
      }}
    >
      <div>
        <img src={path} alt="" />
      </div>
      <div style={{ marginLeft: "8px", width: "368px" }}>
        <div style={{ fontSize: "14px", fontWeight: 500 }}>
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#3E5765",
            margin: "8px 0px 18px 0px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </div>
      </div>
    </div>
  );
};
