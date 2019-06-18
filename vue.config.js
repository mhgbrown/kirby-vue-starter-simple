/* eslint-disable indent */
module.exports = {
  publicPath: '/assets/',
  chainWebpack: config => {
    // set destination of "compiled" Vue app template to
    // Kirby's home.php
    config
      .plugin('html')
      .tap(args => {
        args[0].filename = '../site/templates/home.php'
        return args
      })

    // handle font files appropriately
    config.module
      .rule('fonts')
        .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
        .use('url-loader')
          .options({
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]'
          })
  }
}
