import React from 'react'
import Logo from "../../assets/logo.svg"
import "./Header.css"

const Header = () => {
  const menu = ["Crypto Taxes", "Free Tools", "Resource Center"]
  return (
    <div className='header'>
        <div>
            <a href="#" target="_blank">
                <img src={Logo} className="logo" alt="logo" />
            </a>
        </div>
        <div className='header-right-wrapper'>
          <div className='menu-wrapper'>
            {menu.map((item, index) => (
              <a key={index} href="#" className="menu-item">
                {item}
              </a>
            ))}
          </div>
          <div className='button'>
            <p>Get Started</p>
          </div>
        </div>
    </div>
  )
}

export default Header