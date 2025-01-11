import React from "react";

export const Fundaments = () => {
  const object = [
    { "Bitcoin Price": { val: "$16,815.46" } },
    { "24h Low / 24h High": { val: "$16,382.07 / $16,874.12" } },
    { "7d Low / 7d High": { val: "7d Low / 7d High" } },
    { "Trading Volume": { val: "$23,249,202,782" } },
    { "Market Cap Rank": { val: "#1" } },
    { "Market Cap": { val: "$323,507,290,047" } },
    { "Market Cap Dominance": { val: "38.34%" } },
    { "Volume / Market Cap": { val: "0.0718" } },
    {
      "All-Time High": {
        val: "$69,044.77",
        change: "-75.6%",
        time: "Nov 10, 2021 (about 1 year)",
      },
    },
    {
      "All-Time Low": {
        val: "$67.81",
        change: "24519.1%",
        time: "Jul 06, 2013 (over 9 years)",
      },
    },
  ];

  const midIndex = Math.ceil(object.length / 2);
  const firstColumn = object.slice(0, midIndex);
  const secondColumn = object.slice(midIndex);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "80px",
        marginTop: "20px",
        paddingBottom: "25px",
      }}
    >
      <div style={{ flex: 1 }}>
        {firstColumn.map((item, index) => {
          const key = Object.keys(item)[0];
          const value = item[key];
          return (
            <div
              key={index}
              className="fundamental"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "60px",
                borderBottom: "1px solid #e0e0e0",
                padding: "10px 0",
              }}
            >
              <p className="key" style={{ fontWeight: 500 }}>
                {key}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "5px",
                  marginTop: !value.time ? "8px" : "0px",
                }}
              >
                <p
                  className="value1"
                  style={{ fontWeight: 500, margin: 0, lineHeight: "1.2" }}
                >
                  {value.val}
                  {value.change && (
                    <span style={{ marginLeft: "5px", color: "red" }}>
                      {value.change}
                    </span>
                  )}
                </p>
                <p
                  style={{
                    fontSize: "11.2px",
                    fontWeight: 400,
                    visibility: value.time ? "visible" : "hidden",
                  }}
                >
                  {value.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ flex: 1 }}>
        {secondColumn.map((item, index) => {
          const key = Object.keys(item)[0];
          const value = item[key];
          return (
            <div
              key={index + midIndex}
              className="fundamental"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "60px",
                borderBottom: "1px solid #e0e0e0",
                padding: "10px 0",
              }}
            >
              <p className="key" style={{ fontWeight: 500 }}>
                {key}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "5px",
                }}
              >
                <p
                  className="value1"
                  style={{ fontWeight: 500, margin: 0, lineHeight: "1.2" }}
                >
                  {value.val}
                  {value.change && (
                    <span
                      style={{
                        marginLeft: "5px",
                        color: value.change[0] == "-" ? "red" : "#0FBA83",
                      }}
                    >
                      {value.change}
                    </span>
                  )}
                </p>
                <p
                  style={{
                    fontSize: "11.2px",
                    fontWeight: 400,
                    visibility: value.time ? "visible" : "hidden",
                  }}
                >
                  {value.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
