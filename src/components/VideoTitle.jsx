import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 w-3/6">
      <h1 className="text-6xl font-semibold ">{title}</h1>
      <p className="py-6 text-lg">{overview}</p>
      <div className="space-x-4 ">
        <button className="text-lg rounded-md bg-opacity-50 font-semibold py-3 px-8 bg-gray-300"><span className="mr-1 text-black">▶️</span>Play</button>
        <button  className="text-lg rounded-md bg-opacity-50 font-semibold py-3 px-8 bg-gray-300"><span className="mr-1 rounded-full">ℹ️</span>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
