const fs = require('fs');

// fs.readFile('./resource/content.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const p = new Promise((resolve, reject) => {
  fs.readFile('./resource/content.txt', 'utf-8', (err, data) => {
    if (err) reject(err);
    resolve(data);
  })
});

p.then(
  (value) => {
    console.log(value);
  }, 
  (reason) => {
    throw(reason);
  }
)