import { useSelector } from "react-redux";
import VideoTitle from "../components/VideoTitle";
import VideoBackground from "../components/VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
