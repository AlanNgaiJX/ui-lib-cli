const utils = require('./utils')
// 配置文件夹别名，extensions中的后缀在引入时可以忽略后缀，alias就是一些别名
module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'src': utils.resolve('src'),
            'components': utils.resolve('components'),
            'xx-ui': utils.resolve('components/index.js'),
        }
    },
}
