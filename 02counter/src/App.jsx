import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Chia aur react</h1>
        <h2>Counter valur : 5</h2>

        <button >Add value</button>
        <br />
        <button>remove value</button>
        

    </>
  )
}

export default App
