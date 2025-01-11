import React, { useState } from 'react'
import "./LeftMain.css"
import { Coin } from './LeftMain/Coin'
import { Template } from './LeftMain/Template'
import { Slider } from './LeftMain/Performance/Slider'
import vector from "/Vector.png"
import { Fundaments } from './LeftMain/Performance/Fundaments'

const LeftMain = () => {
  const [selected, setSelected] = useState(0)
  const options = ["Overview", "Fundamentals", "New Insights", "Sentimentst", "Team", "Technicals", "Tokenomics"]

  const handler = (idx) => {
    setSelected(idx)
  }

  return (
    <div className=''>
      <Coin />
      <div style={{display: "flex", gap: "32px", marginTop: "35px", borderBottom: "1px solid #D3E0E6"}}>
        {options.map((item, idx) => {
          return <div className={`options ${selected == idx && "selectedOp"}`} onClick={() => handler(idx)}>
            {item}
          </div>
        })}
      </div>
      <Template name="Performance">
        <Slider lab1="Today’s Low" lab2="Today’s High" val1="46,930.22" val2="49,343.83" marker={true} />
        <Slider lab1="52W Low" lab2="52W High" val1="16,930.22" val2="49,743.83" marker={false} />
        <div style={{display: "flex", gap: "8px", alignItems: "center"}}>
          <p style={{fontSize: "19px", fontWeight: 600, color: "#44475B"}}>Fundamentals</p>
          <img src={vector} alt="" />
        </div>
        <Fundaments />
      </Template>
    </div>
  )
}

export default LeftMain