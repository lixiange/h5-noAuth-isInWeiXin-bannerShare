import React, { Component } from "react";
import { AppWrapper, WechatShareRoute, AppRoute } from "./Components/BasePage";
import Home from "./pages/home";
import "./static/style/common.scss";

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppRoute exact path="/home">
          <Home />
        </AppRoute>
      </AppWrapper>
    );
  }
}
export default App;
