const { mineReadFile } = require("./util");

mineReadFile('../resource/content.txt').then((value) => {
  console.log(value);
}, (reason) => {
  throw(reason);
})