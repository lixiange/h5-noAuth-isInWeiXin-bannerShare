import React, { useEffect, useState } from "react";
import { GetQueryString } from "../../utils/util.js";
import "./style.scss";

function Home(props) {
  const [url, setUrl] = useState("");



  return (
    <div className="homewrapper">
     h5模板，没有静默授权，禁止微信分享，且判断必须在微信环境内打开
    </div>
  );
}

export default Home;
