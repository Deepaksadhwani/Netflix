import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
const GptSearchBar = () => {
  const configLang = useSelector((store) => store.config.lang);
  if (!configLang) return;
  return (
    <div className="flex justify-center pt-[10%]">
      <div className="grid w-1/2 grid-cols-12 rounded-md bg-black">
        <input className="col-span-9 m-4 p-4" placeholder={lang[configLang].gptSearchPlaceholder} />
        <button className="col-span-3 m-4 rounded-lg bg-red-700 py-2 text-white">{lang[configLang].search }</button>
      </div>
    </div>
  );
};

export default GptSearchBar;
