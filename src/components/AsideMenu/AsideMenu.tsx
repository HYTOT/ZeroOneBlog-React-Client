import React, { Component } from 'react'
import SectionItem from '../SectionItem/SectionItem'
import './AsideMenu.scss'

interface IProp {
  title?:string
  unfold?:boolean
  switchMenu?:any
  list?:Array<any>
}

interface IState {
  
}

export default class AsideMenu extends Component<IProp, IState> {

  render() {
    const genres = this.props.list?.map((genre:any) => {
      return <SectionItem title={ genre.name } key={ genre.id }/>
    })
    return (
      <aside className={ this.props.unfold ? 'unfold' : '' }
        onClick={ this.props.switchMenu }>
        <div className="menu-block"
          onClick={ (e):void => e.stopPropagation() }>
          <div className="more-operations">
            <span>{ this.props.title || '未命名标题：' }</span>
          </div>
          <SectionItem title="全部分类" key="0"/>
          { genres }
        </div>
      </aside>
    )
  }
}
