function myAxios(config: {url: string, method?: string}) {}

myAxios({
  url: 'http://www.baidu.com'
})

myAxios({
  url: 'http://www.baidu.com',
  method: 'get'
})
