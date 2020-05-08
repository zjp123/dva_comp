import React from 'react'
import {renderRoutes} from 'react-router-config'
// import routes from './router/config'
import {Link} from 'dva/router';

export default function Login(props){

  const {route} = props
  console.log(props, 'LoginLoginLogin')

  return (
    <div>
      <p>login页面</p>
      <Link to="/login/page1">page1</Link>
      <Link to="/login/page2">page2</Link>
      {renderRoutes(route.routes)}
    </div>
  )
}