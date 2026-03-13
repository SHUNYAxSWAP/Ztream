import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "trendingMovie",
    initialState: {
        NowPlaying: null,
        Popular: null,
        TopRated: null,
        Upcoming: null,
        TrailerVideo: null,
        SearchResults: []
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.NowPlaying = action.payload
        },
        addTrailer: (state, action) => {
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
        },
        addSearchMovie: (state, action) => {
            state.SearchResults.push(action.payload);
        },
        removeSearchMovie : (state,action) => {
            state.SearchResults = []
        }
        

    }
})

export const { addNowPlaying, addTrailer, addPopular, addTopRated, addUpcoming, addSearchMovie, removeSearchMovie } = movieSlice.actions;
export default movieSlice.reducer;