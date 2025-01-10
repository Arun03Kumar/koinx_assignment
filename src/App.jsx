import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import arrow from './assets/double_arrow.svg'
import './App.css'
import Header from './components/Header/Header'
import LeftMain from './components/Main/LeftMain'
import RightMain from './components/Main/RightMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='heading_cr'>
        <p style={{lineHeight: "17px", fontWeight: 400, color: "#3E5765", marginRight: "10px"}}>Cryptocurrencies</p>
        <img src={arrow} alt="" srcset="" />
        <p style={{lineHeight: "17px", fontWeight: 500, color: "#0F1629", marginLeft: "6px"}}>Bitcoin</p>
      </div>
      <div className='main'>
        <LeftMain />
        <RightMain />
      </div>
    
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
