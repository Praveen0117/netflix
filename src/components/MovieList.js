import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies,}) => {


  return (
    <div className='px-10 py-5 bg-black'>
      <h1 className='font-semibold text-3xl pb-2 text-white '>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
        {movies?.map(movie => <MovieCard key={movie.id}  posterPath={movie.poster_path}/>)}
        </div>
      </div>
    </div>
  )
}

export default MovieList
