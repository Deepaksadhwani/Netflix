import { useSelector } from "react-redux";
import useGetMovieVideos from "../hooks/useGetMovieVideos";

const VideoBackground = ({ movieId }) => {
  useGetMovieVideos(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div>
      <iframe
        className="aspect-video h-screen w-full"
        src={
          "https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
