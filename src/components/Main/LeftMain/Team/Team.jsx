import React from "react";
import TeamCard from "./TeamCard";
import pic1 from "/pic1.png";
import pic2 from "/pic2.png";
import pic3 from "/pic3.png";

const Team = () => {
  return (
    <div style={{ marginTop: "24px" }}>
      <p style={{ fontWeight: 500, lineHeight: "25.6px", color: "#3E424A" }}>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          marginTop: "24px",
          marginBottom: "20px",
        }}
      >
        <TeamCard imgPath={pic1} name="John Smith" />
        <TeamCard imgPath={pic2} name="Elina Williams" />
        <TeamCard imgPath={pic3} name="John Smith" />
      </div>
    </div>
  );
};

export default Team;
