import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/MovieSlice";
import { API_Options } from "../utils/Constants";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const getMovieVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
        API_Options
      );
      const json = await data.json();
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[1] : json.results[1];
      dispatch(addTrailerVideo(trailer))
  
    };
    useEffect(() => {
      getMovieVideo();
    }, []);
}

export default useMovieTrailer
