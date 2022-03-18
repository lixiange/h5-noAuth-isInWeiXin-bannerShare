import * as constants from "./constants";
export const initApp = (data) => ({
  type: constants.initApp,
  data,
});
export const initData = (data) => ({
  type: constants.initData,
  data,
});
export const changeCurrentModal = (data) => ({
  type: constants.changeCurrentModal,
  data,
});
