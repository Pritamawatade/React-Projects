import React , { useState , useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login , logout} from "./store/authSlice"
import "./App.css";
import { Footer, Header } from "./component";
import { Outlet } from "react-router-dom";


function App() {
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  console.log(import.meta.env.VITE_APPWRITE_URL)
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch(true);

  useEffect(() =>{
    authService.getCurrentUser()
    .then((userData) =>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() =>{ setLoading(false); });
  }, [])
 return !loading ? (
  <div>
    <Header />
    <main>
      {/* TODO: install the tailwind and do some styling and see the getCurrentUser appwrite*/}
      <Outlet />
     
    </main>
    <Footer />
  </div>
 ) : null
}

export default App;
