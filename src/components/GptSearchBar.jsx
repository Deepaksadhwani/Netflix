import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
const GptSearchBar = () => {
  const configLang = useSelector((store) => store.config.lang);
  if (!configLang) return;
  const searchText = useRef(null);

  const gptSearchClickHandler = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResult);
  };

  return (
    <div className="flex justify-center pt-[10%]">
      <div className="grid w-1/2 grid-cols-12 rounded-md bg-black">
        <input
          ref={searchText}
          className="col-span-9 m-4 p-4"
          placeholder={lang[configLang].gptSearchPlaceholder}
        />
        <button
          onClick={gptSearchClickHandler}
          className="col-span-3 m-4 rounded-lg bg-red-700 py-2 text-white"
        >
          {lang[configLang].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
