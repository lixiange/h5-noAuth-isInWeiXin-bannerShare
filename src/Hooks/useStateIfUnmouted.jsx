import { useState, useRef, useEffect, useCallback } from "react";

//判断set状态的时候页面是否已经被卸载，如果被卸载了则不改变页面状态
export default function useStateIfMounted(initialValue) {
  const isUnmounted = useRef(false);
  useEffect(() => {
    isUnmounted.current = false;
    return () => {
      isUnmounted.current = true;
    };
  }, []);
  const [state, setState] = useState(initialValue);
  const newSetState = useCallback((value) => {
    if (!isUnmounted.current) {
      setState(value);
    }
  }, []);
  return [state, newSetState];
}
