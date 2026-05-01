import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRated: null,
    upComing: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    popularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    topRated: (state, action) => {
      state.topRated = action.payload;
    },
    upComing: (state, action) => {
      state.upComing = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailer,
  popularMovies,
  topRated,
  upComing,
} = moviesSlice.actions;

export default moviesSlice.reducer;
