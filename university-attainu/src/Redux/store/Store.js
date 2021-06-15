import { composeWithDevTools } from "redux-devtools-extension";

import logger from "redux-logger";
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import CombineReducers from "../reducers/combineReducers";

const Store = createStore(
  CombineReducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default Store;
