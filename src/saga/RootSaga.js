import { all } from "redux-saga/effects";

import { GetMoviesRequest } from "./SearchSaga";
import CheckApiKey from "./SettingsSaga";

export default function* rootSaga() {
  yield all([GetMoviesRequest(), CheckApiKey()]);
}
