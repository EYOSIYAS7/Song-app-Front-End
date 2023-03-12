import { createSlice } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
export const initialState = {
  songs: [],
  loading: false,
  error: null,
};
const history = useHistory();
const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getsongsStart(state) {
      console.log("getsongsStart");
      state.loading = true;
    },
    getsongsSuccess(state, action) {
      console.log("get songSuccess");
      state.loading = false;
      state.songs = action.payload;
    },
    getsongsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    createsongStart(state) {
      state.loading = true;
    },
    createsongSuccess(state, action) {
      state.loading = false;
      state.songs.push(action.payload);
    },
    createsongFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updatesongStart(state) {
      console.log("update song start is called");
      state.loading = true;
    },
    updatesongSuccess(state, action) {
      state.loading = false;
      state.songs = state.songs.map((song) =>
        song.id === action.payload.id ? action.payload : song
      );
      window.location.reload(true);
      history.push("/");
    },
    updatesongFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deletesongStart(state) {
      console.log("delete song start is called ");
      state.loading = true;
    },
    deletesongSuccess(state, action) {
      state.loading = false;
      state.songs = state.songs.filter((song) => song.id !== action.payload);
    },
    deletesongFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getsongsStart,
  getsongsSuccess,
  getsongsFailure,
  createsongStart,
  createsongSuccess,
  createsongFailure,
  updatesongStart,
  updatesongSuccess,
  updatesongFailure,
  deletesongStart,
  deletesongSuccess,
  deletesongFailure,
} = songsSlice.actions;

export default songsSlice.reducer;
