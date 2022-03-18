import React from "react";
import $request from "request/api.js";
import './style.scss'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(JSON.stringify(errorInfo.componentStack));
    // 将错误日志上报给服务器
    $request.pageLog({
      behavior: "捕获页面中js错误",
      logType: 1,
      logContent: JSON.stringify({
        error,
        errorInfo,
      }),
    });
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>页面出错了，请您刷新重试</h1>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
