import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ReactRouteConfig } from '../utils/interface'
import Home from '../views/home/home'
import Blog from '../views/blog/blog'
import Message from '../views/message/message'

const routerConfig = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/message', component: Message },
]

export default function RouterView() {

  const routes:Array<JSX.Element> = routerConfig.map(
    (route:ReactRouteConfig, index:number) => {
    return (
      <Route key={index} path={route.path}
        component={route.component} exact/>
    )
  })

  routes.push(<Redirect key="99" from="/home" to="/"/>)
  routes.push(<Redirect key="404" to="/"/>)

  return (
    <Switch>
      { routes }
    </Switch>
  )

}