import { Toast, Modal } from "antd-mobile";
import $request from "request/api.js";

Toast.config({ duration: 2, mask: true });

/**
 * 根据code吗返回对应的处理函数
 * @param {number} curCode
 * @returns {function} 返回对应的异常处理函数
 */
const getErrorEvents = (curCode) => {
  //错误信息中若没有code码，直接提示异常信息，并执行回调

  return (message, callback = () => {}) => {
    callback();
    Toast.fail(message);
  };
};

export default async function dealError(
  method,
  params,
  errCallbacks = () => {}
) {
  try {
    const res = await method(params);
    return { error: null, res };
  } catch (error) {
    $request.pageLog({
      behavior: error.message,
      logType: 2,
      logContent: JSON.stringify({
        params,
        error,
        method: method,
        time: new Date(),
      }),
    });
    const errorEvent = getErrorEvents(error.code);
    errorEvent(error.message, errCallbacks);
    return { error, res: null };
  }
}
