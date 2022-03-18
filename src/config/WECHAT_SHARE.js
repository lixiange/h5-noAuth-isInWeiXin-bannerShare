const config = {
  apiUrl: "https://kcpapi.intcolon.com/kcp/api/1/wechat/mp/jssdk",
  jsApiList: [
    "onMenuShareTimeline",
    "onMenuShareAppMessage",
    "hideMenuItems",
    "hideAllNonBaseMenuItem",
  ], //需要调用的功能列表
  wxShareTitle: "金佰利", //分享标题
  wxShareDesc: "金佰利抽奖", //分享描述
  wxShareUrl: "https://kcp-oss.intcolon.com/lotto/index.html", //分享地址
  wxShareImg: "https://oss.intcolon.com/kcp/brandShare.jpg", //分享缩略图
};
export default config;
