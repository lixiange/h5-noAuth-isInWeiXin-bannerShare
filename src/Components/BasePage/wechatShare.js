import _merge from "loadsh/merge";
import config from "../../config";
import request from "../../request/api";

const shareConfig = (opt = {}) => {
  if (process.env.NODE_ENV !== "production") {
    return;
  }
  const { origin, pathname, search } = window.location;
  let href = origin + pathname + search;
  request
    .wechatJssdk({
      href,
    })
    .then((res) => {
      let data = res.signature;
      window.wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: config.defaultWechatShareConfig.jsApiList,
      });
      const { title, desc, imgUrl, link } = _merge(
        config.defaultWechatShareConfig,
        opt
      );
      // 如果未设置link值默认使用 origion+pathname 地址作为分享链接
      window.wx.ready(function () {
        window.wx.hideAllNonBaseMenuItem();
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，
        // 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。
        // 对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
      });
    });
};
export default shareConfig;
