const config = {
  apiBase: `https://kcpapi.intcolon.com/kcp/api/${1}`, //请求base地址
  // apiBase: `https://kcpapi.intcolon.com/kcp/api/${1}`, //请求base地址
  timeout: 15000, //请求超时
  errorMsg: {
    network: "网络已断开，请重试", //网络断开提示语
    timeout: "请求超时，请重试", //请求超时提示语
  },
};
export default config;
