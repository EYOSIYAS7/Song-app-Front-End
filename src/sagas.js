import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import {
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
} from "./songsSlice";

const apiUrl = "https://song-api-xfye.onrender.com/";

function* getsongs() {
  console.log("get songs is called");
  try {
    const response = yield axios.get(`${apiUrl}songs`);
    console.log("response from the api", response.data.songs);
    yield put(getsongsSuccess(response.data.songs));
  } catch (error) {
    yield put(getsongsFailure(error.message));
  }
}

function* createsong(action) {
  try {
    const response = yield axios.post(`${apiUrl}add`, action.payload);
    yield put(createsongSuccess(response.data));
  } catch (error) {
    yield put(createsongFailure(error.message));
  }
}

function* updatesong(action) {
  console.log("updatte song is called");
  console.log(action.payload.id);
  try {
    const response = yield axios.post(
      `${apiUrl}change/${action.payload.id}`,
      action.payload
    );
    console.log("update api was called");
    yield put(updatesongSuccess(response.data));
  } catch (error) {
    yield put(updatesongFailure(error.message));
  }
}

function* deletesong(action) {
  console.log(action.payload);
  console.log("delete song is called");
  try {
    yield axios.delete(`${apiUrl}delete/${action.payload}`);
    yield put(deletesongSuccess(action.payload));
  } catch (error) {
    yield put(deletesongFailure(error.message));
  }
}

function* watchGetsongs() {
  yield takeLatest(getsongsStart.type, getsongs);
}

function* watchCreatesong() {
  yield takeLatest(createsongStart.type, createsong);
}

function* watchUpdatesong() {
  yield takeLatest(updatesongStart.type, updatesong);
}

function* watchDeletesong() {
  yield takeLatest(deletesongStart.type, deletesong);
}

export default function* rootSaga() {
  yield all([
    watchGetsongs(),
    watchCreatesong(),
    watchUpdatesong(),
    watchDeletesong(),
  ]);
}
