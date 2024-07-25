import React from 'react'
import { useState , useEffect} from 'react'
import './App.css'
import Card from './componets/Card'
import ThemeBtn from './componets/Themebtn'
import { ThemeProvider } from './contexts/theme'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }
  // Actually how the theme should change

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])


  document.querySelector('html').classList.remove("light", "dark")


  return (


    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
          <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>


  )
}

export default App
