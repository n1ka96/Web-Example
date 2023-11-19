const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

// module.exports = {
//   pages: {
//     index: {
//       entry: 'src/main.js'
//     }
//   },
//   lintOnSave: false,
//   transpileDependencies: true,
// }
