const appConfig = require('./src/app.config.js')

module.exports = {
  configureWebpack: {
    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: appConfig.title
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true
  }
}
