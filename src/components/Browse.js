import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/useTopRatedMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies()
  useTopRatedMovies()

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondryContainer/>
    </div>
  )
}

export default Browse
