import React, { Component } from 'react'
import './Header.scss'

interface IProp {
  title?:string
  history:any
}

interface IState {
  
}

export default class Header extends Component<IProp, IState> {
  render() {
    return (
      <header className="header-component">
        <span className="back"
          onClick={ () => this.props.history.goBack() }>
          <i className="iconfont icon-angle-right"></i>
        </span>
        <h4 className="header-title">
          { this.props.title || '未命名标题' }
        </h4>
      </header>
    )
  }
}
