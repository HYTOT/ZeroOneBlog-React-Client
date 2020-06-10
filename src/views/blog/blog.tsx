import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import { Article } from '../../utils/interface'
import './blog.scss'

interface IProp {
  history:any
  location:any
}

interface IState {
  item:Article
}

export default class Blog extends Component<IProp, IState> {

  componentWillMount():void {
    if (!this.props.location.query) {
      this.props.history.push('/')
      return
    }
    console.log(this.props)
    this.setState({
      item: this.props.location.query.item
    })
  }

  render() {
    return (
      <div className="blog-details">
        <Header title={this.state?.item?.title}
          history={this.props.history}/>
        <div dangerouslySetInnerHTML={{
          __html: this.state?.item?.content
        }}></div>
        <h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1><h1>Test</h1>
      </div>
    )
  }

}
