export interface ReactRouteConfig {
  path:string
  component:any
}

export interface IProp {

}

export interface IState {

}

export interface Technology {
  id:number | string
  name:string
}

/**
 * reader: 阅读数量
 * messages: 评论数量
 */
export interface Article {
  id:number | string
  createtime:string
  title:string
  genre:Technology
  reader:number
  messages:number
}