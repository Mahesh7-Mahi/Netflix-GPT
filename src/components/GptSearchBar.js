import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const lan = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12">
        <input
          type="text"
          className=" p-4 col-span-9 rounded-sm"
          placeholder={lang[lan].gptSearchPlaceholder}
        />
        <button className=" mx-2 col-span-3 bg-red-600 p-4 text-white text-3xl rounded-sm">
          {lang[lan].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
