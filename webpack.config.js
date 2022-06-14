const port = process.env.PORT || 3000
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.js", // 번들링을 시작할 js 파일의 위치
  output: {
    filename: "bundle.[hash].js", // 번들링 결과 생성된 js 파일이 저장될 경로
  },
  module: {
    rules: [
      // babel loader
      {
        test: /\.(js|jsx)$/, // .js, .jsx 파일에 대해
        exclude: /node_modules/, // node_modules는 transpile하지 않음.
        use: {
          loader: "babel-loader",
        },
      },
      // html loader
      {
        test: /\.html$/, // .html파일에 대해
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", // public/index.html를 template으로 지정
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    open: true,
  },
}
