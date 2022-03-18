import { useCallback, useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import request from "../request/api";

//在访问页面时统计页面pv
function usePageViewMonitor() {
  const pageUrl = useRouteMatch().path;

    useEffect(() => {
      console.log('到这了')
    // request.logPot({
    //   pageUrl,
    //   pageDesc: "访问页面",
    //   behaviorType: 1,
    // });
  }, [pageUrl]);
  return;
}

export default usePageViewMonitor;
