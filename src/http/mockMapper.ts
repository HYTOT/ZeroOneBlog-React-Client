import Mock from 'mockjs'
import { MockDatas } from './../utils/type'

const technology:Function = ():MockDatas => {
  let id = 0
  return [
    'React.js', 'Vue.js', 'Angular.js',
    'Nuxt.js', 'uni-app', 'mpvue',
    'Ant Design', 'ElementUI', 'Flutter',
    'SpringBoot', 'SpringCloud', 'Mybatis',
    'Linux', 'Nginx', 'Docker', 'HTML/CSS',
  ].map((name:string) => {
    return {
      "id": ++id,
      name,
    }
  })
}

const article:Function = ():MockDatas => {
  return Mock.mock({
    "list|10": [{
      "id|+1": 0,
      "createtime": "@date",
      "title": "@ctitle",
      "genre": {
        "id|+1": 0,
        "name": "@word",
      },
      "reader|0-999": 1,
      "messages|0-999": 1,
    }]
  }).list
}

export const mockMapper:{ [index:string]:MockDatas } = {
  '/api/sys/genre/list': technology(),
  '/api/sys/article/list': article(),
}