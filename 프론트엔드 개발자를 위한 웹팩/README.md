# 프론트엔드 개발자를 위한 웹팩
강좌를 수강하면서 정리한 코드 및 내용

## 깃헙 리포지토리 및 교안 
https://github.com/joshua1988/LearnWebpack
https://joshua1988.github.io/webpack-guide/

## TIPs

### npm 장점
- 라이브러리 의존성, 버전 관리 편리
- 쉽게 설치

### npm 전역 설치 경로
MAC: /usr/local/lib/node_modules

### dependencies vs devDependencies
- dependencies는 애플리케이션의 로직을 구현하는, 직접적인 연관이 있는 모듈들을 말한다. 예를 들어, jQuary, react 등
- devDependencies는 개발을 보조하는 모듈을 말한다. 예를 들어, webpack, js-compression, sass 등

### webpack
모듈 번들러. 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javascript, Images 등)을 하나의 결과물로 만듦.
웹 애플리케이션의 로딩 속도와 성능이 향상된다.

### HTTP 요청 개수 제약
브라우저 별로 요청 개수가 제약되어 있다. 크롬이나 안드로이드/iOS는 6개이다.

### Babel
ES6를 브라우저가 호환 가능한 Javascript 문법으로 변환한다.

### webpack 속성: entry
최초 진입점이자 자바스크립트 파일 경로

### webpack 속성: output
웹팩을 돌리고 난 결과물 파일 경로

### webpack 속성: loader
자바스크립트가 아닌 다른 웹 자원들을 변환할 있도록 도와줌

### webpack 속성: plugin
결과물의 형태를 바꿈

### npm run build/dev
웹팩 데브 서버를 사용하여 주로 개발을 진행하고, 배포할 때 빌드한다. 이 명령어들을 `package.json`에 명령어로 정의한다.
```
"scripts": {
  "dev": "webpack serve",
  "build": "webpack"
}
```

### vue-cli로 생성되는 webpack.config.js (webpack 3.x)

```
var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',   // CDN 관련 속성
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  // resolve는 웹팩의 파일 해석 방식을 정의
  resolve: {
    // alias는 말 그대로 별칭. 'vue$'를 입력하면 'vue/dist/vue.esm.js'로 해석하겠다! 를 의미
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    // 확장자를 붙이지 않아도 js와 vue와 json은 잘 해석하겠다! 를 의미
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

// 웹팩 3.x에서 필요했던 코드. 4.0으로 업그레이드되면서 mode: 'production' 만 추가하면 된다.
// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }
```
