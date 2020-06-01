import React, { Component } from 'react'
import { Article } from '../../utils/interface'

interface IProp {
  location:any
}

interface IState {
  item:Article
}

export default class Blog extends Component<IProp, IState> {

  componentWillMount():void {
    this.setState({
      item: this.props.location.query.item
    })
  }

  render() {
    return (
      <div className="blog-details">
        
      </div>
    )
  }

}
