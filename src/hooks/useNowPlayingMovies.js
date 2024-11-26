import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayMovies } from '../utils/MovieSlice'
import { API_Options } from '../utils/Constants'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

        const getNowPlaingMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_Options)
        const json = await data.json()
        
        dispatch(addNowPlayMovies(json.results))
        }

        useEffect(() => {
        getNowPlaingMovies()
        },[])
}

export default useNowPlayingMovies
