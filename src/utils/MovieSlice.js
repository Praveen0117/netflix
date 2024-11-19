import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        tarilerVideo:null,
    },
    reducers:{
        addNowPlayMovies:(state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo:(state,action) =>{
            state.tarilerVideo = action.payload
        }

    }
})

export const {addNowPlayMovies, addTrailerVideo} = movieSlice.actions

export default movieSlice.reducer