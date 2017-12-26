import { takeEvery, call, put } from "redux-saga/effects";

import {
  getMoviesRequest,
  getMoviesSuccess,
  getMoviesFailure
} from "../actions/MoviesAction";

import { GET_MOVIES } from "../const/const";
import * as Api from "../api/api";

//WORKER

function* GettingMovies(action) {
  yield put(getMoviesRequest());
  const { data, error } = yield call(Api.searchMovies, action);
  if (data) {
    yield put(
      getMoviesSuccess(action.currentPage, data.totalResults, data.Search)
    );
  } else {
    yield put(getMoviesFailure(error.message));
  }
}

//WATCHER

export function* GetMoviesRequest() {
  yield takeEvery(GET_MOVIES, GettingMovies);
}
