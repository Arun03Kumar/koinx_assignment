import React, { useState, useEffect } from "react";
import "./RightMain.css";
import frame from "/Frame.png";
import arrow from "/Arrow.png";
import up from "/up_triangle.png";

const RightMain = () => {
  const [coinData, setCoinData] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": import.meta.env.VITE_COIN_API,
    },
  };

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending", options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.coins.slice(0, 3));
        setCoinData(res?.coins.slice(0, 3));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="ad">
        <div className="txt1"> Get Started with KoinX for FREE</div>
        <div className="txt2">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </div>
        <div style={{ margin: "40px 0px" }}>
          <img src={frame} alt="" />
        </div>
        <div className="btn2">
          Get Started For FREE
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="trending3">
        <div className="trending-child">
          <p style={{ fontSize: "24px", fontWeight: 600, lineHeight: "29px" }}>
            Trending Coins (24H)
          </p>
          <div className="trending-coins">
            {coinData?.map((item, idx) => {
              return (
                <>
                  <div style={{marginBottom: "20px", display: "flex", justifyContent: "space-between"}}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "24px",
                          height: "24px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={item?.item?.small}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <p style={{fontWeight: 500, marginLeft: "6px", color: "#0F1629"}}>
                        {item?.item?.name}
                        {`(${item?.item?.symbol})`}
                      </p>
                    </div>
                    <div className="change">
                      <img src={up} alt="" />
                      <p style={{ fontWeight: 500, color: "#14B079", marginLeft: "8px" }}>
                        {item?.item?.data?.price_change_percentage_24h?.btc?.toFixed(2)}%
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMain;
