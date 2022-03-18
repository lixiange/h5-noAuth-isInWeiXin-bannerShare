import { useEffect } from "react";
import config from "../config";
import { GetQueryString } from "../utils/util";
import { useHistory } from "react-router-dom";

// 微信非静默授权逻辑，如果没有授权过则执行授权逻辑，将拿到的openid保存在本地，然后返回上一页，放置复制时携带openid
const useWxCode = () => {
  useEffect(() => {
    const { openidKey, api } = config.wechatAuthConfig;
    const openid = GetQueryString(openidKey);
    const localOpenid = sessionStorage.getItem("localOpenid");
    if (!openid && !localOpenid) {
      const href = window.location;
      const origion = href.origin;
      const pathname = href.pathname;
      const search = href.search;
      window.location.href =
        api +
        encodeURIComponent(encodeURIComponent(origion + pathname + search));
      return null;
    } else if (openid) {
      sessionStorage.setItem("localOpenid", openid);
      window.history.back();
    }

    return () => {
      sessionStorage.removeItem("localOpenid");
    };
  }, []);

  return sessionStorage.getItem("localOpenid");
};
export default useWxCode;
