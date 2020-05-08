import React from 'react'
import {renderRoutes} from 'react-router-config'
// import routes from './router/config'
import Header from '../../layout/header';



export default function Piaoju(props){

  const {route} = props
  return (
    <div>
      <Header />
      <p>票据页面</p>
      <p>票据页面</p>
      <p>票据页面</p>
      {renderRoutes(route.routes)}
    </div>
  )
}