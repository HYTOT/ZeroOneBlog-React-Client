import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './LogoHeader.scss'

interface IProp {
  title?:string
  type?:string
  hide?:boolean
  switchMenu?:any
}

interface IState {

}

class LogoHeader extends Component<IProp, IState> {

  render() {
    return (
      <header>
        <div className={`top ${this.props.hide ? 'hide' : ''}`}>
          <div className="logo">
            <i className="iconfont icon-Field-Binary"></i>
            <span className="logo-title">
              { this.props.title || 'Zero One Blog' }
            </span>
          </div>
          <i className="iconfont icon-wuxupailie"
            onClick={ this.props.switchMenu }></i>
        </div>
        <div className="bottom">
          <span className="type-title">
            { this.props.type || '全部分类' }文章
          </span>
          <div className="other-pages">
            <NavLink to='/message'><span>留言</span></NavLink>
            <span>关于</span>
          </div>
        </div>
      </header>
    )
  }

}

export default LogoHeader
