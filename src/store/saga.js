import { put, takeEvery, call } from "redux-saga/effects";
import * as constants from "./constants";
import { initData } from "./actionCreators";
import request from "../request/api";
import dealError from "../request/ajaxError";
import { GetQueryString } from "../utils/util";

function* initApp(action) {

  // 在这个地方请求接口发送fromOpenid
  yield put(
    initData({
      isReady: true,
    })
  );
}
function* rootSaga() {
  yield takeEvery(constants.initApp, initApp);
}

export default rootSaga;
