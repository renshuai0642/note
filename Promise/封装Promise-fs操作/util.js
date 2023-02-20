/**
 * 封装一个函数mineReadFile，读取指定路径的文件，返回一个Promise结果
 * 参数path
 * 返回promise
 */
const fs = require('fs');

const mineReadFile = (path) => {
  const p = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
  return p;
}

module.exports = {
  mineReadFile: mineReadFile
};