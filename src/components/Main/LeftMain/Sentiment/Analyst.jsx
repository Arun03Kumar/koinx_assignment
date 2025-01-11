import React from "react";

export const Analyst = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "24px", marginBottom: "24px" }}>
      <div
        style={{
          // textAlign: "center",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          backgroundColor: "#EBF9F4",
          color: "#0FBA83",
          fontSize: "36px",
          fontWeight: "500",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        76%
      </div>
      <div
        style={{
          marginLeft: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#7C7E8C",
              marginRight: "30px",
            }}
          >
            Buy
          </p>
          <div
            style={{
              backgroundColor: "#00B386",
              width: "350px",
              height: "8px",
              borderRadius: "2px",
            }}
          />
          <p
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#7C7E8C",
              marginLeft: "15px",
            }}
          >
            76%
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#7C7E8C",
              marginRight: "30px",
            }}
          >
            Hold
          </p>
          <div
            style={{
              backgroundColor: "#C7C8CE",
              width: "33px",
              height: "8px",
              borderRadius: "2px",
            }}
          />
          <p
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#7C7E8C",
              marginLeft: "15px",
            }}
          >
            8%
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#7C7E8C",
              marginRight: "30px",
            }}
          >
            Sell
          </p>
          <div
            style={{
              backgroundColor: "#F7324C",
              width: "67px",
              height: "8px",
              borderRadius: "2px",
            }}
          />
          <p
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#7C7E8C",
              marginLeft: "15px",
            }}
          >
            16%
          </p>
        </div>
      </div>
    </div>
  );
};
