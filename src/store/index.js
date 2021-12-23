import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import reducer1 from "./reducer1";
import reducer2 from "./reducer2";
import reducer3 from "./reducer3";

let reducers = combineReducers({ reducer1,reducer2,reducer3 });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();