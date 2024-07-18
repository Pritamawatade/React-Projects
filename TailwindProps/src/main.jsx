import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navigation from './Components/Navigation.jsx'
import HeroSection from './Components/HeroSection.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <HeroSection />
  </React.StrictMode>,
)
