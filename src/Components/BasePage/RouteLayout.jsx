import React from "react";
import { Route } from "react-router-dom";
import cofigWechatShare from "./wechatShare";

import { connect } from "react-redux";
import ErrorBoundary from "../ErrorBoundaries";

function Layout(props) {
  return <Route {...props}>{props.children}</Route>;
}

function AppRoute(props) {
  const { exact, path } = props;
  cofigWechatShare();
  return (
    <ErrorBoundary>
      <Route exact={exact} path={path}>
        <Layout {...props}>{props.children}</Layout>
      </Route>
    </ErrorBoundary>
  );
}

export default connect((state) => ({
  hasLogin: state.app.get("hasLogin"),
  userId: state.app.get("userId"),
}))(AppRoute);
