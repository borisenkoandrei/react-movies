import { takeEvery, call, put } from "redux-saga/effects";

import {
  getDescriptionSuccess,
  getDescriptionError
} from "../actions/MovieDescriptionAction";

import { GET_DESCRIPTION_REQUEST } from "../const/const";
import * as Api from "../api/api";

//WORKER

function* getDescriptionRequest(action) {
  const { data, error } = yield call(Api.getDescription, action);
  if (data) {
    yield put(getDescriptionSuccess(data));
  } else {
    yield put(getDescriptionError(error.message));
  }
}

//WATCHER

export function* descriptionRequest() {
  yield takeEvery(GET_DESCRIPTION_REQUEST, getDescriptionRequest);
}
