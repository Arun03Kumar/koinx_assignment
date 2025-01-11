import React from "react";

const TeamCard = ({ imgPath, name }) => {
  return (
    <div
      style={{
        padding: "12px",
        background: "rgba(232, 244, 253, 1)",
        borderRadius: "8px",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", padding: "0px 16px" }}
      >
        <div style={{ minWidth: "100px", textAlign: "center" }}>
          <img src={imgPath} alt="" />
          <p
            style={{
              fontWeight: 600,
              fontSize: "15px",
              lineHeight: "18.15px",
              color: "#0F1629",
              marginTop: "8px",
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "14.52px",
              color: "#788F9B",
              marginTop: "2px",
            }}
          >
            Designation Here
          </p>
        </div>
        <div
          style={{
            marginLeft: "16px",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "22.4px",
            color: "#0F1629",
            marginLeft: "30px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
          fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
          nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
          neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
          quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
          dolor est ipsum. Malesuada etiam mi gravida praesent interdu
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
