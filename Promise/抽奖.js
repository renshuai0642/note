const random = (max) => {
  return Math.floor(Math.random() * max + 1);
}

// 传入异步操作，成功时调用resolve，失败时调用reject
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = random(100);
    if (num<=30) {
      resolve(num);
    } else {
      reject(num);
    }
  }, 2000)
}).then(
  (value) => {
    console.log(`生成的数字在1-30之间，数字是${value}`);
  },
  (reason) => {
    console.log(`生成的数字大于30，数字是${reason}`);
  }
)

console.log('p是什么', p);