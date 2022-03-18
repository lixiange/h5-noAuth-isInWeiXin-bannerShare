import React, { useCallback, useLayoutEffect, useRef, useState } from "react";

//封装usestate改变状态后的回调hooks
export default function useStateCallback(originState) {
  let [state, setState] = useState(originState);
  let usecallback = useRef(null);
  useLayoutEffect(() => {
    if (typeof usecallback.current === "function") {
      usecallback.current(state);
    }
  }, [state]);

  const setStateCallback = useCallback((changState, callback) => {
    usecallback.current = callback;
    setState(changState);
  }, []);

  return [state, setStateCallback];
}
