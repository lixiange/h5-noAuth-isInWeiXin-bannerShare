This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### 适配方案

使用 vw 作为样式大小进行适配 并且 使用 postcss-px-to-viewport 进行尺寸单位的自动
转换。

### 实现 1px 方案

具体方式在 './src/index.css/' 中可查看

### 处理元素容器宽高比

使用 postcss-aspect-ratio-mini

### 入口地址

<!-- http://tinyurl.com/tax86ub -->

### 模板介绍

没有静默授权 <br /> 禁止微信内分享，<br /> 且判断必须在微信环境内打开<br />如果
简单页面可以使用原生 js
