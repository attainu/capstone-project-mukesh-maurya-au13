import { composeWithDevTools } from "redux-devtools-extension";

// import logger from "redux-logger";
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import CombineReducers from "../reducers/combineReducers";

const middleware = [thunk]

const Store = createStore(
  CombineReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
