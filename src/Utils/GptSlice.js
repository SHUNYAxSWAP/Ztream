import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "Gpt",
    initialState: {
        GptSearch: false
    },
    reducers:{
        toggleGptSearch : (state) => {
            state.GptSearch = !state.GptSearch
        }
    }
})

export const {toggleGptSearch} = GptSlice.actions;
export default GptSlice.reducer;