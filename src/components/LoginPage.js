import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidateData } from "../utils/validate.js";
import { auth } from "../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch=useDispatch();

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: username.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/ogw/AF2bZygJrebN_tpv3XKBgKLxGMBWhBCdXGaiEJT39JVZ2tofwVE=s32-c-mo",
          })
            .then(() => {
              const {uid, email, displayName, photoURL}=auth.currentUser;
              dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL,
              }));
            })
            .catch((error) => {
              setErrorMessage(error.code);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
        })
        .catch((error) => {
          setErrorMessage(error.code);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12 bg-black bg-opacity-80 mx-auto left-0 right-0 p-8 mt-36 rounded-md"
      >
        {!isSignIn && (
          <input
            ref={username}
            type="text"
            placeholder="Name"
            autoComplete="username"
            className="border border-white text-white my-4 p-4 w-full bg-black bg-opacity-0 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          autoComplete="email"
          className="border border-white text-white my-4 p-4 w-full bg-black bg-opacity-0 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="border border-white text-white my-4 p-4 w-full bg-black bg-opacity-0 rounded-sm"
        />
        <p className="my-2 text-red-600">{errorMessage}</p>
        <button
          className="bg-red-600 text-white font-bold my-4 px-4 py-2 w-full rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white my-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up now."
            : "Already a user? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
