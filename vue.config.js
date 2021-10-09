const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

const pages = {}

const chromeName = ['popup', 'background', 'options', 'content']

chromeName.forEach(name => {
  pages[name] = {
    entry: `src/pages/${name}/main.js`,
    template: 'public/index.html',
    filename: `${name}.html`
  }
})

module.exports = {
  pages,
  filenameHashing: false,
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, vueSrc)
    //   },
    //   extensions: ['.js', '.vue', '.json']
    // },
    devtool: 'cheap-module-source-map',
    plugins: [
      CopyWebpackPlugin([
        {
          from: path.resolve('manifest.json'),
          to: `${path.resolve('dist')}/manifest.json`
        }
      ])
    ]
  },
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },
  transpileDependencies: ['quasar']
}
