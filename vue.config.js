// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].filename = '../site/templates/home.php'
        return args
      })

    config
      .output
      .publicPath('/assets/')
  }
}
