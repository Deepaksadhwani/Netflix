import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video w-full bg-gradient-to-r  from-black px-12 pt-[15%]  text-white  ">
      <h1 className="w-2/6 text-6xl font-semibold">{title}</h1>
      <p className="w-2/5 py-6 text-lg"> {overview}</p>
      <div className="space-x-4 ">
        <button className="rounded-md bg-white px-8  py-3 text-lg font-semibold text-black transition-all duration-300 hover:bg-opacity-80">
          Play
        </button>
        <button className="rounded-md bg-white  px-8 py-3 text-lg font-semibold text-black transition-all duration-300 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
