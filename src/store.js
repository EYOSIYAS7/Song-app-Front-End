import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import songsReducer from "./songsSlice";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: [sagaMiddleware],
  devTools: false,
});

sagaMiddleware.run(rootSaga);

export default store;
