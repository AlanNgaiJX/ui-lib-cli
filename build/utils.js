/*
 * @Author: your name
 * @Date: 2021-03-16 16:25:44
 * @LastEditTime: 2021-03-16 19:25:02
 * @LastEditors: Please set LastEditors
 * @Description: 打包时的工具类，主要是返回文件路径
 * @FilePath: /fedora/build/utils.js
 */
const fs = require('fs');
const path = require('path');

const join = path.join;
const resolve = (dir) => path.join(__dirname, '../', dir);

module.exports = {
  resolve, // 返回项目中的文件夹路径
  getComponentEntries(_path, ignoreDir) { // 返回组件文件夹中的入口文件路径
    const files = fs.readdirSync(resolve(_path));
    const componentEntries = files.reduce((ret, item) => {
      const itemPath = join(_path, item);
      const isDir = fs.statSync(itemPath).isDirectory();
      if (isDir) {
        ret[item] = resolve(join(itemPath, 'index.js'));
      } else {
        const [name] = item.split('.');
        ret[name] = resolve(`${itemPath}`);
      }
      return ret;
    }, {});
    // 忽略这些目录
    ignoreDir.forEach((dirName) => {
      delete componentEntries[dirName];
    });
    // 检查打包了哪些组件
    // console.dir(componentEntries);
    return componentEntries;
  },
};
