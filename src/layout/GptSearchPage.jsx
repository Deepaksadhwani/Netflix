import React from "react";
import GptSearchBar from "../components/GptSearchBar";
import GptMovieSuggestions from "../components/GptMovieSuggestions";
import { BG_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
       <div className="absolute -z-10">
        <img src={BG_IMG} alt="" className="opacity-70 "/>
       </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
