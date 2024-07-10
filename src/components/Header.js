import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //Signed out successfully
        navigate("/");
      })
      .catch(() => {
        //An error occured
        navigate("/error");
      });
  };

  return (
    <div className="px-6 pt-2 w-screen absolute bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
        className="w-44"
      />
      {user && (
        <div className="flex m-2 p-2 items-center">
          <img
            className="w-8 h-8 m-2 rounded-full"
            alt="user-icon"
            src={user.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white font-bold m-2 py-1 px-2 rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
