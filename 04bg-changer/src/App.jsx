import { useState } from 'react'


function App() {
  let [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen " style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg  bg-white  px-3 py-2 rounded-xl  ">

            <button onClick={() => setColor("red")}
              className="rounded px-6 py-1 bg-red-600 text-white ">Red</button>

            <button onClick={() => setColor("green")}
              className="rounded px-3 py-1 bg-green-600 text-white ">Green</button>

            <button onClick={() => setColor("blue")}
              className="rounded px-3 py-1 bg-blue-600 text-white ">Blue</button>

            <button onClick={() => setColor("yellow")}
              className="rounded px-3 py-1 bg-yellow-600 text-white ">Yellow</button>

            <button onClick={() => setColor("cyan")}
              className="rounded px-3 py-1 bg-cyan-600 text-white ">Cyan</button>

            <button onClick={() => setColor("gray")}
              className="rounded px-3 py-1 bg-gray-600 text-white ">Gray</button>

            <button onClick={() => setColor("orange")}
              className="rounded px-3 py-1 bg-orange-600 text-white ">Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
