import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import $request from "request/api.js";
import ajaxError from "request/ajaxError.js";

//返回当前实时调用
export default function useRealtimePeople(encryptCustomerId) {
  let [state, setState] = useState();

  const getRealtimePeople = useCallback(async () => {
    let { err, res } = await ajaxError($request.getRealTimePeople, {encryptCustomerId});
    if (err) return;
    setState(res.data.onlineNum);
  }, [encryptCustomerId]);

  useLayoutEffect(() => {
    getRealtimePeople();
    let id = setInterval(() => {
      getRealtimePeople();
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, [getRealtimePeople]);

  return state;
}
