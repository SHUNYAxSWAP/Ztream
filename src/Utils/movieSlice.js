import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "trendingMovie",
    initialState: {
        MovieInfo : null,
        TrailerVideo : null
    },
    reducers: {
        addMovie:(state,action) => {
            state.MovieInfo = action.payload
        },
        addTrailer:(state,action) => {
            state.TrailerVideo = action.payload
        }
    }
})

export const { addMovie , addTrailer} = movieSlice.actions;
export default movieSlice.reducer;