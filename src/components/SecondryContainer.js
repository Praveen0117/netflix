import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {

  const movies = useSelector((store) => store.movies)

  
  

  return (
    <div className='-mt-72'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Telugu"} movies={movies.popularMovies}/>

      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>

    </div>
  )
}

export default SecondryContainer
