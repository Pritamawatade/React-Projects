import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

 let [counter, setCounter] = useState(15)
  const addValue = () =>{
    counter++;
    setCounter(counter)
    console.log("value added ",  counter)
  }
  const removeValue = () =>{
    counter--;
    setCounter(counter)
    console.log("value removed ", Math.random())
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>

    </>
  )
}

export default App
