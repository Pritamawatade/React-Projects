import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './Components/Card'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let quote = "As long as i am alive there are infinite posibilities"
  let quote1 = "I am gonna be thte king of the pirates"

  return (
    <> 
     <h1 className='bg-green-400 p-4 rounded-lg'>Dreams</h1>
{/* 
     <Card lines = {quote1}/>
     <Card quot={quote} /> */}
    </>
  )
}

export default App
