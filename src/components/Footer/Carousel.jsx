import React, { useState, useEffect, useRef } from "react";
import lArrow from "/leftArrow.png";
import { CarouselCard } from "./CarouselCard";

const Carousel = () => {
  const [coinData, setCoinData] = useState(null);
  const wrapperRef = useRef(null);

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
        setCoinData(res?.coins);
      })
      .catch((err) => console.error(err));
  }, []);

  const scrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft -= 275;
    }
  };

  const scrollRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft += 275;
    }
  };

  return (
    <div className="carousel-container">
      <button className="c_btn btn_l" onClick={scrollLeft}>
        <img src={lArrow} alt="" />
      </button>
      <button className="c_btn btn_r" onClick={scrollRight}>
        <img src={lArrow} alt="" />
      </button>
      <div className="c_card_wrapper" ref={wrapperRef}>
        {coinData &&
          coinData.map((item, idx) => (
            <CarouselCard
              key={idx}
              img_src={item?.item?.small}
              name={item?.item?.symbol}
              change={item?.item?.data?.price_change_percentage_24h?.usd}
              value={item?.item?.data?.price}
              chart={item?.item?.data?.sparkline}
            />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
