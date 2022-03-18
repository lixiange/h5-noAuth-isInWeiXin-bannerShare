import { fromJS, merge } from "immutable";
import { combineReducers } from "redux";
import config from "../config";

import * as constants from "./constants";
const defaultOption = fromJS({
  isReady: false,
});

function appReducer(oldState = defaultOption, action) {
  let { type, data } = action;
  switch (type) {
    case constants.initData:
      return oldState.merge(fromJS(data));
    case constants.changeCurrentModal:
      return oldState.merge(fromJS(data));
    default:
      return oldState;
  }
}
const createRootReducer = () =>
  combineReducers({
    app: appReducer,
  });
export default createRootReducer();
