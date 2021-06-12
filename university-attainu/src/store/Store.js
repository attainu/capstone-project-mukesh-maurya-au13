import { createStore } from "redux";
import CombineReducers from "../reducers/combineReducers";

const Store = createStore(CombineReducers);

export default Store;
// const Store = createStore()
