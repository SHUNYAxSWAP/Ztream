import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "trendingMovie",
    initialState: {
        NowPlaying : null,
        Popular : null,
        TopRated : null,
        Upcoming : null,
        TrailerVideo : null
    },
    reducers: {
        addNowPlaying:(state,action) => {
            state.NowPlaying = action.payload
        },
        addTrailer:(state,action) => {
            state.TrailerVideo = action.payload
        },
        addPopular: (state, action) => {
            state.Popular = action.payload
        },
        addTopRated: (state, action) => {
            state.TopRated = action.payload
        },
        addUpcoming: (state, action) => {
            state.Upcoming = action.payload
        }

    }
})

export const { addNowPlaying , addTrailer, addPopular, addTopRated, addUpcoming} = movieSlice.actions;
export default movieSlice.reducer;