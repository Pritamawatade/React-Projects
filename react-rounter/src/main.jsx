import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import User from './Components/User/User.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Contact from './Components/Contact/Contact.jsx'
import Github, { githubIfoLoader } from './Github/Github.jsx'


// Two ways to create the router first is this :

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element: <Home />
//       },
//       { 
//         path:"about",
//         element: <About />
//       },
//       { 
//         path:"Contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

//Second way to create router is this 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubIfoLoader}
      path='github' element={<Github />} />
    </Route>

 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
