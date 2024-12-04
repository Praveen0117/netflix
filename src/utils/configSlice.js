import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        lang:"english",
    },
    reducers:{
        chnageLanguage: (state,action) => {
            state.lang = action.payload;
        }
    }
})

export  const {chnageLanguage} = configSlice.actions;

export default configSlice.reducer;