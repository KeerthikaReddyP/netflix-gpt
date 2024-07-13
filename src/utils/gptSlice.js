import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptPage:false,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        toggleGptPageView:(state,action)=>{
            state.showGptPage=!state.showGptPage;
        },
        addAIMovieResult:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    }
});

export const {toggleGptPageView , addAIMovieResult}=gptSlice.actions;
export default gptSlice.reducer;