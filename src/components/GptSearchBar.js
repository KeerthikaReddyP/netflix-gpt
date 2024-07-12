import React from "react";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang.hindi.gptSearchPlaceholder}
          className="border border-black m-4 py-2 px-4 col-span-9"
        />
        <button className="bg-red-600 text-white font-bold m-4 py-2 px-4 rounded-md col-span-3">
          {lang.tel.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
