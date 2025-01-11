import React from "react";
import { BitcoinCard } from "./BitcoinCard";
import path1 from "/img1.png";
import path2 from "/img2.png";

const Bitcoin = () => {
  return (
    <div style={{ marginTop: "24px" }}>
      <p
        style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#0B1426",
          marginBottom: "10px",
        }}
      >
        What is Bitcoin?
      </p>
      <p style={{ fontWeight: 500, lineHeight: "25.6px", color: "#3E424A" }}>
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>
      <hr
        style={{
          border: "1px solid rgba(201, 207, 221, 0.6)",
          margin: "15px 0px",
        }}
      />
      <p
        style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#0B1426",
          marginBottom: "10px",
          lineHeight: "21.6px",
        }}
      >
        Lorem ipsum dolor sit amet
      </p>
      <div>
        <p style={{ fontWeight: 500, lineHeight: "25.6px", color: "#3E424A" }}>
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
          <br />
          <br />
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.
          <br />
          <br />
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>
      <hr
        style={{
          border: "1px solid rgba(201, 207, 221, 0.6)",
          margin: "15px 0px",
        }}
      />
      <p
        style={{
          fontSize: "24px",
          fontWeight: 600,
          color: "#0B1426",
          lineHeight: "28.8px",
          margin: "10px 0px",
        }}
      >
        Already Holding Bitcoin?
      </p>
      <div style={{ display: "flex", gap: "32px", marginTop: "20px" }}>
        <BitcoinCard
          path={path1}
          title="Calculate your Profits"
          color="linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%)"
        />
        <BitcoinCard
          path={path2}
          title="Calculate your tax liability"
          color="linear-gradient(135.73deg, #FF9865 0%, #EF3031 110.55%)"
        />
      </div>
      <hr
        style={{
          border: "1px solid rgba(201, 207, 221, 0.6)",
          margin: "15px 0px",
        }}
      />
      <p style={{fontWeight: 500, lineHeight: "25.6px", color :"#3E424A"}}>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
};

export default Bitcoin;
