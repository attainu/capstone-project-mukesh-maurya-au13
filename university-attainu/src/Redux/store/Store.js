import { composeWithDevTools } from "redux-devtools-extension";

// import logger from "redux-logger";
import thunk from "redux-thunk";
// import promiseMiddleware from "redux-promise";

import { createStore, applyMiddleware } from "redux";
import CombineReducers, { initialState } from "../reducers/combineReducers";

const middleware = [thunk];

const Store = createStore(
  CombineReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
