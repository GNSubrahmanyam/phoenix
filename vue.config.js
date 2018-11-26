const appConfig = require('./src/app.config.js')

module.exports = {
  configureWebpack: {
    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: appConfig.title,
    // Set up all the aliases we use in our app.
    resolve: {
      alias: require('./aliases.config').webpack
    },
    devtool: 'source-map'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true
  }
}
