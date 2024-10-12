import React from 'react'
import authService from '../../appwrite/auth.js'
import { useDispatch } from 'react-redux'
import { logout }  from "../../store/authSlice.js"

function Logout() {
    const dispatch = useDispatch()
        const logoutHandler = () =>{
            authService.logout()
            .then(() =>{
                dispatch(logout())
            })
        }
  return (
    <button className='bg-red-500 text-white px-3 py-1'>Logout</button>
  )
}

export default Logout