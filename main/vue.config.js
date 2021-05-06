module.exports = {
  publicPath: './',
  productionSourceMap: false,
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    open: true, // 启动后打开浏览器
    port: '8080',
    disableHostCheck: true, // 设置为 true 时，将会跳过 host 检查。这是不推荐的因为不检查host的应用容易受到DNS重新绑定攻击。
    compress: true,         // 为每个静态文件开启压缩 (gzip compression)
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true, // 当使用 HTML5 History API 时, 所有的 404 请求都会响应 index.html 的内容。 将 devServer.historyApiFallback 设为 true开启：
    overlay: { warnings: false, errors: true }, // 显示编译器错误
  },
};
