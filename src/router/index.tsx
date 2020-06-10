import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Home from '../views/home/home'
import Blog from '../views/blog/blog'
import Message from '../views/message/message'

function RouterView() {

  /**
   * 可在 Switch 里面用插值表达式实现路由守卫
   */
  return (
    <Switch>
      <Route key={ 0 } path="/"
        component={ Home } exact/>
      <Route key={ 1 } path="/blog"
        component={ Blog } exact/>
      <Route key={ 2 } path="/message"
        component={ Message } exact/>
      <Redirect key="99" from="/home" to="/"/>
      <Redirect key="404" to="/"/>
    </Switch>
  )

}

export default withRouter(RouterView)