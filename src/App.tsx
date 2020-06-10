import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
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
        <BrowserRouter>
          <RouterView></RouterView>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
