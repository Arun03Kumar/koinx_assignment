import React from "react";
import arrow from "/Arrow.png";

export const BitcoinCard = ({ path, title, color }) => {
  return (
    <div
      style={{
        width: "388px",
        height: "151px",
        borderRadius: "7px",
        background: color,
        display: "flex",
        padding: "12px",
      }}
    >
      <img src={path} alt="" />
      <div style={{ marginLeft: "27px", marginTop: "8px" }}>
        <p
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#FFF",
            lineHeight: "28px",
            marginRight: "10px",
            marginBottom: "16px",
          }}
        >
          {title}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "132px",
            height: "32px",
            borderRadius: "8px",
            background: "#FFF",
            // padding: "0px 14px",
          }}
        >
          <p
            style={{ fontWeight: 600, lineHeight: "28px", marginRight: "5px" }}
          >
            Check Now
          </p>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};
