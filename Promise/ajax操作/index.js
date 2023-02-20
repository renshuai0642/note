const btn = document.getElementById('btn');
const content = document.getElementById('content');

const getJoke = async () => {
  const p = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://bird.ioliu.cn/joke');
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response).data[0].content);
      } else {
        reject('请求失败');
      }
    }
  });

  p.then(
    (value) => {
      content.innerHTML = value;
    },
    (reason) => {
      throw(reason);
    }
  )
};

btn.addEventListener('click', getJoke);
