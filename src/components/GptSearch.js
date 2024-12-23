import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BackgroundURL } from '../utils/Constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BackgroundURL} alt='background' />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
