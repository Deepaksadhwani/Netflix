import React from "react";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popular = useSelector((store) => store.movies?.popularMovies);
  const upcoming = useSelector((store) => store.movies?.upcomingMovies);
  const topRated = useSelector((store) => store.movies?.topRatedMovies);
  if (!movies || !popular || !upcoming || !topRated) return;
  console.log(movies.nowPlayingMovies);
  return (
    <div className=" bg-black ">
      <div className="relative z-10 -mt-44 pl-12 pr-12">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Top Rated"} movies={topRated} />
        <MovieList title={"Popular"} movies={popular} />
        <MovieList title={"Upcoming"} movies={upcoming} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
