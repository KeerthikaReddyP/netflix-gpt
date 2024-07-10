import React, { useEffect } from "react";
import LoginPage from "./LoginPage";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";

const Body = () => {
  const disaptch=useDispatch();

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
        const {uid,email, displayName, photoURL}=user;
        
        //dispatch
        disaptch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));

      }else{
        //Sign Out
        //dispatch
        disaptch(removeUser());
      }
    });
  },[]);

  return <RouterProvider router={appRouter} />
};

export default Body;
