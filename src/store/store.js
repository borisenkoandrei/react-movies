import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import logger from "redux-logger";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../saga/RootSaga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);

export default store;

sagaMiddleware.run(rootSaga);
