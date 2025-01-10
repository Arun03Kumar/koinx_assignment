import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    // Check if the script has already been added
    if (container.current.querySelector("script")) {
      return; // Exit if the script is already appended
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "837",
          "height": "400",
          "symbol": "COINBASE:BTCUSD",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "range": "5D",
          "allow_symbol_change": false,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);

    // const interval = setInterval(() => {
    //   const iframe = container.current.querySelector("iframe");
    //   if (iframe && iframe.contentWindow) {
    //     try {
    //       const chartPageElement = iframe.contentWindow.document.querySelector(".chart-page");
    //       if (chartPageElement) {
    //         chartPageElement.style.border = "none"; // Reset border
    //         clearInterval(interval); // Stop the interval once found
    //       }
    //     } catch (err) {
    //       console.error("Unable to access iframe content:", err);
    //     }
    //   }
    // }, 100)
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%", border: "none" }}
      ></div>
    </div>
  );
}

export default memo(TradingViewWidget);
