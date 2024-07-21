import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumallowesd] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setpassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    // let num = 1234567890
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+~?`|"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setpassword(pass)

  }, [length, numAllowed, charAllowed, setpassword])

  const copyPasswordToClipboard  = useCallback(() =>{
    // passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3); // set selection range

window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, setpassword, passwordGenerator])
  return (
    <>
      <div>
        <h1 className='mg-4  py-4 text-white text-center bold text-xl'>Password Generator</h1>
        <div className="w-full gap-9 flex max-w-md mx-auto shadow-md rounded px-4 py-4  text-orange-500 bg-gray-800 mb-4">
          <input
            type="text"
            value={password} className='outline-none w-full py-1 px-3 rounded-lg'
            placeholder='password '
            readOnly />
          <button 
          ref={passwordRef}
          onClick={copyPasswordToClipboard}
          className='bg-blue-700 outline-none
           shrink-1 rounded px-3 py-0.5 text-white '
          >Copy</button>

        </div>
        <div className=" gap-9 flex max-w-md mx-auto shadow-md rounded px-4 py-4  bg-gray-800 mb-4">
          <div className="flex items-center text-orange-600 gap-x-1">
            <input type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setlength(e.target.value)}
            />
            <label > Length: {length}</label>
          </div>
          <div className="flex item-center text-orange-600  gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => {
                setnumallowesd((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex item-center text-orange-600  gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Char</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App


