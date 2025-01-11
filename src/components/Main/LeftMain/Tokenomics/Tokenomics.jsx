import React from "react";
import circle from "/circle.svg";

const Tokenomics = () => {
  return (
    <div>
      <p
        style={{
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: "36px",
          color: "#1D1D1D",
          margin: "24px 0px",
        }}
      >
        Initial Distribution
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "179px", height: "179px" }}>
          <img src={circle} alt="" />
        </div>
        <div style={{ marginLeft: "24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#0082FF",
                marginRight: "10px",
              }}
            />
            <p
              style={{ fontWeight: 400, lineHeight: "20px", color: "#202020" }}
            >
              Crowdsale investors: 80%
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#FAA002",
                marginRight: "10px",
              }}
            />
            <p
              style={{ fontWeight: 400, lineHeight: "20px", color: "#202020" }}
            >
              Foundation: 20%
            </p>
          </div>
        </div>
      </div>
      <p style={{ fontWeight: 500, lineHeight: "25.6px", color: "#3E424A", marginTop: "15px", marginBottom: "20px" }}>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
};

export default Tokenomics;
