import React, { Component } from 'react'
import './SectionItem.scss'

interface IProp {
  iconUrl?:string
  title?:string
  title2?:string
  tapItem:Function
}

interface IState {
  
}

export default class SectionItem extends Component<IProp, IState> {

  tap = ():void => {
    this.props.tapItem(this.props.title)
  }

  render() {
    return (
      <section className="section-item"
        onClick={ this.tap }>
        { this.props.iconUrl &&
          <i className={ `iconfont ${this.props.iconUrl}` }></i> }
        <h3 className="title">{ this.props.title }</h3>
        <h3 className="title2">{ this.props.title2 }</h3>
        <i className="iconfont icon-angle-right"></i>
      </section>
    )
  }
}
