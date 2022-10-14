// @ts-nocheck
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Chart from './modules/chart/chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Stacja Pogodowa</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        Dane z ostatniej godziny
      </p>
      <Chart dataType="temperature"  color="#1d3557" />
      <Chart dataType="huminidity" color="#e63946"  />
      <Chart dataType="pressure"   color="#8338ec"/>
      <Chart dataType="illuminance"  color="#ffb703" />
    </div>
  )
}

export default App
