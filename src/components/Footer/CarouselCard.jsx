import React from "react";

export const CarouselCard = ({ img_src, name, change, value, chart }) => {
  return (
    <div className="c_card_container">
      <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        <div className="c_card_coin_img">
          <img src={img_src} alt="" />
        </div>
        <p style={{ fontWeight: 400, lineHeight: "19.36px" }}>{name}</p>
        <p
          className={`box ${
            change && change?.toString()[0] === "-"
              ? "red_class"
              : "green_class"
          }`}
        >
          {change !== null && change !== undefined
            ? `${change > 0 ? "+" : ""}${change.toFixed(2)}`
            : "N/A"}
        </p>
      </div>
      <p
        style={{
          fontWeight: 500,
          lineHeight: "24px",
          fontSize: "20px",
          margin: "12px 0px",
        }}
      >
        ${value?.toFixed(2)}
      </p>
      <div style={{ marginLeft: "30px" }}>
        <img src={chart} alt="" />
      </div>
    </div>
  );
};
