<<<<<<< HEAD
import About from "./components/About"
import Form from "./components/Form"
import Home from "./components/home"


function App() {
 
  return (
    <>
      adddadds
     <p className="font-bold text-3xl">dsad</p>
     <p className="font-bold text-7xl">dsad</p>
      <Home brand="Ford"/>
      <About/>
      <Form />
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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
      </p>
>>>>>>> 1aac80a (Weather On React Added)
    </>
  )
}

export default App
