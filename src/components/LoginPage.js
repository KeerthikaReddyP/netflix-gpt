import React from "react";
import Header from "./Header";

const LoginPage = () => {
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute w-3/12 bg-black bg-opacity-80 mx-auto left-0 right-0 p-8 mt-36 rounded-md">
        <input
          type="text"
          placeholder="Email"
          className="border border-white my-4 p-4 w-full bg-black bg-opacity-0 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-white my-4 p-4 w-full bg-black bg-opacity-0 rounded-sm"
        />
        <button className="bg-red-600 text-white font-bold my-4 px-4 py-2 w-full rounded-sm">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
