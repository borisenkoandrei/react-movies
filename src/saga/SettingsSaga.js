import { takeEvery, call, put } from "redux-saga/effects";
import { CHECK_API_KEY } from "../const/const";

import * as Api from "../api/api";
import {
  checkApiKeyRequest,
  checkApiKeySuccess,
  checkApiKeyFailure
} from "../actions/SettingsActions";

function* checkingApiKey(action) {
  yield put(checkApiKeyRequest());
  const { data, error } = yield call(Api.checkApiKey, action.apiKey);
  if (data) {
    yield put(checkApiKeySuccess(action.apiKey));
  } else {
    yield put(checkApiKeyFailure(error));
  }
}

export default function* checkApKey(action) {
  console.log(action);
  yield takeEvery(CHECK_API_KEY, checkingApiKey);
}
