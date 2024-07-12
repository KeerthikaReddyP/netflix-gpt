import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder="What's on your mind?"
          className="border border-black m-4 py-2 px-4 col-span-9"
        />
        <button className="bg-red-600 text-white font-bold m-4 py-2 px-4 rounded-md col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
