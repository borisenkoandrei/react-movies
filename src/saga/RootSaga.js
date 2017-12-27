import { all } from "redux-saga/effects";

import { GetMoviesRequest } from "./SearchSaga";
import CheckApiKey from "./SettingsSaga";
import { descriptionRequest } from "./DescriptionSaga";

export default function* rootSaga() {
  yield all([GetMoviesRequest(), CheckApiKey(), descriptionRequest()]);
}
