import Mock from 'mockjs'
import { MockDatas } from './../utils/type'

const technology:Function = ():MockDatas => {
  return Mock.mock({
    "list|15": [{
      "id|+1": 0,
      "name": "@word",
    }]
  }).list
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
  '/sys/genre/list': technology(),
  '/sys/article/list': article(),
}