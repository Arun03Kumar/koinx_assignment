import React, { useState, useEffect } from "react";
import bitcoin_logo from "/bitcoin_png.png";
import up from "/up_triangle.png";
import "../LeftMain.css";
import Trading from "./TradingViewWidget";

export const Coin = () => {
  const [coinData, setCoinData] = useState(null);
  const [selectedDay, setSelectedDay] = useState(2);

  const days = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": import.meta.env.VITE_COIN_API,
    },
  };

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCoinData(res);
      })
      .catch((err) => console.error(err));
  }, []);

  const formatCurrency = (value, currency) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
    }).format(value);
  };

  const handleClick = (idx) => {
    setSelectedDay(idx);
  };

  return (
    <div className="coin-wrapper">
      <div className="coin-title">
        <div>
          <img src={bitcoin_logo} alt="" />
        </div>
        <p className="coin-name">Bitcoin</p>
        <p className="coin-short">BTC</p>
        <div className="rank">
          <p>Rank #1</p>
        </div>
      </div>
      <div className="price-container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <p className="usd">{formatCurrency(coinData?.bitcoin?.usd, "USD")}</p>
          <div className="change">
            <img src={up} alt="" />
            <p style={{ fontWeight: 500, color: "#14B079", marginLeft: "8px" }}>
              {coinData?.bitcoin?.usd_24h_change?.toFixed(2)}%
            </p>
          </div>
          <p className="day">(24H)</p>
        </div>
        <p style={{ fontWeight: 500, marginTop: "5px" }}>
          {formatCurrency(coinData?.bitcoin?.inr, "INR")}
        </p>
      </div>
      <hr style={{ backgroundColor: "#DEE1E6", marginTop: "24px" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "24px",
          marginBottom: "40px",
        }}
      >
        <p style={{ fontWeight: 600 }}>Bitcoin Price Chart (USD)</p>
        <div style={{ display: "flex", gap: 20 }}>
          {days.map((item, idx) => {
            const isSelected = selectedDay === idx; 

            return (
              <div
                key={idx}
                onClick={() => handleClick(idx)}
                style={{
                  fontWeight: 500,
                  color: isSelected ? "#0141CF" : "#5D667B",
                  fontSize: "13px",
                  backgroundColor: isSelected ? "#E2ECFE" : "transparent",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "32px",
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <Trading />
    </div>
  );
};
