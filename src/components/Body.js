import React, { useEffect } from "react";
import LoginPage from "./LoginPage";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";

const Body = () => {

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<LoginPage />
    },
    {
      path:"/browse",
      element:<Browse />
    }
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        //SigIn or SignUp

      }else{
        //Sign Out
        
      }
    });
  },[]);

  return <RouterProvider router={appRouter} />
};

export default Body;
