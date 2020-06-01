import React, { Component } from 'react'
import SectionItem from '../SectionItem/SectionItem'
import { Technology } from '../../utils/interface'
import './AsideMenu.scss'

interface IProp {
  title?:string
  unfold?:boolean
  switchMenu?:any
  list?:Array<any>
  selectItem:Function
}

interface IState {
  
}

export default class AsideMenu extends Component<IProp, IState> {

  render() {
    const genres = this.props.list?.map((genre:Technology) => {
      return <SectionItem title={ genre.name } key={ genre.id }
      tapItem={ (name:string) => this.props.selectItem({
        id: genre.id,
        name,
      }) }/>
    })
    return (
      <aside className={ this.props.unfold ? 'unfold' : '' }
        onClick={ this.props.switchMenu }>
        <div className="menu-block"
          onClick={ (e):void => e.stopPropagation() }>
          <div className="more-operations">
            <span>{ this.props.title || '未命名标题：' }</span>
          </div>
          <div className="genre-list">
            <SectionItem title="全部分类" key="0"
              tapItem={ (name:string) => this.props.selectItem({
                id: 0,
                name,
              }) }/>
            { genres }
          </div>
        </div>
      </aside>
    )
  }
}
