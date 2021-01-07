module.exports = {
  publicPath: './',
  productionSourceMap: false,

  devServer: {
    open: true,
    host: 'localhost',
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: {
      '/cgi-bin': {
        target: 'http://172.16.14.95/cgi-bin/',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/cgi-bin': ''
        }
      }
    }
  }
}