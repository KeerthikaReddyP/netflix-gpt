const { createSlice } = require("@reduxjs/toolkit");

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptPage:false
    },
    reducers:{
        toggleGptPageView:(state,action)=>{
            state.showGptPage=!state.showGptPage;
        }
    }
});

export const {toggleGptPageView}=gptSlice.actions;
export default gptSlice.reducer;