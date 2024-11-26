import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        tarilerVideo:null,
        
    },
    reducers:{
        addNowPlayMovies:(state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies:(state,action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action) => {
            state.topRatedMovies = action.payload
        },
        addTrailerVideo:(state,action) =>{
            state.tarilerVideo = action.payload
        }

    }
})

export const {addNowPlayMovies, addTrailerVideo, addPopularMovies,addTopRatedMovies} = movieSlice.actions

export default movieSlice.reducer