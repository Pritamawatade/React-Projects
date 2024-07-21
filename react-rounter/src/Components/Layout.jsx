import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (

    <>
        <Header/>

        <Outlet />
        {/* <Home /> */}
        <Footer />
    </>
)
}

export default Layout