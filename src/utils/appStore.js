import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./MovieSlice"
import gptReducer from "./GptSearchSlice"
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies: moviesReducer,
        gpt:gptReducer,
        config: configReducer,
    }
})

export default appStore