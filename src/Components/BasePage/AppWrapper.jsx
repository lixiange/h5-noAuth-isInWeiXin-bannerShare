import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators";
import RouterWrapper from "./RouterWrapper";
import getRedirectPath from "./getRedirectPath";

class BasePage extends Component {
  componentDidMount() {
    this.props.initApp();
  }
  render() {
    const { isReady } = this.props;
    if (isReady) {
      return (
        <RouterWrapper>
          <Switch>
            {this.props.children}
            {/* 在 hashRouter 下为了实现微信分享功能需要开启重定向模式  */}

            <Redirect from="/" to="/home" />
          </Switch>
        </RouterWrapper>
      );
    }
    return null;
  }
}
const mapStateToProps = (state) => {
  return {
    isReady: state.app.get("isReady"),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initApp: function (data) {
      dispatch(actionCreators.initApp(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BasePage);
