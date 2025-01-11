import React from "react";
import Carousel from "./Carousel";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <p
        style={{
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "36px",
          marginBottom: "20px",
        }}
      >
        You May Also Like
      </p>
      <div>
        <Carousel />
      </div>

      <p
        style={{
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "36px",
          marginBottom: "20px",
          marginTop: "50px",
        }}
      >
        Trending Coins
      </p>
      <div style={{ marginBottom: "20px" }}>
        <Carousel />
      </div>
    </div>
  );
};
