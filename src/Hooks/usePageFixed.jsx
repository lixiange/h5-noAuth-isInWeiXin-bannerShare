import React, { useCallback, useEffect, useRef, useState } from "react";
import $request from "request/api.js";
import ajaxError from "request/ajaxError.js";

//返回当前实时调用
export default function useRealtimePeople() {
  const scrollyRef = useRef(0);

  const fixedPage = useCallback(() => {
    const scrollY = window.scrollY;
    scrollyRef.current = scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = -scrollY + "px";
  }, []);

  useEffect(() => {
    fixedPage();
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollyRef.current);
    };
  }, [fixedPage]);

  return;
}
