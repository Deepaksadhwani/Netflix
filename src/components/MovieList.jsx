import React, { useRef, useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += e.deltaY;
        e.preventDefault(); // Prevent vertical scrolling
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("wheel", handleWheel);

    const autoScroll = () => {
      if (isScrolling && scrollContainerRef.current) {
        const scrollContainer = scrollContainerRef.current;
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + 1;
          if (newPosition > maxScrollLeft) {
            return 0;
          }
          scrollContainer.scrollLeft = newPosition;
          return newPosition;
        });
        animationFrameId.current = requestAnimationFrame(autoScroll);
      }
    };

    animationFrameId.current = requestAnimationFrame(autoScroll);

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [isScrolling]);

  const handleHover = (isHovering) => {
    setIsScrolling(!isHovering);
    if (isHovering) {
      cancelAnimationFrame(animationFrameId.current);
    } else {
      animationFrameId.current = requestAnimationFrame(autoScroll);
    }
  };

  return (
    <div className="pb-4  text-white">
      <h1 className=" py-4 text-3xl font-semibold" >{title}</h1>
      <div
        ref={scrollContainerRef}
        className="hide-scrollbar flex overflow-x-scroll whitespace-nowrap"
        style={{ scrollbarWidth: "none" }}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <div className="flex items-center py-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;