import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterView from './router/index'
import './App.scss'
import 'antd-mobile/dist/antd-mobile.css'

interface IProp {

}

interface IState {

}

class App extends Component<IProp, IState> {
  render() {
    return (
      <div id="app">
        <Router>
          <RouterView></RouterView>
        </Router>
      </div>
    )
  }
}

export default App
