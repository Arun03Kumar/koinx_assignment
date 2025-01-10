import React from 'react'
import "./RightMain.css"
import frame from "/Frame.png"
import arrow from "/Arrow.png"

const RightMain = () => {
  return (
    <div>
      <div className='ad'>
        <div className='txt1'> Get Started with KoinX for FREE</div>
        <div className='txt2'>With our range of features that you can equip for free,
        KoinX allows you to be more educated and aware of your tax reports.</div>
        <div style={{margin: "40px 0px"}}>
          <img src={frame} alt="" />
        </div>
        <div className='btn2'>
          Get Started For FREE
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className='trending3'></div>
    </div>
  )
}

export default RightMain