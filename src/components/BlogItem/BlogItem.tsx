import React, { Component } from 'react'
import { Article } from '../../utils/interface'
import './BlogItem.scss'

interface IProp {
  history:any
  item:Article
}

interface IState {
  
}

export default class BlogItem extends Component<IProp, IState> {

  readArticle = () => {
    this.props.history.push({
      pathname: '/blog',
      query: {
        item: this.props.item
      }
    })
  }

  render() {
    return (
      <section className="blog-item" onClick={ () => this.readArticle() }>
        <div className="createtime">{ this.props.item.createtime }</div>
        <div className="title">{ this.props.item.title }</div>
        <div className="info">
          <span>{ this.props.item.genre.name }</span>
          <span>阅读量:{ this.props.item.reader }</span>
          <span>评论:{ this.props.item.messages }</span>
        </div>
      </section>
    )
  }

}
